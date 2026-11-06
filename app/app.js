/* Sindibad Letters · حروف سندباد — MVP web app. No build step, no dependencies. */
'use strict';
const ZWJ = '‍';
const AVATARS = ['🦁','🐯','🦊','🐼','🐸','🦄','🐙','🦉','🐢','🐬','🦋','🐞'];
const T = {
  en: {
    who: 'Who is learning today?', add: 'Add', newKid: 'New explorer', name: 'Name', pick: 'Pick an animal', start: "Let's go!",
    islands: 'Letter Islands', meet: 'Tap the letter to hear it', words: 'Tap a picture', forms: 'Its 4 shapes in a word',
    alone: 'alone', start_: 'start', middle: 'middle', end: 'end', play: 'Play!', next: 'Next',
    listen: 'Which letter do you hear?', first: 'Which letter does it start with?', shape: 'Find the same letter', trace: 'Trace the letter with your finger',
    great: ['Great!', 'Super!', 'Well done!', 'Yes!', 'Amazing!'], again: 'Try again!', done: 'You did it!', home: 'Back to the map',
    family: 'Family moment', review: 'Island challenge', parent: 'Parent corner', gate: 'Grown-ups only: what is', gateWrong: 'Not quite — ask a grown-up!',
    letters: 'letters learned', starsL: 'stars', streak: 'day streak', minutes: 'minutes', progress: 'Progress', reset: 'Delete this profile', resetQ: 'Delete this profile and its progress?',
    noVoice: 'No Arabic voice on this device yet. Install one in your system settings (Text-to-speech → Arabic) to hear the letters.',
    homeWord: 'At home:', locked: 'Finish the island before to open this one', clear: 'Clear', check: 'Done!', tip: 'Tip for parents',
    tipText: 'Short and daily beats long and weekly. 5–10 minutes a day is perfect. Ask your child to teach you a letter tonight!',
    switchKid: 'Switch child', lang: 'Français', hello: n => `Salaam ${n}! Ready to fly?`, privacy: 'All progress stays on this device. No account, no ads.',
    cert: 'Certificate', getCert: 'Get your certificate!', certOf: 'learned the letters of', certLine: 'Sindibad certificate',
    record: 'Record your voice', recHint: 'Read the 4 letters out loud, one by one!', recording: 'Recording… read the letters!', stop: 'Stop',
    listenMine: 'Listen to me', redo: 'Record again', shareFam: 'Share with family', voiceStays: 'Your voice stays on this device unless a grown-up shares it.',
    noMic: 'No microphone here, or it is not allowed. You can still share the certificate.',
    shareTitle: 'Share with family', shareIntro: 'Send this certificate to grandparents, aunts and uncles. Nothing is uploaded to us: the picture and the voice clip go straight from this phone to the app you pick.',
    withVoice: 'Include the voice clip', shareBtn: 'Share (WhatsApp, Messages…)', waText: 'WhatsApp message only', savePic: 'Save the picture', saveVoice: 'Save the voice clip',
    waNote: 'WhatsApp links can only carry text: save the picture first, then attach it in the chat.', sharedOk: 'Shared! Thank you 💛', voiceOnlyImg: 'This phone can only share the picture here. Use “Save the voice clip” to send it too.',
    shareMsg: (n, isl) => `🌟 ${n} just finished ${isl} in Sindibad Letters and can read 4 new Arabic letters! Listen to the voice clip 💛\nTeach your kids Arabic too →`,
    certs: 'certificates', shares: 'shares'
  },
  fr: {
    who: "Qui apprend aujourd'hui ?", add: 'Ajouter', newKid: 'Nouvel explorateur', name: 'Prénom', pick: 'Choisis un animal', start: "C'est parti !",
    islands: 'Îles des Lettres', meet: 'Touche la lettre pour l\'entendre', words: 'Touche une image', forms: 'Ses 4 formes dans un mot',
    alone: 'seule', start_: 'début', middle: 'milieu', end: 'fin', play: 'Jouer !', next: 'Suivant',
    listen: 'Quelle lettre entends-tu ?', first: 'Par quelle lettre ça commence ?', shape: 'Trouve la même lettre', trace: 'Trace la lettre avec ton doigt',
    great: ['Bravo !', 'Super !', 'Génial !', 'Oui !', 'Excellent !'], again: 'Essaie encore !', done: 'Tu as réussi !', home: 'Retour à la carte',
    family: 'Moment en famille', review: "Défi de l'île", parent: 'Coin des parents', gate: 'Réservé aux adultes : combien font', gateWrong: 'Pas tout à fait — demande à un adulte !',
    letters: 'lettres apprises', starsL: 'étoiles', streak: 'jours de suite', minutes: 'minutes', progress: 'Progrès', reset: 'Supprimer ce profil', resetQ: 'Supprimer ce profil et sa progression ?',
    noVoice: "Pas de voix arabe sur cet appareil. Installez-en une dans les réglages (Synthèse vocale → Arabe) pour entendre les lettres.",
    homeWord: 'À la maison :', locked: "Termine l'île précédente pour ouvrir celle-ci", clear: 'Effacer', check: 'Fini !', tip: 'Conseil aux parents',
    tipText: "Court et quotidien vaut mieux que long et hebdomadaire. 5 à 10 minutes par jour, c'est parfait. Ce soir, demandez à votre enfant de vous apprendre une lettre !",
    switchKid: "Changer d'enfant", lang: 'English', hello: n => `Salam ${n} ! Prêt à t'envoler ?`, privacy: "Toute la progression reste sur cet appareil. Pas de compte, pas de pub.",
    cert: 'Certificat', getCert: 'Reçois ton certificat !', certOf: 'a appris les lettres de', certLine: 'Certificat Sindibad',
    record: 'Enregistre ta voix', recHint: 'Lis les 4 lettres à voix haute, une par une !', recording: 'Enregistrement… lis les lettres !', stop: 'Stop',
    listenMine: "M'écouter", redo: 'Recommencer', shareFam: 'Partager en famille', voiceStays: "Ta voix reste sur cet appareil, sauf si un adulte la partage.",
    noMic: "Pas de micro, ou il n'est pas autorisé. Tu peux quand même partager le certificat.",
    shareTitle: 'Partager en famille', shareIntro: "Envoyez ce certificat aux grands-parents, oncles et tantes. Rien n'est envoyé chez nous : l'image et la voix partent directement de ce téléphone vers l'application choisie.",
    withVoice: "Inclure l'enregistrement de la voix", shareBtn: 'Partager (WhatsApp, Messages…)', waText: 'Message WhatsApp seul', savePic: "Enregistrer l'image", saveVoice: "Enregistrer la voix",
    waNote: "Les liens WhatsApp ne transportent que du texte : enregistrez d'abord l'image, puis joignez-la dans la discussion.", sharedOk: 'Partagé ! Merci 💛', voiceOnlyImg: "Ce téléphone ne peut partager que l'image ici. Utilisez « Enregistrer la voix » pour l'envoyer aussi.",
    shareMsg: (n, isl) => `🌟 ${n} vient de terminer « ${isl} » dans Sindibad Letters et sait lire 4 nouvelles lettres arabes ! Écoutez sa voix 💛\nApprenez l'arabe à vos enfants aussi →`,
    certs: 'certificats', shares: 'partages'
  }
};

