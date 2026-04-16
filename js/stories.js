/* =====================================================
   QURAN STORIES FOR KIDS — Narrator + Sounds + Scenes
   ===================================================== */
(function () {
  'use strict';

  // ── Detect which story we're on ──────────────────────
  const validKeys = ['adam','nuh','ibrahim','yusuf','musa','sulaiman','yunus','kahf'];
  const pathParts  = window.location.pathname.split('/');
  const STORY_KEY  = (pathParts[pathParts.length - 1] || '').replace('.html','');
  if (!validKeys.includes(STORY_KEY)) return;

  // ── Per-story config ──────────────────────────────────
  const STORY_CONFIG = {
    adam:     { sound: 'wind',    label: 'Garden of Eden'          },
    nuh:      { sound: 'rain',    label: 'The Great Flood'         },
    ibrahim:  { sound: 'fire',    label: 'The Blazing Fire'        },
    yusuf:    { sound: 'night',   label: 'A Starry Night'          },
    musa:     { sound: 'waves',   label: 'The Parting Sea'         },
    sulaiman: { sound: 'birds',   label: 'Palace of Sulaiman'      },
    yunus:    { sound: 'deep',    label: 'The Deep Ocean'          },
    kahf:     { sound: 'cave',    label: 'The Sacred Cave'         },
  };

  // ════════════════════════════════════════════════════
  //  NARRATOR  (Web Speech API)
  // ════════════════════════════════════════════════════
  const synth = window.speechSynthesis;
  let paragraphs  = [];
  let currentIdx  = 0;
  let isReading   = false;
  let isPaused    = false;

  function collectParagraphs() {
    return Array.from(document.querySelectorAll('.story-box p, .lesson-item p')).filter(p =>
      !/[\u0600-\u06FF]/.test(p.textContent) && p.innerText.trim().length > 10
    );
  }

  function setHighlight(p) {
    paragraphs.forEach(el => el.classList.remove('reading-now'));
    if (p) {
      p.classList.add('reading-now');
      p.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function updateProgress() {
    const bar = document.getElementById('narProgressFill');
    if (bar && paragraphs.length) {
      bar.style.width = Math.round((currentIdx / paragraphs.length) * 100) + '%';
    }
  }

  function speakNext() {
    if (!isReading || currentIdx >= paragraphs.length) {
      finishReading(); return;
    }
    const p = paragraphs[currentIdx];
    setHighlight(p);
    updateProgress();

    const text = p.innerText.replace(/["""'']/g, '').trim();
    const utt  = new SpeechSynthesisUtterance(text);
    utt.rate   = 0.88;
    utt.pitch  = 1.1;
    utt.volume = 1;

    // Pick a friendly English voice
    function setVoice() {
      const voices   = synth.getVoices();
      const preferred = voices.find(v =>
        /samantha|karen|victoria|moira|fiona|google uk english female|zira/i.test(v.name)
      ) || voices.find(v => /en[-_]/i.test(v.lang)) || voices[0];
      if (preferred) utt.voice = preferred;
    }
    if (synth.getVoices().length) setVoice();
    else synth.addEventListener('voiceschanged', setVoice, { once: true });

    utt.onend   = () => { currentIdx++; speakNext(); };
    utt.onerror = () => { currentIdx++; speakNext(); };
    synth.speak(utt);
  }

  function startReading() {
    if (!('speechSynthesis' in window)) {
      alert('Voice narration is not supported in your browser.\nTry Chrome or Safari!'); return;
    }
    synth.cancel();
    paragraphs  = collectParagraphs();
    currentIdx  = 0;
    isReading   = true;
    isPaused    = false;
    updateNarratorUI();
    speakNext();
  }

  function pauseReading() {
    if (!isReading) return;
    if (isPaused) { synth.resume(); isPaused = false; }
    else          { synth.pause();  isPaused = true;  }
    updateNarratorUI();
  }

  function stopReading() {
    synth.cancel();
    isReading  = false;
    isPaused   = false;
    currentIdx = 0;
    setHighlight(null);
    const bar = document.getElementById('narProgressFill');
    if (bar) bar.style.width = '0%';
    updateNarratorUI();
  }

  function finishReading() {
    setHighlight(null);
    isReading = false;
    const bar = document.getElementById('narProgressFill');
    if (bar) bar.style.width = '100%';
    const lbl = document.getElementById('narStatus');
    if (lbl) lbl.textContent = '🌟 Story Complete! Masha\'Allah!';
    setTimeout(() => {
      if (bar) bar.style.width = '0%';
      if (lbl) lbl.textContent = 'Tap to listen again';
    }, 3500);
    updateNarratorUI();
  }

  function updateNarratorUI() {
    const btn  = document.getElementById('narPlayBtn');
    const lbl  = document.getElementById('narStatus');
    const stop = document.getElementById('narStopBtn');
    if (!btn) return;
    if (isReading && !isPaused) {
      btn.innerHTML = '<span class="btn-icon">⏸</span> Pause';
      btn.classList.add('nar-active');
      if (lbl) lbl.textContent = '🎙️ Narrator is reading…';
    } else if (isPaused) {
      btn.innerHTML = '<span class="btn-icon">▶</span> Resume';
      btn.classList.add('nar-active');
      if (lbl) lbl.textContent = '⏸ Paused';
    } else {
      btn.innerHTML = '<span class="btn-icon">🔊</span> Read Story to Me';
      btn.classList.remove('nar-active');
      if (lbl && lbl.textContent === '🎙️ Narrator is reading…') lbl.textContent = 'Tap to listen!';
    }
    if (stop) stop.style.display = isReading ? 'inline-flex' : 'none';
  }

  // ════════════════════════════════════════════════════
  //  SOUND ENGINE  (Web Audio API — no files needed)
  // ════════════════════════════════════════════════════
  let audioCtx   = null;
  let liveNodes  = [];
  let soundOn    = false;
  let loopTimers = [];

  function getCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function makeNoise(ctx, seconds) {
    const sr  = ctx.sampleRate;
    const buf = ctx.createBuffer(1, sr * seconds, sr);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop   = true;
    return src;
  }

  function startSound(type) {
    const ctx = getCtx();

    if (type === 'fire') {
      const src    = makeNoise(ctx, 2);
      const filter = ctx.createBiquadFilter();
      filter.type  = 'bandpass';
      filter.frequency.value = 500;
      filter.Q.value = 0.6;
      const gain   = ctx.createGain();
      gain.gain.value = 0.14;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      src.start();
      liveNodes.push(src, filter, gain);

      function crackle() {
        if (!soundOn) return;
        const n = makeNoise(ctx, 0.04);
        const f = ctx.createBiquadFilter();
        f.type  = 'highpass';
        f.frequency.value = 1200 + Math.random() * 2200;
        const g = ctx.createGain();
        g.gain.value = 0.25;
        n.connect(f); f.connect(g); g.connect(ctx.destination);
        n.start();
        const t = setTimeout(() => { try { n.stop(); } catch(e){} }, 55);
        loopTimers.push(setTimeout(crackle, 90 + Math.random() * 280));
        loopTimers.push(t);
      }
      crackle();

    } else if (type === 'rain') {
      const src    = makeNoise(ctx, 3);
      const filter = ctx.createBiquadFilter();
      filter.type  = 'highpass';
      filter.frequency.value = 2500;
      const gain   = ctx.createGain();
      gain.gain.value = 0.18;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      src.start();
      const bass   = makeNoise(ctx, 2);
      const bf     = ctx.createBiquadFilter();
      bf.type      = 'lowpass';
      bf.frequency.value = 80;
      const bg     = ctx.createGain();
      bg.gain.value = 0.12;
      bass.connect(bf); bf.connect(bg); bg.connect(ctx.destination);
      bass.start();
      liveNodes.push(src, filter, gain, bass, bf, bg);

    } else if (type === 'waves') {
      const src    = makeNoise(ctx, 4);
      const filter = ctx.createBiquadFilter();
      filter.type  = 'lowpass';
      filter.frequency.value = 700;
      const lfo    = ctx.createOscillator();
      lfo.type     = 'sine';
      lfo.frequency.value = 0.12;
      const lfoG   = ctx.createGain();
      lfoG.gain.value = 450;
      lfo.connect(lfoG); lfoG.connect(filter.frequency);
      const gain   = ctx.createGain();
      gain.gain.value = 0.22;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      src.start(); lfo.start();
      liveNodes.push(src, filter, lfo, lfoG, gain);

    } else if (type === 'wind') {
      const src    = makeNoise(ctx, 3);
      const filter = ctx.createBiquadFilter();
      filter.type  = 'bandpass';
      filter.frequency.value = 350;
      filter.Q.value = 0.4;
      const lfo    = ctx.createOscillator();
      lfo.type     = 'sine';
      lfo.frequency.value = 0.08;
      const lfoG   = ctx.createGain();
      lfoG.gain.value = 220;
      lfo.connect(lfoG); lfoG.connect(filter.frequency);
      const gain   = ctx.createGain();
      gain.gain.value = 0.13;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      src.start(); lfo.start();
      liveNodes.push(src, filter, lfo, lfoG, gain);

    } else if (type === 'night') {
      function cricket() {
        if (!soundOn) return;
        const osc = ctx.createOscillator();
        osc.type  = 'sine';
        osc.frequency.value = 2800 + Math.random() * 1200;
        const g   = ctx.createGain();
        const t   = ctx.currentTime;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.025, t + 0.02);
        g.gain.linearRampToValueAtTime(0, t + 0.07);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(t + 0.08);
        loopTimers.push(setTimeout(cricket, 60 + Math.random() * 130));
      }
      cricket();

    } else if (type === 'birds') {
      function chirp() {
        if (!soundOn) return;
        const osc  = ctx.createOscillator();
        osc.type   = 'sine';
        const base = 500 + Math.random() * 500;
        const t    = ctx.currentTime;
        osc.frequency.setValueAtTime(base, t);
        osc.frequency.linearRampToValueAtTime(base * 1.6, t + 0.08);
        osc.frequency.linearRampToValueAtTime(base, t + 0.18);
        const g    = ctx.createGain();
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.07, t + 0.04);
        g.gain.linearRampToValueAtTime(0, t + 0.22);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(t + 0.25);
        loopTimers.push(setTimeout(chirp, 600 + Math.random() * 2400));
      }
      chirp();

    } else if (type === 'deep') {
      const osc  = ctx.createOscillator();
      osc.type   = 'sine';
      osc.frequency.value = 48;
      const g    = ctx.createGain();
      g.gain.value = 0.09;
      osc.connect(g); g.connect(ctx.destination);
      osc.start();
      liveNodes.push(osc, g);

      function bubble() {
        if (!soundOn) return;
        const o  = ctx.createOscillator();
        o.type   = 'sine';
        const t  = ctx.currentTime;
        o.frequency.setValueAtTime(180 + Math.random() * 220, t);
        o.frequency.exponentialRampToValueAtTime(900, t + 0.18);
        const g2 = ctx.createGain();
        g2.gain.setValueAtTime(0.055, t);
        g2.gain.linearRampToValueAtTime(0, t + 0.2);
        o.connect(g2); g2.connect(ctx.destination);
        o.start(); o.stop(t + 0.22);
        loopTimers.push(setTimeout(bubble, 900 + Math.random() * 2500));
      }
      bubble();

    } else if (type === 'cave') {
      const src    = makeNoise(ctx, 3);
      const filter = ctx.createBiquadFilter();
      filter.type  = 'lowpass';
      filter.frequency.value = 180;
      const gain   = ctx.createGain();
      gain.gain.value = 0.07;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      src.start();
      liveNodes.push(src, filter, gain);

      function drip() {
        if (!soundOn) return;
        const o  = ctx.createOscillator();
        o.type   = 'sine';
        o.frequency.value = 700 + Math.random() * 500;
        const g  = ctx.createGain();
        const t  = ctx.currentTime;
        g.gain.setValueAtTime(0.07, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(t + 0.55);
        loopTimers.push(setTimeout(drip, 1800 + Math.random() * 4000));
      }
      drip();
    }
  }

  function stopSound() {
    loopTimers.forEach(clearTimeout);
    loopTimers = [];
    liveNodes.forEach(n => { try { n.disconnect(); if (n.stop) n.stop(); } catch(e){} });
    liveNodes = [];
  }

  function toggleSound() {
    const btn = document.getElementById('narSoundBtn');
    if (soundOn) {
      soundOn = false;
      stopSound();
      if (btn) { btn.innerHTML = '<span class="btn-icon">🎵</span> Ambient Sound'; btn.classList.remove('nar-active'); }
    } else {
      soundOn = true;
      startSound(STORY_CONFIG[STORY_KEY].sound);
      if (btn) { btn.innerHTML = '<span class="btn-icon">🔇</span> Stop Sound'; btn.classList.add('nar-active'); }
    }
  }

  // ════════════════════════════════════════════════════
  //  NARRATOR BAR  (injected UI)
  // ════════════════════════════════════════════════════
  function buildNarratorBar() {
    const bar = document.createElement('div');
    bar.className = 'narrator-bar';
    bar.id = 'narratorBar';
    bar.innerHTML = `
      <div class="nar-left">
        <div class="nar-avatar" id="narAvatar">📖</div>
        <div class="nar-info">
          <span class="nar-title">Story Narrator</span>
          <span class="nar-status" id="narStatus">Tap to listen!</span>
        </div>
      </div>
      <div class="nar-center">
        <div class="nar-progress" title="Reading progress">
          <div class="nar-progress-fill" id="narProgressFill"></div>
        </div>
      </div>
      <div class="nar-right">
        <button class="nar-btn primary" id="narPlayBtn">
          <span class="btn-icon">🔊</span> Read Story to Me
        </button>
        <button class="nar-btn" id="narSoundBtn">
          <span class="btn-icon">🎵</span> Ambient Sound
        </button>
        <button class="nar-btn stop" id="narStopBtn" style="display:none">
          ■ Stop
        </button>
      </div>
    `;

    // Wire buttons
    bar.querySelector('#narPlayBtn').addEventListener('click', () => {
      if (!isReading) { startReading(); document.getElementById('narStopBtn').style.display = 'inline-flex'; }
      else pauseReading();
    });
    bar.querySelector('#narSoundBtn').addEventListener('click', toggleSound);
    bar.querySelector('#narStopBtn').addEventListener('click', () => {
      stopReading();
      if (soundOn) toggleSound();
      document.getElementById('narStopBtn').style.display = 'none';
    });

    // Insert before .story-content
    const content = document.querySelector('.story-content');
    if (content) content.parentNode.insertBefore(bar, content);
    else document.body.appendChild(bar);
  }

  // ════════════════════════════════════════════════════
  //  PANEL SCROLL REVEAL
  // ════════════════════════════════════════════════════
  function setupReveal() {
    const els = document.querySelectorAll('.story-box, .lesson-box, .quran-verse');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('panel-revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => { el.classList.add('panel-hidden'); obs.observe(el); });
  }

  // ════════════════════════════════════════════════════
  //  SPEECH BUBBLES on em tags
  // ════════════════════════════════════════════════════
  function setupSpeechBubbles() {
    document.querySelectorAll('.story-box p em').forEach(em => {
      if (em.textContent.trim().length > 15) em.classList.add('speech-em');
    });
  }

  // ════════════════════════════════════════════════════
  //  INIT
  // ════════════════════════════════════════════════════
  function init() {
    buildNarratorBar();
    setupReveal();
    setupSpeechBubbles();

    // Animate avatar while reading
    setInterval(() => {
      const av = document.getElementById('narAvatar');
      if (!av) return;
      if (isReading && !isPaused) {
        av.style.animation = 'narPulse 0.6s ease-in-out infinite alternate';
      } else {
        av.style.animation = '';
      }
    }, 600);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
