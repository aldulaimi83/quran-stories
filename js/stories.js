/* =====================================================
   QURAN STORIES FOR KIDS — Narrator + Sounds + Scenes
   ===================================================== */
(function () {
  'use strict';

  const STORY_CONFIG = {
    adam: { sound: 'wind', label: 'Garden of Eden' },
    nuh: { sound: 'rain', label: 'The Great Flood' },
    ibrahim: { sound: 'fire', label: 'The Blazing Fire' },
    yusuf: { sound: 'night', label: 'A Starry Night' },
    musa: { sound: 'waves', label: 'The Parting Sea' },
    sulaiman: { sound: 'birds', label: 'Palace of Sulaiman' },
    yunus: { sound: 'deep', label: 'The Deep Ocean' },
    kahf: { sound: 'cave', label: 'The Sacred Cave' },
    ismail: { sound: 'desert', label: 'Desert of Trust' },
    ayub: { sound: 'spring', label: 'Patience and Mercy' },
    isa: { sound: 'light', label: 'Message of Mercy' },
    maryam: { sound: 'serene', label: 'A Blessed Sanctuary' },
    dawud: { sound: 'birds', label: 'A Voice of Praise' },
    salih: { sound: 'desert', label: 'The She-Camel Sign' },
    hud: { sound: 'wind', label: 'The Strong Wind' },
    shuayb: { sound: 'spring', label: 'Honest Trade' },
    luqman: { sound: 'serene', label: 'Wise Advice' },
    dhulqarnayn: { sound: 'cave', label: 'A Just Journey' },
  };

  const BILINGUAL_STORIES = {
    adam: {
      titleEn: 'Prophet Adam',
      titleAr: 'قصة النبي آدم',
      summaryEn: 'Allah created Adam, taught him knowledge, forgave him when he repented, and made him the first prophet on Earth.',
      storyAr: [
        'خلق الله آدم عليه السلام من طين، وكرمه بالعلم، فعلمه أسماء الأشياء كلها.',
        'أمر الله الملائكة أن يسجدوا لآدم تكريما له، فسجدوا إلا إبليس، لأنه تكبر وعصى أمر الله.',
        'علّمنا قصة آدم أن العلم نعمة، وأن من أخطأ ثم تاب بصدق فإن الله غفور رحيم.'
      ],
      lessonAr: 'نتعلم أن نطلب العلم، وأن نبتعد عن الكبر، وأن نرجع إلى الله عندما نخطئ.'
    },
    nuh: {
      titleEn: 'Prophet Nuh and the Ark',
      titleAr: 'قصة النبي نوح والسفينة',
      summaryEn: 'Nuh called his people for many years, built the ark by Allah’s command, and Allah saved the believers.',
      storyAr: [
        'دعا نوح عليه السلام قومه إلى عبادة الله وحده سنوات طويلة، لكنه صبر ولم ييأس.',
        'أمره الله أن يبني سفينة كبيرة، فآمن معه من آمن، ثم جاء الطوفان العظيم.',
        'نجّى الله نوحا ومن معه، وكانت السفينة علامة على رحمة الله بالمؤمنين.'
      ],
      lessonAr: 'نتعلم الصبر في الدعوة إلى الخير، والثقة بوعد الله.'
    },
    ibrahim: {
      titleEn: 'Prophet Ibrahim',
      titleAr: 'قصة النبي إبراهيم',
      summaryEn: 'Ibrahim stood for truth, trusted Allah, and Allah made the fire cool and safe for him.',
      storyAr: [
        'كان إبراهيم عليه السلام يبحث عن الحق، فعرف أن الله وحده هو الخالق المستحق للعبادة.',
        'حطم الأصنام ليعلم قومه أنها لا تنفع ولا تضر، فغضبوا وألقوه في النار.',
        'قال الله للنار: كوني بردا وسلاما على إبراهيم، فنجاه الله بقدرته.'
      ],
      lessonAr: 'نتعلم الشجاعة في قول الحق، وأن الله يحفظ عباده الصالحين.'
    },
    yusuf: {
      titleEn: 'Prophet Yusuf',
      titleAr: 'قصة النبي يوسف',
      summaryEn: 'Yusuf faced jealousy, the well, slavery, and prison, then Allah raised him with patience and forgiveness.',
      storyAr: [
        'رأى يوسف عليه السلام رؤيا عظيمة، لكن إخوته حسدوه وألقوه في البئر.',
        'انتقل يوسف إلى مصر، ودخل السجن ظلما، لكنه بقي صابرا محسنا واثقا بالله.',
        'رفع الله مقامه، وجمعه بأهله، فسامح إخوته وقال: لا تثريب عليكم اليوم.'
      ],
      lessonAr: 'نتعلم أن الصبر والصدق والعفو من أعظم الأخلاق.'
    },
    musa: {
      titleEn: 'Prophet Musa',
      titleAr: 'قصة النبي موسى',
      summaryEn: 'Musa faced Pharaoh with courage, and Allah saved the believers by parting the sea.',
      storyAr: [
        'أرسل الله موسى عليه السلام إلى فرعون ليدعوه إلى عبادة الله وحده.',
        'خاف موسى في بعض المواقف، لكن الله ثبته وأيده بالآيات والمعجزات.',
        'عندما وصل المؤمنون إلى البحر، شقه الله لهم طريقا، ونجا موسى ومن معه.'
      ],
      lessonAr: 'نتعلم أن الشجاعة تأتي من الثقة بالله.'
    },
    sulaiman: {
      titleEn: 'Prophet Sulaiman',
      titleAr: 'قصة النبي سليمان',
      summaryEn: 'Sulaiman was a wise king who understood animals and thanked Allah for every blessing.',
      storyAr: [
        'أعطى الله سليمان عليه السلام ملكا عظيما وحكمة، وعلمه فهم كلام بعض المخلوقات.',
        'سمع سليمان كلام النملة، فتبسم وشكر الله على هذه النعمة.',
        'كان ملكا عادلا لا يتكبر، بل يعرف أن كل ما عنده من فضل الله.'
      ],
      lessonAr: 'نتعلم شكر النعم والعدل والرحمة بالمخلوقات.'
    },
    yunus: {
      titleEn: 'Prophet Yunus',
      titleAr: 'قصة النبي يونس',
      summaryEn: 'Yunus called out to Allah from darkness, and Allah answered his sincere prayer.',
      storyAr: [
        'خرج يونس عليه السلام من قومه قبل أن يأذن الله له، فركب السفينة وابتلعه الحوت.',
        'في الظلمات دعا ربه: لا إله إلا أنت سبحانك إني كنت من الظالمين.',
        'استجاب الله له، فأنجاه ورده إلى قومه، فآمنوا بالله.'
      ],
      lessonAr: 'نتعلم أن الدعاء والتوبة يفتحان أبواب الرحمة.'
    },
    kahf: {
      titleEn: 'The People of the Cave',
      titleAr: 'قصة أصحاب الكهف',
      summaryEn: 'Young believers protected their faith, so Allah protected them in the cave.',
      storyAr: [
        'كان أصحاب الكهف فتية آمنوا بالله في زمن صعب، وخافوا على دينهم.',
        'لجؤوا إلى الكهف، فأنامهم الله سنوات طويلة وحفظهم برحمته.',
        'أظهر الله قصتهم للناس لتكون آية على قدرته وحفظه للمؤمنين.'
      ],
      lessonAr: 'نتعلم الثبات على الإيمان واختيار الصحبة الصالحة.'
    },
    ismail: {
      titleEn: 'Prophet Ismail',
      titleAr: 'قصة النبي إسماعيل',
      summaryEn: 'Ismail and his mother trusted Allah in the desert, and Allah blessed them with Zamzam.',
      storyAr: [
        'ترك إبراهيم عليه السلام هاجر وابنها إسماعيل في واد لا زرع فيه بأمر الله.',
        'سعت هاجر بين الصفا والمروة تبحث عن الماء، ففجر الله زمزم رحمة لهم.',
        'كبر إسماعيل مطيعا، وساعد أباه إبراهيم في بناء الكعبة.'
      ],
      lessonAr: 'نتعلم التوكل على الله وطاعة الوالدين.'
    },
    ayub: {
      titleEn: 'Prophet Ayub',
      titleAr: 'قصة النبي أيوب',
      summaryEn: 'Ayub stayed patient during hardship, and Allah restored his health and blessings.',
      storyAr: [
        'ابتلى الله أيوب عليه السلام في صحته وماله، فصبر ولم يتذمر.',
        'كان يدعو الله بأدب وثقة، ويعلم أن الرحمة كلها بيد الله.',
        'كشف الله عنه البلاء، ورد عليه العافية والرزق.'
      ],
      lessonAr: 'نتعلم الصبر الجميل وحسن الظن بالله.'
    },
    isa: {
      titleEn: 'Prophet Isa',
      titleAr: 'قصة النبي عيسى',
      summaryEn: 'Isa was given miracles by Allah and called people to worship Allah alone.',
      storyAr: [
        'ولد عيسى عليه السلام بمعجزة من الله، وكانت أمه مريم طاهرة عابدة.',
        'تكلم عيسى في المهد بإذن الله، ودعا الناس إلى عبادة الله وحده.',
        'أيده الله بمعجزات كثيرة، وكان رحيما ومعلما للخير.'
      ],
      lessonAr: 'نتعلم أن المعجزات من الله، وأن الرسالة هي التوحيد.'
    },
    maryam: {
      titleEn: 'Maryam',
      titleAr: 'قصة مريم عليها السلام',
      summaryEn: 'Maryam worshiped Allah with purity and patience, and Allah honored her with a great miracle.',
      storyAr: [
        'كانت مريم عليها السلام عابدة طاهرة، اختارها الله وكرمها بين نساء العالمين.',
        'رزقها الله بعيسى عليه السلام بمعجزة، فصبرت وثبتت على أمر الله.',
        'دافَع الله عنها وأظهر براءتها، وجعل قصتها نورا للمؤمنين.'
      ],
      lessonAr: 'نتعلم الحياء والطهارة والثقة بالله عند الشدة.'
    },
    dawud: {
      titleEn: 'Prophet Dawud',
      titleAr: 'قصة النبي داود',
      summaryEn: 'Dawud was brave, wise, and loved praising Allah with a beautiful voice.',
      storyAr: [
        'أعطى الله داود عليه السلام شجاعة وحكمة، وجعله نبيا وملكا عادلا.',
        'كان يسبح الله بصوت جميل، حتى تسبح الجبال والطير معه بأمر الله.',
        'كان يحكم بين الناس بالعدل، ويشكر الله على نعمه.'
      ],
      lessonAr: 'نتعلم الشجاعة والعدل وكثرة ذكر الله.'
    },
    salih: {
      titleEn: 'Prophet Salih',
      titleAr: 'قصة النبي صالح',
      summaryEn: 'Salih warned his people and Allah sent the she-camel as a clear sign.',
      storyAr: [
        'دعا صالح عليه السلام قوم ثمود إلى عبادة الله وحده وترك الظلم.',
        'طلبوا آية، فأخرج الله لهم ناقة عظيمة لتكون علامة واضحة.',
        'لكن الظالمين آذوا الناقة، فكانت العاقبة شديدة لمن كذبوا.'
      ],
      lessonAr: 'نتعلم احترام آيات الله وعدم ظلم المخلوقات.'
    },
    hud: {
      titleEn: 'Prophet Hud',
      titleAr: 'قصة النبي هود',
      summaryEn: 'Hud reminded the strong people of Aad that real power belongs to Allah.',
      storyAr: [
        'كان قوم عاد أقوياء ويبنون في الأرض، لكنهم تكبروا ونسوا نعمة الله.',
        'دعاهم هود عليه السلام إلى التوحيد والتوبة، فلم يستجيبوا إلا قليل منهم.',
        'أرسل الله عليهم ريحا شديدة، ونجّى هودا والمؤمنين.'
      ],
      lessonAr: 'نتعلم أن القوة الحقيقية مع الإيمان والتواضع.'
    },
    shuayb: {
      titleEn: 'Prophet Shuayb',
      titleAr: 'قصة النبي شعيب',
      summaryEn: 'Shuayb taught his people honesty in business and fairness with others.',
      storyAr: [
        'كان قوم شعيب يغشون في الميزان وينقصون الناس حقوقهم.',
        'دعاهم شعيب عليه السلام إلى عبادة الله والعدل في البيع والشراء.',
        'من أطاع الله نجا، ومن أصر على الظلم خسر في الدنيا والآخرة.'
      ],
      lessonAr: 'نتعلم الأمانة والعدل وعدم الغش.'
    },
    luqman: {
      titleEn: 'Luqman the Wise',
      titleAr: 'قصة لقمان الحكيم',
      summaryEn: 'Luqman gave his son gentle advice about worship, manners, and humility.',
      storyAr: [
        'كان لقمان رجلا حكيما آتاه الله فهما ونورا في الكلام.',
        'نصح ابنه أن يعبد الله وحده، وأن يحسن إلى والديه، وأن يقيم الصلاة.',
        'علمه ألا يتكبر على الناس، وأن يكون صوته هادئا وكلامه طيبا.'
      ],
      lessonAr: 'نتعلم الحكمة وبر الوالدين والتواضع.'
    },
    dhulqarnayn: {
      titleEn: 'Dhul-Qarnayn',
      titleAr: 'قصة ذي القرنين',
      summaryEn: 'Dhul-Qarnayn traveled with justice and helped people by building a strong barrier.',
      storyAr: [
        'مكّن الله ذا القرنين في الأرض، فكان يسافر وينشر العدل بين الناس.',
        'طلب منه قوم ضعفاء أن يساعدهم من يأجوج ومأجوج، فعمل معهم وبنى سدا قويا.',
        'قال إن هذا من رحمة ربي، فنسب الفضل إلى الله ولم يتكبر.'
      ],
      lessonAr: 'نتعلم مساعدة الناس ونسبة الفضل إلى الله.'
    },
  };

  const VOICE_STORAGE_KEY = 'quran_stories_voice';
  const MODE_STORAGE_KEY = 'quran_stories_mode';
  const RATE_STORAGE_KEY = 'quran_stories_rate';
  const LANGUAGE_STORAGE_KEY = 'quran_stories_language';
  const STORY_KEY = (window.location.pathname.split('/').pop() || '').replace('.html', '');
  if (!Object.prototype.hasOwnProperty.call(STORY_CONFIG, STORY_KEY)) return;

  const synth = window.speechSynthesis;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let paragraphs = [];
  let speechQueue = [];
  let currentIdx = 0;
  let currentSpeech = null;
  let isReading = false;
  let isPaused = false;
  let narratorRate = parseFloat(localStorage.getItem(RATE_STORAGE_KEY) || '0.88');
  let narratorMode = localStorage.getItem(MODE_STORAGE_KEY) || 'calm-en';
  let storyLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'english';
  let chosenVoiceURI = localStorage.getItem(VOICE_STORAGE_KEY) || '';

  let audioCtx = null;
  let audioUnlocked = false;
  let soundOn = false;
  let liveNodes = [];
  let loopTimers = [];

  function safeText(el) {
    return (el?.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function collectParagraphs() {
    const bilingualNodes = Array.from(document.querySelectorAll('.bilingual-story-card [data-narrate="true"]'))
      .filter((node) => safeText(node).length > 18);
    if (storyLanguage === 'arabic') {
      return bilingualNodes.filter((node) => /[\u0600-\u06FF]/.test(safeText(node)));
    }
    if (storyLanguage === 'both' && bilingualNodes.length) {
      return bilingualNodes;
    }

    const englishNodes = Array.from(document.querySelectorAll('.story-box p, .lesson-item p'))
      .filter((node) => !/[\u0600-\u06FF]/.test(safeText(node)) && safeText(node).length > 18);
    const arabicNodes = Array.from(document.querySelectorAll('.verse-arabic'))
      .filter((node) => /[\u0600-\u06FF]/.test(safeText(node)) && safeText(node).length > 8);

    if (narratorMode === 'arabic') return arabicNodes;
    if (narratorMode === 'both') {
      return Array.from(document.querySelectorAll('.story-box p, .lesson-item p, .verse-arabic'))
        .filter((node) => {
          const text = safeText(node);
          if (node.classList.contains('verse-arabic')) return /[\u0600-\u06FF]/.test(text) && text.length > 8;
          return !/[\u0600-\u06FF]/.test(text) && text.length > 18;
        });
    }
    return englishNodes;
  }

  function splitIntoChunks(text) {
    return text
      .split(/(?<=[.!?])\s+/)
      .map((chunk) => chunk.replace(/["']/g, '').trim())
      .filter((chunk) => chunk.length > 0);
  }

  function setNarratorStatus(primary, secondary) {
    const label = document.getElementById('narStatus');
    const sub = document.getElementById('narSubstatus');
    if (label && primary) label.textContent = primary;
    if (sub) sub.textContent = secondary || STORY_CONFIG[STORY_KEY].label;
  }

  function updateProgress() {
    const bar = document.getElementById('narProgressFill');
    if (!bar || !paragraphs.length) return;
    const ratio = Math.min(currentIdx / paragraphs.length, 1);
    bar.style.width = `${Math.round(ratio * 100)}%`;
  }

  function setHighlight(node) {
    paragraphs.forEach((el) => el.classList.remove('reading-now'));
    if (!node) return;
    node.classList.add('reading-now');
    if (!prefersReducedMotion) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function isArabicText(text) {
    return /[\u0600-\u06FF]/.test(text);
  }

  function targetLang() {
    return narratorMode === 'arabic' || storyLanguage === 'arabic' ? 'ar' : 'en';
  }

  function scoreVoice(voice, lang = targetLang()) {
    let score = 0;
    const name = `${voice.name} ${voice.lang}`.toLowerCase();
    if (/compact|eloquence|novelty|robot|whisper|zarvox|trinoids|boing|bubbles/.test(name)) score -= 120;
    if (lang === 'ar') {
      if (!/^ar[-_]/i.test(voice.lang)) score -= 100;
      if (/arabic|عربي|maged|laila|salma|tarik|zeina|mariam|google.*arabic|majid|hoda|naayf/.test(name)) score += 90;
      if (/natural|neural|enhanced|premium|siri|google|microsoft/.test(name)) score += 35;
    } else {
      if (!/^en[-_]/i.test(voice.lang)) score -= 100;
      if (/natural|neural|enhanced|premium|siri|google|microsoft|daniel|arthur|oliver|thomas|samantha|serena|ava|aria|jenny|guy/.test(name)) score += 90;
      if (/en-us|en-gb/.test(name)) score += 20;
      if (/female|samantha|serena|moira|tessa|karen|zira|aria/.test(name)) score += 8;
    }
    if (voice.default) score += 10;
    return score;
  }

  function getVoices(lang = targetLang()) {
    if (!synth) return [];
    const matcher = lang === 'ar' ? /^ar[-_]/i : /^en[-_]/i;
    return synth.getVoices().filter((voice) => matcher.test(voice.lang));
  }

  function getSelectedVoice(lang = targetLang()) {
    const voices = getVoices(lang);
    if (!voices.length) return null;
    return (
      voices.find((voice) => voice.voiceURI === chosenVoiceURI) ||
      voices.slice().sort((a, b) => scoreVoice(b, lang) - scoreVoice(a, lang))[0]
    );
  }

  function populateVoiceSelect() {
    const select = document.getElementById('narVoiceSelect');
    if (!select) return;
    const lang = targetLang();
    const voices = getVoices(lang);
    const selected = getSelectedVoice(lang);
    select.innerHTML = '';
    if (!voices.length) {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = lang === 'ar' ? 'No Arabic voice installed' : 'No English voice installed';
      select.appendChild(option);
      return;
    }
    voices
      .slice()
      .sort((a, b) => scoreVoice(b, lang) - scoreVoice(a, lang))
      .forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})`;
        if ((selected && voice.voiceURI === selected.voiceURI) || (!selected && voice.default)) {
          option.selected = true;
        }
        select.appendChild(option);
      });
    if (selected) {
      chosenVoiceURI = selected.voiceURI;
      localStorage.setItem(VOICE_STORAGE_KEY, chosenVoiceURI);
    }
  }

  function buildUtterance(text) {
    const isArabic = isArabicText(text);
    const lang = isArabic ? 'ar' : 'en';
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getSelectedVoice(lang);
    if (voice) utterance.voice = voice;
    utterance.lang = isArabic ? 'ar' : 'en-US';
    utterance.rate = isArabic ? Math.min(narratorRate, 0.9) : narratorRate;
    utterance.pitch = isArabic ? 0.96 : 1.04;
    utterance.volume = 1;
    return utterance;
  }

  function finishReading() {
    currentSpeech = null;
    isReading = false;
    isPaused = false;
    setHighlight(null);
    const bar = document.getElementById('narProgressFill');
    if (bar) bar.style.width = '100%';
    setNarratorStatus('Story complete. Masha’Allah.', STORY_CONFIG[STORY_KEY].label);
    updateNarratorUI();
    window.setTimeout(() => {
      if (!isReading && bar) bar.style.width = '0%';
    }, 2200);
  }

  function speakCurrentParagraph() {
    if (!isReading || currentIdx >= paragraphs.length) {
      finishReading();
      return;
    }

    const node = paragraphs[currentIdx];
    setHighlight(node);
    speechQueue = splitIntoChunks(safeText(node));
    speakNextChunk();
    updateProgress();
  }

  function speakNextChunk() {
    if (!isReading) return;
    if (!speechQueue.length) {
      currentIdx += 1;
      updateProgress();
      speakCurrentParagraph();
      return;
    }

    const text = speechQueue.shift();
    const utterance = buildUtterance(text);
    currentSpeech = utterance;
    utterance.onend = () => {
      currentSpeech = null;
      speakNextChunk();
    };
    utterance.onerror = () => {
      currentSpeech = null;
      speakNextChunk();
    };
    synth.cancel();
    synth.speak(utterance);
  }

  function updateNarratorUI() {
    const playBtn = document.getElementById('narPlayBtn');
    const stopBtn = document.getElementById('narStopBtn');
    const soundBtn = document.getElementById('narSoundBtn');
    if (playBtn) {
      if (isReading && !isPaused) {
        playBtn.innerHTML = '<span class="btn-icon">⏸</span> Pause';
        playBtn.classList.add('nar-active');
      } else if (isPaused) {
        playBtn.innerHTML = '<span class="btn-icon">▶</span> Resume';
        playBtn.classList.add('nar-active');
      } else {
        playBtn.innerHTML = '<span class="btn-icon">🔊</span> Read Story to Me';
        playBtn.classList.remove('nar-active');
      }
    }
    if (stopBtn) stopBtn.style.display = isReading ? 'inline-flex' : 'none';
    if (soundBtn) {
      soundBtn.innerHTML = soundOn
        ? '<span class="btn-icon">🔇</span> Stop Sound'
        : '<span class="btn-icon">🎵</span> Ambient Sound';
      soundBtn.classList.toggle('nar-active', soundOn);
    }
  }

  function applyStoryLanguage() {
    const data = BILINGUAL_STORIES[STORY_KEY];
    const card = document.getElementById('bilingualStoryCard');
    if (!data || !card) return;

    const originalNodes = document.querySelectorAll('.story-box, .lesson-box');
    const showOriginal = storyLanguage !== 'arabic';
    originalNodes.forEach((node) => {
      node.hidden = !showOriginal;
    });

    card.hidden = storyLanguage === 'english';
    card.dir = storyLanguage === 'arabic' ? 'rtl' : 'auto';
    document.documentElement.lang = storyLanguage === 'arabic' ? 'ar' : 'en';
    document.body.classList.toggle('arabic-mode', storyLanguage === 'arabic');
    document.body.classList.toggle('bilingual-mode', storyLanguage === 'both');

    document.querySelectorAll('[data-story-language]').forEach((button) => {
      const active = button.dataset.storyLanguage === storyLanguage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    const status = storyLanguage === 'arabic'
      ? 'Arabic story mode'
      : storyLanguage === 'both'
        ? 'English and Arabic story mode'
        : 'English story mode';
    setNarratorStatus(status, STORY_CONFIG[STORY_KEY].label);
  }

  function buildLanguageSwitcher() {
    const data = BILINGUAL_STORIES[STORY_KEY];
    if (!data) return;

    const switcher = document.createElement('section');
    switcher.className = 'language-switcher-card';
    switcher.innerHTML = `
      <div>
        <span class="language-eyebrow">Choose story language</span>
        <h2>${data.titleEn} <span>${data.titleAr}</span></h2>
        <p>Read in English, Arabic, or both together. The narrator follows the selected language when possible.</p>
      </div>
      <div class="language-actions" role="group" aria-label="Story language">
        <button type="button" data-story-language="english">English</button>
        <button type="button" data-story-language="arabic">العربية</button>
        <button type="button" data-story-language="both">Both</button>
      </div>
    `;

    const content = document.querySelector('.story-content');
    if (content?.parentNode) content.parentNode.insertBefore(switcher, content);

    switcher.querySelectorAll('[data-story-language]').forEach((button) => {
      button.addEventListener('click', () => {
        storyLanguage = button.dataset.storyLanguage;
        localStorage.setItem(LANGUAGE_STORAGE_KEY, storyLanguage);
        if (storyLanguage === 'arabic') {
          narratorMode = 'arabic';
        } else if (storyLanguage === 'both') {
          narratorMode = 'both';
        } else if (narratorMode === 'arabic') {
          narratorMode = 'calm-en';
        }
        localStorage.setItem(MODE_STORAGE_KEY, narratorMode);
        chosenVoiceURI = '';
        localStorage.removeItem(VOICE_STORAGE_KEY);
        populateVoiceSelect();
        const modeSelect = document.getElementById('narModeSelect');
        if (modeSelect) modeSelect.value = narratorMode;
        if (isReading) stopReading();
        applyStoryLanguage();
      });
    });
  }

  function buildBilingualStoryCard() {
    const data = BILINGUAL_STORIES[STORY_KEY];
    const content = document.querySelector('.story-content');
    if (!data || !content) return;

    const card = document.createElement('section');
    card.className = 'bilingual-story-card';
    card.id = 'bilingualStoryCard';
    card.hidden = true;
    card.innerHTML = `
      <div class="bilingual-copy english-copy" dir="ltr">
        <span class="story-chip">English summary</span>
        <h2>${data.titleEn}</h2>
        <p data-narrate="true">${data.summaryEn}</p>
      </div>
      <div class="bilingual-copy arabic-copy" dir="rtl" lang="ar">
        <span class="story-chip">القصة بالعربية</span>
        <h2>${data.titleAr}</h2>
        ${data.storyAr.map((paragraph) => `<p data-narrate="true">${paragraph}</p>`).join('')}
        <div class="arabic-lesson" data-narrate="true">${data.lessonAr}</div>
      </div>
    `;
    content.insertBefore(card, content.firstElementChild);
  }

  function startReading() {
    if (!('speechSynthesis' in window)) {
      window.alert('Voice narration is not supported in this browser. Try Chrome or Safari.');
      return;
    }
    unlockAudio();
    synth.cancel();
    paragraphs = collectParagraphs();
    if (!paragraphs.length) {
      isReading = false;
      isPaused = false;
      setNarratorStatus('No matching text for this narrator mode', 'Try Calm English or English + Arabic');
      updateNarratorUI();
      return;
    }
    currentIdx = 0;
    speechQueue = [];
    isReading = true;
    isPaused = false;
    setNarratorStatus('Narrator is reading…', STORY_CONFIG[STORY_KEY].label);
    updateNarratorUI();
    speakCurrentParagraph();
  }

  function pauseReading() {
    if (!isReading) return;
    if (isPaused) {
      synth.resume();
      isPaused = false;
      setNarratorStatus('Narrator is reading…', STORY_CONFIG[STORY_KEY].label);
    } else {
      synth.pause();
      isPaused = true;
      setNarratorStatus('Narrator paused', 'Tap resume to continue');
    }
    updateNarratorUI();
  }

  function stopReading() {
    synth.cancel();
    speechQueue = [];
    currentSpeech = null;
    isReading = false;
    isPaused = false;
    currentIdx = 0;
    setHighlight(null);
    updateProgress();
    setNarratorStatus('Tap to listen', STORY_CONFIG[STORY_KEY].label);
    updateNarratorUI();
  }

  function getCtx() {
    if (!window.AudioContext && !window.webkitAudioContext) return null;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function unlockAudio() {
    const ctx = getCtx();
    if (!ctx) return null;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    if (!audioUnlocked) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      gain.gain.value = 0.0001;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.02);
      audioUnlocked = true;
    }
    return ctx;
  }

  function makeNoise(ctx, seconds) {
    const sampleRate = ctx.sampleRate;
    const buffer = ctx.createBuffer(1, sampleRate * seconds, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    return source;
  }

  function stopSound() {
    loopTimers.forEach(clearTimeout);
    loopTimers = [];
    liveNodes.forEach((node) => {
      try {
        if (node.stop) node.stop();
        node.disconnect();
      } catch (error) {
        void error;
      }
    });
    liveNodes = [];
  }

  function startSound(type) {
    const ctx = unlockAudio();
    if (!ctx) return;
    stopSound();

    if (type === 'fire') {
      const src = makeNoise(ctx, 2);
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 500;
      filter.Q.value = 0.6;
      const gain = ctx.createGain();
      gain.gain.value = 0.14;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      liveNodes.push(src, filter, gain);
    } else if (type === 'rain') {
      const src = makeNoise(ctx, 3);
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 2400;
      const gain = ctx.createGain();
      gain.gain.value = 0.18;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      liveNodes.push(src, filter, gain);
    } else if (type === 'waves') {
      const src = makeNoise(ctx, 4);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 700;
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      const gain = ctx.createGain();
      lfo.type = 'sine';
      lfo.frequency.value = 0.12;
      lfoGain.gain.value = 450;
      gain.gain.value = 0.2;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      lfo.start();
      liveNodes.push(src, filter, lfo, lfoGain, gain);
    } else if (type === 'wind') {
      const src = makeNoise(ctx, 3);
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 350;
      filter.Q.value = 0.4;
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      const gain = ctx.createGain();
      lfo.type = 'sine';
      lfo.frequency.value = 0.08;
      lfoGain.gain.value = 220;
      gain.gain.value = 0.13;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      lfo.start();
      liveNodes.push(src, filter, lfo, lfoGain, gain);
    } else if (type === 'night' || type === 'birds' || type === 'light' || type === 'serene') {
      const cadence = type === 'birds' ? 900 : type === 'light' ? 1800 : type === 'serene' ? 2300 : 1200;
      const volume = type === 'light' ? 0.045 : type === 'serene' ? 0.032 : 0.055;
      (function chirp() {
        if (!soundOn) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const base = type === 'night' ? 2600 : 520 + Math.random() * 500;
        const now = ctx.currentTime;
        osc.type = type === 'night' ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(base, now);
        osc.frequency.linearRampToValueAtTime(base * (type === 'night' ? 1.08 : 1.5), now + 0.08);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(volume, now + 0.03);
        gain.gain.linearRampToValueAtTime(0, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.2);
        loopTimers.push(window.setTimeout(chirp, cadence + Math.random() * cadence));
      })();
    } else if (type === 'deep') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 48;
      gain.gain.value = 0.08;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      liveNodes.push(osc, gain);
    } else if (type === 'cave') {
      const src = makeNoise(ctx, 3);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 180;
      const gain = ctx.createGain();
      gain.gain.value = 0.07;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      liveNodes.push(src, filter, gain);
    } else if (type === 'desert' || type === 'spring') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type === 'spring' ? 'sine' : 'triangle';
      osc.frequency.value = type === 'spring' ? 420 : 160;
      gain.gain.value = type === 'spring' ? 0.025 : 0.02;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      liveNodes.push(osc, gain);
    }
  }

  function toggleSound() {
    soundOn = !soundOn;
    if (soundOn) {
      startSound(STORY_CONFIG[STORY_KEY].sound);
      setNarratorStatus('Ambient sound on', STORY_CONFIG[STORY_KEY].label);
    } else {
      stopSound();
      setNarratorStatus(isReading ? 'Narrator is reading…' : 'Tap to listen', STORY_CONFIG[STORY_KEY].label);
    }
    updateNarratorUI();
  }

  function buildNarratorBar() {
    const bar = document.createElement('div');
    bar.className = 'narrator-bar';
    bar.id = 'narratorBar';
    bar.innerHTML = `
      <div class="nar-left">
        <div class="nar-avatar" id="narAvatar">📖</div>
        <div class="nar-info">
          <span class="nar-title">Story Narrator</span>
          <span class="nar-status" id="narStatus">Tap to listen</span>
          <span class="nar-substatus" id="narSubstatus">${STORY_CONFIG[STORY_KEY].label}</span>
        </div>
      </div>
      <div class="nar-center">
        <div class="nar-progress" title="Reading progress">
          <div class="nar-progress-fill" id="narProgressFill"></div>
        </div>
      </div>
      <div class="nar-right">
        <div class="nar-tools">
          <select class="nar-select" id="narVoiceSelect" aria-label="Choose narrator voice"></select>
          <select class="nar-select" id="narModeSelect" aria-label="Choose narrator mode">
            <option value="calm-en">Calm English</option>
            <option value="arabic">Arabic Verses</option>
            <option value="both">English + Arabic</option>
          </select>
          <select class="nar-select" id="narRateSelect" aria-label="Choose narrator speed">
            <option value="0.88">Slow</option>
            <option value="0.94">Natural</option>
            <option value="1">Clear</option>
          </select>
        </div>
        <button class="nar-btn primary" id="narPlayBtn" type="button">
          <span class="btn-icon">🔊</span> Read Story to Me
        </button>
        <button class="nar-btn" id="narSoundBtn" type="button">
          <span class="btn-icon">🎵</span> Ambient Sound
        </button>
        <button class="nar-btn stop" id="narStopBtn" type="button" style="display:none">
          ■ Stop
        </button>
      </div>
    `;

    const content = document.querySelector('.story-content');
    if (content?.parentNode) content.parentNode.insertBefore(bar, content);
    else document.body.appendChild(bar);

    document.getElementById('narPlayBtn')?.addEventListener('click', () => {
      if (!isReading) startReading();
      else pauseReading();
    });
    document.getElementById('narSoundBtn')?.addEventListener('click', toggleSound);
    document.getElementById('narStopBtn')?.addEventListener('click', () => {
      stopReading();
      if (soundOn) toggleSound();
    });
    document.getElementById('narVoiceSelect')?.addEventListener('change', (event) => {
      chosenVoiceURI = event.target.value;
      localStorage.setItem(VOICE_STORAGE_KEY, chosenVoiceURI);
      if (isReading) {
        const idx = currentIdx;
        stopReading();
        currentIdx = idx;
        isReading = true;
        speakCurrentParagraph();
      }
    });
    document.getElementById('narModeSelect')?.addEventListener('change', (event) => {
      narratorMode = event.target.value;
      localStorage.setItem(MODE_STORAGE_KEY, narratorMode);
      chosenVoiceURI = '';
      localStorage.removeItem(VOICE_STORAGE_KEY);
      populateVoiceSelect();
      setNarratorStatus('Narrator mode changed', event.target.selectedOptions[0]?.textContent || STORY_CONFIG[STORY_KEY].label);
      if (isReading) startReading();
    });
    document.getElementById('narRateSelect')?.addEventListener('change', (event) => {
      narratorRate = parseFloat(event.target.value);
      localStorage.setItem(RATE_STORAGE_KEY, String(narratorRate));
    });
  }

  function buildStoryBrandCard() {
    const shell = document.createElement('div');
    shell.className = 'story-brand-ribbon';
    shell.innerHTML = `
      <a href="https://youooo.com" class="story-brand-card" target="_blank" rel="noreferrer">
        <span>
          <img src="../assets/youooo_logo.png" alt="YouOoo logo" />
          More stories, tools, and projects from YouOoo
        </span>
        <small>Visit YouOoo.com</small>
      </a>
    `;
    const content = document.querySelector('.story-content');
    if (content?.parentNode) content.parentNode.insertBefore(shell, content);
  }

  function enhanceStoryPage() {
    document.body.classList.add('story-page');
    const content = document.querySelector('.story-content');
    if (content) content.classList.add('story-shell');
  }

  function setupReveal() {
    if (!('IntersectionObserver' in window)) return;
    const nodes = document.querySelectorAll('.story-box, .lesson-box, .quran-verse');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('panel-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    nodes.forEach((node) => {
      node.classList.add('panel-hidden');
      observer.observe(node);
    });
  }

  function setupSpeechBubbles() {
    document.querySelectorAll('.story-box p em').forEach((node) => {
      if (safeText(node).length > 15) node.classList.add('speech-em');
    });
  }

  function bindGlobalUnlocks() {
    ['touchstart', 'pointerdown', 'click'].forEach((eventName) => {
      document.addEventListener(eventName, unlockAudio, { passive: true });
    });
  }

  function init() {
    enhanceStoryPage();
    buildNarratorBar();
    buildStoryBrandCard();
    buildLanguageSwitcher();
    buildBilingualStoryCard();
    setupReveal();
    setupSpeechBubbles();
    bindGlobalUnlocks();
    populateVoiceSelect();
    const modeSelect = document.getElementById('narModeSelect');
    if (modeSelect) modeSelect.value = narratorMode;
    const rateSelect = document.getElementById('narRateSelect');
    if (rateSelect) rateSelect.value = String(narratorRate);
    applyStoryLanguage();
    updateNarratorUI();
    window.setInterval(() => {
      const avatar = document.getElementById('narAvatar');
      if (!avatar) return;
      avatar.style.animation = isReading && !isPaused ? 'narPulse 0.6s ease-in-out infinite alternate' : '';
    }, 600);
  }

  if (synth) {
    synth.addEventListener('voiceschanged', populateVoiceSelect);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