/* ---------- storage ---------- */
const KEY = 'huroof.v1';
let S = { lang: (navigator.language || 'en').startsWith('fr') ? 'fr' : 'en', kids: [], cur: null };
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.kids) S = s; } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const t = k => T[S.lang][k];
const kid = () => S.kids.find(k => k.id === S.cur);
const today = () => new Date().toISOString().slice(0, 10);

/* ---------- data ---------- */
let D, L = {};
const app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.random() * a.length | 0];
function forms(l) {
  const c = l.char;
  return l.connects ? [c, c + ZWJ, ZWJ + c + ZWJ, ZWJ + c] : [c, c, ZWJ + c, ZWJ + c];
}

/* ---------- audio ---------- */
let voices = [];
const loadVoices = () => { voices = speechSynthesis.getVoices(); };
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function say(text, lang = 'ar', rate) {
  if (!('speechSynthesis' in window)) return false;
  const v = voices.find(v => v.lang.toLowerCase().startsWith(lang)) || null;
  if (lang === 'ar' && !v && voices.length) { toast(t('noVoice')); return false; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'ar' ? (v ? v.lang : 'ar-SA') : (v ? v.lang : lang); if (v) u.voice = v;
  u.rate = rate || (lang === 'ar' ? 0.75 : 0.95);
  speechSynthesis.speak(u); return true;
}
const sayUI = s => say(s, S.lang);
const soundOf = l => l.id === 'alif' ? 'أَ' : l.char + 'َ';
let actx;
function beep(ok) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain(), n = actx.currentTime;
    o.type = 'sine'; o.connect(g); g.connect(actx.destination);
    const f = ok ? [523, 659, 784] : [220, 180];
    f.forEach((x, i) => o.frequency.setValueAtTime(x, n + i * 0.09));
    g.gain.setValueAtTime(0.15, n); g.gain.exponentialRampToValueAtTime(0.001, n + f.length * 0.09 + 0.15);
    o.start(n); o.stop(n + f.length * 0.09 + 0.2);
  } catch (e) {}
}
function toast(m) {
  document.querySelectorAll('.toast').forEach(x => x.remove());
  const d = document.createElement('div'); d.className = 'toast'; d.textContent = m; document.body.appendChild(d);
  setTimeout(() => d.remove(), 4500);
}
function confetti() {
  const c = document.createElement('div'); c.className = 'confetti';
  c.innerHTML = Array.from({ length: 28 }, () => `<span style="left:${Math.random() * 100}%;animation-delay:${Math.random() * .6}s">${pick(['⭐', '✨', '🌟', '🎉', '🪶'])}</span>`).join('');
  document.body.appendChild(c); setTimeout(() => c.remove(), 2600);
}
const HUD = `<svg viewBox="0 0 100 100" aria-hidden="true"><g><path d="M38 30 L30 6 L42 24 L44 4 L50 24 L56 6 L56 28Z" fill="#ef6f5c"/><path d="M34 20 l-3 -8 M44 18 l0 -9 M53 18 l3 -8" stroke="#2b2118" stroke-width="2"/><ellipse cx="50" cy="62" rx="30" ry="26" fill="#e9a66b"/><path d="M28 58 q22 -10 44 6 q-8 20 -30 18 q-14 -4 -14 -24z" fill="#2b2118" opacity=".85"/><path d="M34 62 h30 M36 70 h26" stroke="#fbf3e4" stroke-width="3"/><circle cx="45" cy="40" r="15" fill="#e9a66b"/><circle cx="41" cy="38" r="4" fill="#fff"/><circle cx="40" cy="38" r="2" fill="#2b2118"/><path d="M30 42 L6 50 L30 46Z" fill="#2b2118"/><path d="M42 86 l-4 10 M56 86 l4 10" stroke="#2b2118" stroke-width="3"/></g></svg>`;
const hud = msg => `<div class="hud">${HUD}<div class="bubble">${msg}</div></div>`;

/* ---------- screens ---------- */
let screen = 'profiles', ctx = {};
function go(s, c = {}) { if (typeof stopRec === 'function') stopRec(); screen = s; ctx = c; window.speechSynthesis && speechSynthesis.cancel(); render(); window.scrollTo(0, 0); }
function render() { (VIEWS[screen] || VIEWS.profiles)(); }
const topbar = (back, extra = '') => `<div class="bar">${back ? `<button class="ib" data-go="${back}" aria-label="back">⬅️</button>` : ''}<span class="sp"></span>${extra}</div>`;
function wire() {
  app.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go, b.dataset.arg ? JSON.parse(b.dataset.arg) : {}));
}
function islandUnlocked(k, i) {
  if (i === 0) return true;
  return D.islands[i - 1].letters.every(id => (k.stars[id] || 0) > 0);
}
function learnedLetters(k, upToIsland) {
  return D.islands.slice(0, upToIsland + 1).flatMap(is => is.letters);
}

const VIEWS = {
  profiles() {
    const kids = S.kids.map(k => `<button class="prof" data-id="${k.id}"><div class="av">${k.av}</div><div class="nm">${esc(k.name)}</div><div class="small">⭐ ${Object.values(k.stars).reduce((a, b) => a + b, 0)}</div></button>`).join('');
    app.innerHTML = `${topbar(null, `<button class="chip" id="lang">🌐 ${t('lang')}</button><button class="ib" data-go="gate" aria-label="parents">👪</button>`)}
      <div class="center"><h1 class="ar" style="font-size:56px;color:var(--teal);margin:0">حُرُوفُ سِنْدِبَاد</h1><div class="small" style="margin-top:-6px">Sindibad Letters</div>
      ${hud(t('who'))}
      <div class="grid profiles">${kids}<button class="prof add" data-go="newkid"><div class="av">➕</div><div class="nm">${t('add')}</div></button></div>
      <p class="small">${t('privacy')}</p></div>`;
    wire();
    app.querySelector('#lang').onclick = () => { S.lang = S.lang === 'en' ? 'fr' : 'en'; document.documentElement.lang = S.lang; save(); render(); };
    app.querySelectorAll('.prof[data-id]').forEach(b => b.onclick = () => { S.cur = b.dataset.id; save(); go('map'); });
    if (!S.kids.length) setTimeout(() => go('newkid'), 0);
  },
  newkid() {
    let av = pick(AVATARS);
    app.innerHTML = `${topbar(S.kids.length ? 'profiles' : null)}<div class="center"><h2>${t('newKid')}</h2>
      <input class="name" id="nm" maxlength="14" placeholder="${t('name')}" autocomplete="off">
      <p>${t('pick')}</p><div class="avs">${AVATARS.map(a => `<button class="${a === av ? 'on' : ''}">${a}</button>`).join('')}</div>
      <button class="btn" id="ok">${t('start')}</button></div>`;
    wire();
    app.querySelectorAll('.avs button').forEach(b => b.onclick = () => { av = b.textContent; app.querySelectorAll('.avs button').forEach(x => x.classList.toggle('on', x === b)); });
    app.querySelector('#ok').onclick = () => {
      const name = app.querySelector('#nm').value.trim() || av;
      const k = { id: 'k' + Date.now(), name, av, stars: {}, streak: 0, lastDay: null, minutes: 0, created: today() };
      S.kids.push(k); S.cur = k.id; save(); go('map');
      setTimeout(() => sayUI(t('hello')(name)), 300);
    };
  },
  map() {
    const k = kid(); if (!k) return go('profiles');
    const total = Object.values(k.stars).reduce((a, b) => a + b, 0);
    app.innerHTML = `${topbar('profiles', `<span class="chip">🔥 ${k.streak || 0}</span><span class="chip">⭐ ${total}</span><span class="chip">${k.av} ${esc(k.name)}</span>`)}
      <h1>${t('islands')}</h1>
      <div class="map">${D.islands.map((is, i) => {
        const open = islandUnlocked(k, i), st = is.letters.reduce((a, id) => a + (k.stars[id] || 0), 0);
        return `<button class="island ${open ? '' : 'locked'}" data-i="${i}"><span class="e">${is.emoji}</span><span><div class="t">${is.name[S.lang]}</div><div class="ls ar">${is.letters.map(id => L[id].char).join(' ')}</div></span>${st ? `<span class="st">${(k.certs || {})[is.id] ? '🏅 ' : ''}⭐ ${st}/12</span>` : ''}</button>`;
      }).join('')}</div>`;
    wire();
    app.querySelectorAll('.island').forEach(b => b.onclick = () => {
      const i = +b.dataset.i;
      if (!islandUnlocked(k, i)) { toast(t('locked')); beep(false); return; }
      go('island', { i });
    });
  },
  island() {
    const k = kid(), is = D.islands[ctx.i];
    const allDone = is.letters.every(id => k.stars[id]);
    app.innerHTML = `${topbar('map')}<div class="center"><h2>${is.emoji} ${is.name[S.lang]}</h2>
      <div class="grid letters" style="width:100%;max-width:440px">${is.letters.map(id => `<button class="lt" data-id="${id}"><div class="c ar">${L[id].char}</div><div class="s">${'⭐'.repeat(k.stars[id] || 0) || '·'}</div></button>`).join('')}</div>
      ${allDone ? `<button class="btn sun" id="rev">🏆 ${t('review')}</button>` : ''}
      ${(k.certs || {})[is.id] ? `<button class="btn alt" data-go="cert" data-arg='${JSON.stringify({ i: ctx.i })}'>🏅 ${t('cert')}</button>` : ''}</div>`;
    wire();
    app.querySelectorAll('.lt').forEach(b => b.onclick = () => go('meet', { id: b.dataset.id, i: ctx.i }));
    const r = app.querySelector('#rev'); if (r) r.onclick = () => go('play', { i: ctx.i, review: true });
  },
  meet() {
    const l = L[ctx.id], f = forms(l), lab = [t('alone'), t('start_'), t('middle'), t('end')];
    app.innerHTML = `${topbar('island" data-arg=\'' + JSON.stringify({ i: ctx.i }) + '\'')}
      <div class="center">
        <button class="big ar" id="big">${l.char}</button>
        <div><b class="ar" style="font-size:28px">${l.name}</b> · ${esc(l.latin)}<div class="hint">${esc(l.sound[S.lang])}</div></div>
        <p class="small">${t('words')}</p>
        <div class="grid words">${l.words.map((w, j) => `<button class="word" data-j="${j}"><div class="em">${w.emoji}</div><div class="w ar">${w.ar}</div><div class="tr">${esc(w[S.lang])}</div>${w.home ? `<div class="home">${t('homeWord')} <span class="ar">${w.home}</span></div>` : ''}</button>`).join('')}</div>
        <p class="small">${t('forms')}</p>
        <div class="grid forms">${f.map((x, j) => `<div class="form"><div class="f ar">${x}</div><div class="l">${lab[j]}</div></div>`).join('')}</div>
        <button class="btn" id="play">${t('play')} ▶</button>
      </div>`;
    wire();
    let n = 0;
    app.querySelector('#big').onclick = () => { say(n++ % 2 ? soundOf(l) : l.name); };
    app.querySelectorAll('.word').forEach(b => b.onclick = () => say(l.words[+b.dataset.j].ar));
    app.querySelector('#play').onclick = () => go('play', { i: ctx.i, id: ctx.id });
    setTimeout(() => say(l.name), 250);
    ctx.t0 = Date.now();
  },
  play() { startGame(); },
  reward() {
    const k = kid(), is = D.islands[ctx.i], s = ctx.stars;
    app.innerHTML = `<div class="center">
      <div class="stars">${[1, 2, 3].map(x => `<span class="${x <= s ? '' : 'off'}">⭐</span>`).join('')}</div>
      ${hud(t('done'))}
      <div class="family"><b>👪 ${t('family')}</b>${esc(is.family[S.lang])}</div>
      ${ctx.cert ? `<button class="btn sun" data-go="cert" data-arg='${JSON.stringify({ i: ctx.i })}'>🏅 ${t('getCert')}</button>` : ''}
      <button class="btn${ctx.cert ? ' alt' : ''}" data-go="island" data-arg='${JSON.stringify({ i: ctx.i })}'>${t('next')} ▶</button>
      <button class="btn alt" data-go="map">🗺️ ${t('home')}</button></div>`;
    wire(); confetti(); beep(true); setTimeout(() => sayUI(t('done')), 400);
  },
  gate() {
    const a = 2 + (Math.random() * 6 | 0), b = 2 + (Math.random() * 6 | 0), opts = shuffle([a + b, a + b + 1, a + b - 1, a + b + 2]);
    const back = ctx.back || 'profiles', to = ctx.to || 'parent', arg = ctx.arg || {}, bk = ctx.backArg || {};
    app.innerHTML = `${topbar(back + '" data-arg=\'' + JSON.stringify(bk) + '\'')}<div class="center"><h2>${t('gate')} ${a} + ${b} ?</h2>
      <div class="grid opts">${opts.map(o => `<button class="opt" style="font-size:44px" data-v="${o}">${o}</button>`).join('')}</div></div>`;
    wire();
    app.querySelectorAll('.opt').forEach(x => x.onclick = () => +x.dataset.v === a + b ? go(to, arg) : (toast(t('gateWrong')), go(back, bk)));
  },
  parent() {
    app.innerHTML = `${topbar('profiles')}<h1>👪 ${t('parent')}</h1>
      <div class="grid">${S.kids.map(k => {
        const learned = D.letters.filter(l => k.stars[l.id]).length, st = Object.values(k.stars).reduce((a, b) => a + b, 0);
        return `<div class="pcard"><h2>${k.av} ${esc(k.name)}</h2>
          <div class="kv"><div><b>${learned}/28</b>${t('letters')}</div><div><b>${st}</b>${t('starsL')}</div><div><b>${k.streak || 0}</b>${t('streak')}</div><div><b>${Math.round(k.minutes || 0)}</b>${t('minutes')}</div><div><b>${Object.keys(k.certs || {}).length}</b>${t('certs')}</div><div><b>${k.shares || 0}</b>${t('shares')}</div></div>
          <p class="small">${t('progress')}</p>
          <div class="pgrid">${D.islands.flatMap(is => is.letters).map(id => `<div class="ar ${k.stars[id] ? 'done' : ''}" title="${'⭐'.repeat(k.stars[id] || 0)}">${L[id].char}</div>`).join('')}</div>
          <p><button class="btn alt" style="font-size:15px;min-height:0;padding:8px 14px" data-del="${k.id}">🗑️ ${t('reset')}</button></p></div>`;
      }).join('')}
      <div class="pcard"><b>💡 ${t('tip')}</b><p>${t('tipText')}</p><p class="small">${t('privacy')}</p></div></div>`;
    wire();
    app.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
      if (!confirm(t('resetQ'))) return;
      D.islands.forEach(is => clipDel(b.dataset.del, is.id));
      S.kids = S.kids.filter(k => k.id !== b.dataset.del); if (S.cur === b.dataset.del) S.cur = null; save(); render();
    });
  }
};

/* ---------- certificate, voice clip, share (all on device) ---------- */
const SITE = 'https://shibl.github.io/learnArabic/site/';
const IDB = () => new Promise((res, rej) => {
  if (!window.indexedDB) return rej(new Error('no idb'));
  const r = indexedDB.open('huroof-voice', 1);
  r.onupgradeneeded = () => r.result.createObjectStore('clips');
  r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
});
const clipKey = (kidId, islandId) => kidId + ':' + islandId;
async function clipOp(mode, key, val) {
  try {
    const db = await IDB();
    return await new Promise((res, rej) => {
      const tx = db.transaction('clips', mode === 'get' ? 'readonly' : 'readwrite'), st = tx.objectStore('clips');
      const r = mode === 'get' ? st.get(key) : mode === 'put' ? st.put(val, key) : st.delete(key);
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });
  } catch (e) { return null; }
}
const clipGet = (k, i) => clipOp('get', clipKey(k, i));
const clipPut = (k, i, b) => clipOp('put', clipKey(k, i), b);
const clipDel = (k, i) => clipOp('del', clipKey(k, i));
const audioExt = type => /mp4|aac|m4a/.test(type) ? 'm4a' : /ogg/.test(type) ? 'ogg' : 'webm';

function drawCert(k, is) {
  const W = 1080, c = document.createElement('canvas'); c.width = c.height = W;
  const g = c.getContext('2d'), F = (w, px) => `${w} ${px}px "Baloo Bhaijaan 2", system-ui, sans-serif`;
  const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  g.fillStyle = '#0f8b8d'; g.fillRect(0, 0, W, W);
  g.fillStyle = '#fbf3e4'; rr(40, 40, W - 80, W - 80, 56); g.fill();
  g.setLineDash([18, 14]); g.lineWidth = 6; g.strokeStyle = '#f6b93b'; rr(70, 70, W - 140, W - 140, 40); g.stroke(); g.setLineDash([]);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#8a7a66'; g.font = F(700, 34); g.fillText(t('certLine').toUpperCase(), W / 2, 140);
  g.font = F(400, 120); g.fillText(is.emoji, W / 2, 250);
  g.direction = 'rtl'; g.fillStyle = '#ef6f5c'; g.font = F(800, 96); g.fillText('مَبْرُوكٌ!', W / 2, 380); g.direction = 'ltr';
  g.fillStyle = '#2b2118'; let nf = 84; g.font = F(800, nf);
  const name = `${k.av} ${k.name}`; while (g.measureText(name).width > W - 220 && nf > 40) g.font = F(800, nf -= 4);
  g.fillText(name, W / 2, 490);
  g.fillStyle = '#5c4d3d'; g.font = F(600, 40); g.fillText(`${t('certOf')} ${is.name[S.lang]}`, W / 2, 570);
  const ls = is.letters.map(id => L[id].char), bw = 190, gap = 28, x0 = (W - (bw * 4 + gap * 3)) / 2;
  ls.forEach((ch, j) => {
    const x = x0 + (3 - j) * (bw + gap); // right-to-left order
    g.fillStyle = '#fff'; rr(x, 630, bw, 200, 36); g.fill();
    g.fillStyle = '#0f8b8d'; g.font = F(700, 140); g.direction = 'rtl'; g.fillText(ch, x + bw / 2, 740); g.direction = 'ltr';
  });
  g.fillStyle = '#8a7a66'; g.font = F(600, 30);
  const d = (k.certs || {})[is.id] || today();
  g.fillText(new Date(d + 'T12:00:00').toLocaleDateString(S.lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), W / 2, 880);
  g.fillStyle = '#0b6e70'; g.font = F(800, 40);
  const en = 'Sindibad Letters  ·  ', arT = 'حُرُوفُ سِنْدِبَاد', we = g.measureText(en).width, wa = g.measureText(arT).width, fx = (W - we - wa) / 2;
  g.textAlign = 'left'; g.fillText(en, fx, 960); g.direction = 'rtl'; g.textAlign = 'right'; g.fillText(arT, fx + we + wa, 960);
  g.direction = 'ltr'; g.textAlign = 'center';
  return c;
}
const canvasBlob = c => new Promise(r => c.toBlob(r, 'image/png'));
function download(blob, name) {
  const u = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 4000);
}
let rec = null;
function stopRec() { if (rec && rec.state === 'recording') rec.stop(); }

Object.assign(VIEWS, {
  async cert() {
    const k = kid(), is = D.islands[ctx.i]; if (!k || !(k.certs || {})[is.id]) return go('map');
    const img = drawCert(k, is).toDataURL('image/png');
    const back = 'island" data-arg=\'' + JSON.stringify({ i: ctx.i }) + '\'';
    const gateArg = JSON.stringify({ to: 'share', arg: { i: ctx.i }, back: 'cert', backArg: { i: ctx.i } });
    const clip = await clipGet(k.id, is.id);
    if (screen !== 'cert') return;
    const url = clip ? URL.createObjectURL(clip) : null;
    app.innerHTML = `${topbar(back)}<div class="center">
      <img src="${img}" alt="${t('cert')}" style="width:min(100%,420px);border-radius:24px;box-shadow:0 6px 0 var(--sand2)">
      <div class="pcard" style="width:min(100%,420px);text-align:center">
        <b>🎙️ ${t('record')}</b><div class="small">${t('recHint')}</div>
        <div class="ar" id="recls" style="font-size:52px;letter-spacing:14px;color:var(--teal)">${is.letters.map(id => `<span>${L[id].char}</span>`).join(' ')}</div>
        <div class="prog" id="recbar" style="display:none;margin:6px 0"><i style="width:0%;background:var(--coral)"></i></div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" id="rec" style="font-size:19px">${clip ? '🔁 ' + t('redo') : '🎙️ ' + t('record')}</button>
          ${clip ? `<button class="btn alt" id="hear" style="font-size:19px">▶ ${t('listenMine')}</button>` : ''}
        </div>
        <p class="small">🔒 ${t('voiceStays')}</p>
      </div>
      <button class="btn sun" data-go="gate" data-arg='${gateArg}'>👪 ${t('shareFam')}</button></div>`;
    wire();
    const h = app.querySelector('#hear'); if (h) h.onclick = () => new Audio(url).play().catch(() => {});
    app.querySelector('#rec').onclick = async ev => {
      const btn = ev.currentTarget;
      if (rec && rec.state === 'recording') return stopRec();
      if (!navigator.mediaDevices || !window.MediaRecorder) return toast(t('noMic'));
      let stream; try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { return toast(t('noMic')); }
      const mt = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg'].find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m));
      const chunks = []; rec = new MediaRecorder(stream, mt ? { mimeType: mt } : undefined);
      const bar = app.querySelector('#recbar'), spans = app.querySelectorAll('#recls span'), MAX = 10000, t0 = Date.now();
      btn.textContent = '⏹ ' + t('stop'); bar.style.display = 'block';
      const tick = setInterval(() => {
        const f = Math.min(1, (Date.now() - t0) / MAX); bar.firstChild.style.width = f * 100 + '%';
        spans.forEach((s, j) => s.style.color = j === Math.min(3, (f * 4) | 0) ? 'var(--coral)' : '');
        if (f >= 1) stopRec();
      }, 100);
      rec.ondataavailable = e => e.data && e.data.size && chunks.push(e.data);
      rec.onstop = async () => {
        clearInterval(tick); stream.getTracks().forEach(x => x.stop());
        const blob = new Blob(chunks, { type: rec.mimeType || mt || 'audio/webm' }); rec = null;
        if (blob.size) { await clipPut(k.id, is.id, blob); beep(true); }
        if (screen === 'cert') render();
      };
      rec.start(250); sayUI(t('recording'));
    };
  },
  async share() {
    const k = kid(), is = D.islands[ctx.i]; if (!k || !(k.certs || {})[is.id]) return go('map');
    const c = drawCert(k, is), png = await canvasBlob(c), clip = await clipGet(k.id, is.id);
    if (screen !== 'share') return;
    const msg = t('shareMsg')(k.name, is.name[S.lang]) + ' ' + SITE;
    const imgF = new File([png], `sindibad-${is.id}.png`, { type: 'image/png' });
    const clipF = clip ? new File([clip], `sindibad-${is.id}-voice.${audioExt(clip.type)}`, { type: clip.type || 'audio/webm' }) : null;
    app.innerHTML = `${topbar('cert" data-arg=\'' + JSON.stringify({ i: ctx.i }) + '\'')}<h1>👪 ${t('shareTitle')}</h1>
      <div class="grid" style="max-width:520px">
      <img src="${c.toDataURL('image/png')}" alt="" style="width:100%;border-radius:20px">
      <p class="small">${t('shareIntro')}</p>
      ${clip ? `<label class="pcard" style="display:flex;gap:10px;align-items:center"><input type="checkbox" id="wv" checked style="width:24px;height:24px"> 🎙️ ${t('withVoice')}</label>` : ''}
      <button class="btn" id="sh">📤 ${t('shareBtn')}</button>
      <button class="btn alt" id="wa" style="font-size:18px">💬 ${t('waText')}</button>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn alt" id="dl" style="font-size:16px;flex:1">⬇️ ${t('savePic')}</button>${clip ? `<button class="btn alt" id="dv" style="font-size:16px;flex:1">⬇️ ${t('saveVoice')}</button>` : ''}</div>
      <p class="small">${t('waNote')}</p></div>`;
    wire();
    const counted = () => { k.shares = (k.shares || 0) + 1; save(); };
    app.querySelector('#sh').onclick = async () => {
      const wv = app.querySelector('#wv'), files = [imgF].concat(clipF && wv && wv.checked ? [clipF] : []);
      const can = d => navigator.canShare && navigator.canShare(d);
      try {
        if (can({ files, text: msg })) { await navigator.share({ files, text: msg }); }
        else if (files.length > 1 && can({ files: [imgF], text: msg })) { await navigator.share({ files: [imgF], text: msg }); toast(t('voiceOnlyImg')); }
        else if (navigator.share) { download(png, imgF.name); await navigator.share({ text: msg }); }
        else { download(png, imgF.name); window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank', 'noopener'); }
        counted(); toast(t('sharedOk'));
      } catch (e) { if (e && e.name !== 'AbortError') toast(t('waNote')); }
    };
    app.querySelector('#wa').onclick = () => { counted(); window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank', 'noopener'); };
    app.querySelector('#dl').onclick = () => download(png, imgF.name);
    const dv = app.querySelector('#dv'); if (dv) dv.onclick = () => download(clip, clipF.name);
  }
});

/* ---------- games ---------- */
function startGame() {
  const k = kid(), is = D.islands[ctx.i];
  const pool = learnedLetters(k, ctx.i).map(id => L[id]);
  let qs;
  if (ctx.review) {
    qs = shuffle(is.letters.flatMap(id => [['listen', L[id]], [pick(['first', 'shape']), L[id]]]));
  } else {
    const l = L[ctx.id];
    qs = [['listen', l], ['first', l, 0], ['shape', l], ['listen', l], ['first', l, 1], ['trace', l]];
    const others = pool.filter(x => x.id !== l.id && k.stars[x.id]);
    if (others.length) qs.splice(4, 0, ['listen', pick(others)]);
  }
  let q = 0, mistakes = 0;
  const t0 = Date.now();
  const distract = (l, n = 3) => shuffle(pool.filter(x => x.id !== l.id)).slice(0, n);
  const head = () => `${topbar('island" data-arg=\'' + JSON.stringify({ i: ctx.i }) + '\'', `<div class="prog" style="max-width:60%"><i style="width:${q / qs.length * 100}%"></i></div>`)}`;

  function next() {
    if (q >= qs.length) return finish();
    const [type, l, wi] = qs[q];
    ({ listen, first, shape, trace })[type](l, wi);
  }
  function answered(ok, btn) {
    if (ok) {
      btn && btn.classList.add('good'); beep(true); sayUI(pick(t('great')));
      app.querySelectorAll('.opt').forEach(b => b.disabled = true);
      setTimeout(() => { q++; next(); }, 900);
    } else {
      mistakes++; btn && btn.classList.add('bad'); beep(false);
      setTimeout(() => btn && btn.classList.remove('bad'), 400);
    }
  }
  function options(l, prompt, q_, onShow, makeLabel = x => x.char) {
    const opts = shuffle([l, ...distract(l)]);
    app.innerHTML = `${head()}<div class="center"><div class="q">${q_}</div>${prompt}
      <div class="grid opts">${opts.map(o => `<button class="opt ar" data-id="${o.id}">${makeLabel(o)}</button>`).join('')}</div></div>`;
    wire();
    app.querySelectorAll('.opt').forEach(b => b.onclick = () => answered(b.dataset.id === l.id, b));
    onShow && onShow();
  }
  function listen(l) {
    options(l, `<button class="ib" id="rep" style="width:110px;height:110px;font-size:56px;border-radius:32px">🔊</button>`, t('listen'), () => {
      const p = () => say(pick([l.name, soundOf(l)]));
      app.querySelector('#rep').onclick = p; setTimeout(p, 350);
    });
  }
  function first(l, wi) {
    const w = l.words[wi ?? (Math.random() * 3 | 0)];
    options(l, `<button class="ib" id="rep" style="width:150px;height:150px;font-size:96px;border-radius:36px">${w.emoji}</button>`, t('first'), () => {
      const p = () => say(w.ar); app.querySelector('#rep').onclick = p; setTimeout(p, 350);
    });
  }
  function shape(l) {
    const f = forms(l), shown = f[1 + (Math.random() * 3 | 0)];
    options(l, `<div class="prompt ar" style="color:var(--coral)">${shown}</div>`, t('shape'));
  }
  function trace(l) {
    app.innerHTML = `${head()}<div class="center"><div class="q">${t('trace')}</div>
      <div class="trace"><canvas id="bg"></canvas><canvas id="fg"></canvas></div>
      <div style="display:flex;gap:12px"><button class="btn alt" id="clr">↺ ${t('clear')}</button><button class="btn" id="chk">✓ ${t('check')}</button></div></div>`;
    wire();
    const bg = app.querySelector('#bg'), fg = app.querySelector('#fg'), box = bg.parentElement;
    const dpr = Math.min(2, window.devicePixelRatio || 1), W = box.clientWidth * dpr, H = box.clientHeight * dpr;
    [bg, fg].forEach(c => { c.width = W; c.height = H; });
    const font = `700 ${W * 0.62}px "Baloo Bhaijaan 2", serif`;
    const drawLetter = (c, color, stroke) => {
      c.font = font; c.textAlign = 'center'; c.textBaseline = 'middle'; c.direction = 'rtl';
      c.fillStyle = color; c.fillText(l.char, W / 2, H * 0.52);
      if (stroke) { c.lineWidth = stroke; c.strokeStyle = color; c.lineJoin = 'round'; c.strokeText(l.char, W / 2, H * 0.52); }
    };
    const b = bg.getContext('2d'); drawLetter(b, '#efe3cc'); b.setLineDash([W / 60, W / 60]); b.lineWidth = W / 150; b.strokeStyle = '#c9b48d'; b.font = font; b.textAlign = 'center'; b.textBaseline = 'middle'; b.strokeText(l.char, W / 2, H * 0.52);
    const g = fg.getContext('2d'); g.lineCap = g.lineJoin = 'round'; g.lineWidth = W / 11; g.strokeStyle = 'rgba(15,139,141,.85)';
    let drawing = false, last;
    const pos = e => { const r = fg.getBoundingClientRect(); return [(e.clientX - r.left) * dpr, (e.clientY - r.top) * dpr]; };
    fg.onpointerdown = e => { drawing = true; last = pos(e); fg.setPointerCapture(e.pointerId); g.beginPath(); g.arc(last[0], last[1], g.lineWidth / 2, 0, 7); g.fillStyle = g.strokeStyle; g.fill(); };
    fg.onpointermove = e => { if (!drawing) return; const p = pos(e); g.beginPath(); g.moveTo(...last); g.lineTo(...p); g.stroke(); last = p; };
    fg.onpointerup = fg.onpointercancel = () => drawing = false;
    app.querySelector('#clr').onclick = () => g.clearRect(0, 0, W, H);
    app.querySelector('#chk').onclick = () => {
      const m = document.createElement('canvas'); m.width = W; m.height = H; const mc = m.getContext('2d');
      drawLetter(mc, '#000'); const thin = mc.getImageData(0, 0, W, H).data;
      mc.clearRect(0, 0, W, H); drawLetter(mc, '#000', W / 9); const wide = mc.getImageData(0, 0, W, H).data;
      const ink = g.getImageData(0, 0, W, H).data;
      let lt = 0, cov = 0, st = 0, out = 0; const step = 4 * Math.round(3 * dpr);
      for (let i = 3; i < ink.length; i += step) {
        const isL = thin[i] > 100, isW = wide[i] > 100, isI = ink[i] > 100;
        if (isL) { lt++; if (isI) cov++; }
        if (isI) { st++; if (!isW) out++; }
      }
      const c = lt ? cov / lt : 0, o = st ? out / st : 1;
      if (c >= 0.6 && o <= 0.35) { confetti(); answered(true); }
      else { answered(false); toast(t('again')); }
    };
    setTimeout(() => say(l.name), 300);
  }
  function finish() {
    const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
    const kk = kid();
    if (!ctx.review) kk.stars[ctx.id] = Math.max(kk.stars[ctx.id] || 0, stars);
    else { kk.certs = kk.certs || {}; kk.certs[is.id] = kk.certs[is.id] || today(); }
    kk.minutes = (kk.minutes || 0) + (Date.now() - t0) / 60000;
    const d = today();
    if (kk.lastDay !== d) {
      const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
      kk.streak = kk.lastDay === y ? (kk.streak || 0) + 1 : 1; kk.lastDay = d;
    }
    save(); go('reward', { i: ctx.i, stars, cert: !!ctx.review });
  }
  next();
}

/* ---------- boot ---------- */
(async () => {
  try {
    const r = await fetch('../curriculum/letters.json'); D = await r.json();
  } catch (e) { app.innerHTML = '<div class="center"><h2>Could not load lessons. Check your connection and reload.</h2></div>'; return; }
  D.letters.forEach(l => L[l.id] = l);
  document.documentElement.lang = S.lang;
  if (document.fonts) { try { await document.fonts.load('700 40px "Baloo Bhaijaan 2"', 'بت'); } catch (e) {} }
  if (S.cur && kid()) go('map'); else go('profiles');
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
