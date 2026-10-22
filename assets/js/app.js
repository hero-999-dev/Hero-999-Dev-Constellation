/* Hero Dev — Constellation
 *
 * One data array below feeds both the map and the stacked list, so adding a
 * repository is a single edit.
 *
 * On the password gate: this is a static site on GitHub Pages. There is no server, so
 * the check runs in the browser and everything behind it is already in the
 * page source. It keeps the constellation from being read at a glance; it is not
 * security, and nothing secret belongs here.
 */

const OWNER = 'hero-999-dev';
const GH = (repo) => `https://github.com/${OWNER}/${repo}`;

/* A group is a project with more than one repository: the frame drawn round
   its cards IS the grouping, so it has no card of its own. A project that is one
   repository stands on its own inside the outer frame, which is the page's own
   repository (SELF) - on a phone, the column headed by its name.
   `desc` and the two category words in `lang` are I18N keys, not text. Keep every
   translation to ONE line: card height is pinned (NODE_ROWS), so a second line
   is clipped rather than fitted. Check all four after editing.
   Course work and other one-off repositories do not belong here - only projects. */
const BRANCHES = [
  {
    id: 'cat', title: 'Warsaw Cat Sitting',
    desc: 'dCat',
    repo: 'warsaw-cat-sitting', lang: 'HTML', private: true,
    live: 'https://warsaw-cat-sitting.vercel.app',
  },
  {
    id: 'claw', title: 'ClaWus',
    desc: 'dClaw',
    repo: 'ClaWus-Claude-Usage-Widget', lang: 'Desktop', private: true,
  },
  {
    id: 'split', title: 'SplitExec',
    desc: 'dSplit',
    repo: 'SplitExec-Video-Splitter-For-Discord-And-Other-Platforms', lang: 'Desktop', private: true,
  },
  {
    id: 'pomo', ring: 'Pixel Pomo',
    children: [
      { title: 'pixel_pomo', desc: 'dPomo',
        repo: 'pixel_pomo', lang: 'Dart', private: false },
      { title: 'pixel-pomo-web', desc: 'dWeb',
        repo: 'pixel-pomo-web', lang: 'Flutter', private: false,
        live: 'https://hero-999-dev.github.io/pixel-pomo-web/' },
      { title: 'pixel_pomo_art_kit', desc: 'dKit',
        repo: 'pixel_pomo_art_kit', lang: 'Python', private: false },
      { title: 'pixel_pomo_dev_kit', desc: 'dDevKit',
        repo: 'pixel_pomo_dev_kit', lang: 'Python', private: false },
    ],
  },
  /* The -web half of a project is its public entrance: the documentation (and,
     for the closed ones, the download) behind a password, served from Pages. */
  {
    id: 'cube', ring: 'CubeDeck',
    children: [
      { title: 'CubeDeck', desc: 'dCube',
        repo: 'CubeDeck', lang: 'Extension', private: true },
      { title: 'cubedeck-web', desc: 'dDocs',
        repo: 'cubedeck-web', lang: 'HTML', private: false,
        live: 'https://hero-999-dev.github.io/cubedeck-web/' },
    ],
  },
  {
    id: 'lea', ring: 'Project Lea',
    children: [
      { title: 'Project Lea', desc: 'dLea',
        repo: 'Project-Lea', lang: 'PowerShell', private: true },
      { title: 'project-lea-web', desc: 'dDocs',
        repo: 'project-lea-web', lang: 'HTML', private: false,
        live: 'https://hero-999-dev.github.io/project-lea-web/' },
    ],
  },
  {
    id: 'nebula', ring: 'Nebula',
    children: [
      { title: 'Nebula', desc: 'dNebula',
        repo: 'nebula', lang: 'Desktop', private: false },
      { title: 'nebula-web', desc: 'dDocs',
        repo: 'nebula-web', lang: 'HTML', private: false,
        live: 'https://hero-999-dev.github.io/nebula-web/' },
    ],
  },
  {
    id: 'orch', ring: 'AI Orchestra',
    children: [
      { title: 'AI Orchestra', desc: 'dOrch',
        repo: 'ai-orchestra', lang: 'Desktop', private: true },
      { title: 'ai-orchestra-web', desc: 'dDocs',
        repo: 'ai-orchestra-web', lang: 'HTML', private: false,
        live: 'https://hero-999-dev.github.io/ai-orchestra-web/' },
    ],
  },
];

/* Which groups stand in which column, by id - `self` is the single repositories.
   A phone has two columns, and the groups are shared out so the two come to
   about the same height. A wide screen is offered more than one arrangement and
   takes whichever lets the cards be set biggest: four columns on a window that
   is wide for its height, three on one that is tall for its width. */
const COLUMNS = {
  wide: [
    [['self'], ['pomo'], ['cube', 'lea'], ['nebula', 'orch']],
    [['self', 'nebula'], ['pomo', 'lea'], ['cube', 'orch']],
  ],
  narrow: [['self', 'cube', 'nebula'], ['pomo', 'lea', 'orch']],
};

/* The page's own repository. It is not a card - it is the name of the outer
   frame, the one that holds everything being the repository that draws it, and
   on a phone the name over the column of single repositories. */
const SELF = {
  title: 'Constellation',
  desc: 'dSelf',
  repo: 'Hero-999-Dev-Constellation', lang: 'JavaScript', private: false,
};

/* --------------------------------------------------------------- language */

/* Four locales, one flat table. Repository names, the Pixel Pomo label and
   language names (Dart, Python, HTML...) are proper nouns and stay put; only
   prose and the two category badges are translated. */
const I18N = {
  en: {
    onGithub: 'On GitHub', openLive: 'Open the site', close: 'Close',
    inspiration: 'Inspiration',
    home: 'Home', projectsHardware: 'Projects & Hardware',
    projects: 'Projects',
    hardware: 'Hardware', black: 'Black', white: 'White', dark: 'Dark', light: 'Light',
    private: 'Private', public: 'Public', live: 'Live',
    Extension: 'Extension', Desktop: 'Desktop',
    handheld: 'Handheld', phone: 'Phone', integrated: 'integrated',
    vibecoded: 'This project is vibecoded by using Opus 5',
    dPomo: 'Pixel-art Pomodoro timer.', dWeb: 'Runs in the browser.',
    dKit: 'Editor for its sprites.', dCube: 'Fifteen tools for YouTube.',
    dCat: 'Cat sitting in Warsaw.', dSplit: 'Splits video for Discord.',
    dClaw: 'When to use Claude.', dLea: 'A hook for Claude Code.',
    dDevKit: 'Its art, in the real garden.', dDocs: 'Docs, behind a password.',
    dNebula: 'Calm notes, a real editor.', dOrch: 'One workspace for AI CLIs.',
    dSelf: 'A map of every repository.',
  },
  tr: {
    onGithub: "GitHub'da", openLive: 'Siteyi aç', close: 'Kapat',
    inspiration: 'İlham',
    home: 'Ana sayfa', projectsHardware: 'Projeler & Donanım',
    projects: 'Projeler',
    hardware: 'Donanım', black: 'Siyah', white: 'Beyaz', dark: 'Koyu', light: 'Açık',
    private: 'Özel', public: 'Herkese açık', live: 'Canlı',   // not 'Açık' - that is the light theme
    Extension: 'Eklenti', Desktop: 'Masaüstü',
    handheld: 'Avuç içi', phone: 'Telefon', integrated: 'tümleşik',
    vibecoded: 'Bu proje Opus 5 ile vibecode edildi',
    dPomo: 'Piksel Pomodoro sayacı.', dWeb: 'Tarayıcıda çalışır.',
    dKit: "Sprite'ları için editör.", dCube: 'YouTube için on beş araç.',
    dCat: "Varşova'da kedi bakımı.", dSplit: 'Videoyu Discord için böler.',
    dClaw: 'Claude ne zaman uygun.', dLea: 'Claude Code için hook.',
    dDevKit: 'Çizimleri oyunda önizler.', dDocs: 'Şifreli dokümantasyon.',
    dNebula: 'Sakin notlar, gerçek editör.', dOrch: "AI CLI'ları için tek alan.",
    dSelf: "Her repo'nun haritası.",
  },
  pl: {
    onGithub: 'Na GitHubie', openLive: 'Otwórz stronę', close: 'Zamknij',
    inspiration: 'Inspiracje',
    home: 'Strona główna', projectsHardware: 'Projekty i sprzęt',
    projects: 'Projekty',
    hardware: 'Sprzęt', black: 'Czarny', white: 'Biały', dark: 'Ciemny', light: 'Jasny',
    private: 'Prywatne', public: 'Publiczne', live: 'Na żywo',
    Extension: 'Rozszerzenie', Desktop: 'Desktop',
    handheld: 'Konsola przenośna', phone: 'Telefon', integrated: 'zintegrowana',
    vibecoded: 'Ten projekt powstał w vibecodingu z Opus 5',
    dPomo: 'Pikselowe Pomodoro.', dWeb: 'Działa w przeglądarce.',
    dKit: "Edytor jego sprite'ów.", dCube: '15 narzędzi do YouTube.',
    dCat: 'Opieka nad kotami.', dSplit: 'Dzieli wideo pod Discorda.',
    dClaw: 'Kiedy używać Claude.', dLea: 'Hook do Claude Code.',
    dDevKit: 'Grafika w prawdziwym ogrodzie.', dDocs: 'Dokumentacja za hasłem.',
    dNebula: 'Spokojne notatki, edytor.', dOrch: 'Jedno miejsce na AI CLI.',
    dSelf: 'Mapa wszystkich repozytoriów.',
  },
  de: {
    onGithub: 'Auf GitHub', openLive: 'Seite öffnen', close: 'Schließen',
    inspiration: 'Inspiration',
    home: 'Startseite', projectsHardware: 'Projekte & Hardware',
    projects: 'Projekte',
    hardware: 'Hardware', black: 'Schwarz', white: 'Weiß', dark: 'Dunkel', light: 'Hell',
    private: 'Privat', public: 'Öffentlich', live: 'Live',
    Extension: 'Erweiterung', Desktop: 'Desktop',
    handheld: 'Handheld', phone: 'Telefon', integrated: 'integriert',
    vibecoded: 'Dieses Projekt wurde mit Opus 5 vibecoded',
    dPomo: 'Pixel-Art-Pomodoro-Timer.', dWeb: 'Läuft im Browser.',
    dKit: 'Editor für seine Sprites.', dCube: '15 Werkzeuge für YouTube.',
    dCat: 'Katzenbetreuung, Warschau.', dSplit: 'Teilt Videos für Discord.',
    dClaw: 'Wann man Claude nutzt.', dLea: 'Ein Hook für Claude Code.',
    dDevKit: 'Grafik im echten Garten.', dDocs: 'Doku hinter Passwort.',
    dNebula: 'Ruhige Notizen mit Editor.', dOrch: 'Ein Ort für KI-CLIs.',
    dSelf: 'Karte aller Repositorys.',
  },
};

let LANG = 'en';
const t = (key) => (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;

function applyLang(code) {
  LANG = I18N[code] ? code : 'en';
  localStorage.setItem('hdh-lang', LANG);
  document.documentElement.lang = LANG;
  for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const pick of document.querySelectorAll('[data-site-lang]')) {
    for (const opt of pick.querySelectorAll('[data-lang]')) {
      opt.setAttribute('aria-selected', String(opt.dataset.lang === LANG));
    }
  }
  paintLangMenu();   // before the button: it is measured against these names
  paintChrome();
  applyTheme(THEME);
  if (document.getElementById('mapNodes')) rebuildMap();
}

/* The menu drops open rather than appearing. Same shape as the hardware panel:
   `hidden` still carries the resting state, so nothing is in the way of a click
   while it is shut, and a class carries the animation. Out of `hidden` and
   measured once before the class goes on, or there is nothing to animate from. */
const MENU_MS = 240;

function openMenu(menu) {
  menu.hidden = false;
  menu.getBoundingClientRect();
  menu.classList.add('in');
}

function shutMenu(menu) {
  menu.classList.remove('in');
  setTimeout(() => { if (!menu.classList.contains('in')) menu.hidden = true; }, MENU_MS);
}

function initLang() {
  const saved = localStorage.getItem('hdh-lang');
  const guess = (navigator.language || 'en').slice(0, 2).toLowerCase();
  applyLang(I18N[saved] ? saved : (I18N[guess] ? guess : 'en'));
  /* A native <select> hands its drop-down to the platform - grey list, system
     colours, an arrow that belongs to nothing here. This is a button and a list
     instead, so the menu wears the same palette as everything else. */
  for (const pick of document.querySelectorAll('[data-site-lang]')) {
    const btn = pick.querySelector('.lang-btn');
    const menu = pick.querySelector('.lang-menu');
    const close = () => { shutMenu(menu); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = menu.hidden || !menu.classList.contains('in');
      // Every other one first, but not this one: dropping and re-adding the
      // class in the same tick gives the transition nothing to run between.
      for (const other of document.querySelectorAll('.lang-menu')) {
        if (other !== menu) shutMenu(other);
      }
      if (open) openMenu(menu); else shutMenu(menu);
      btn.setAttribute('aria-expanded', String(open));
    });
    for (const opt of menu.querySelectorAll('[data-lang]')) {
      opt.addEventListener('click', () => { applyLang(opt.dataset.lang); close(); });
    }
    document.addEventListener('click', (event) => {
      if (!pick.contains(event.target)) close();
    });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  }
}

/* ------------------------------------------------------------------ theme */

/* Two of these exist - one on the lock screen, one in the header - so the switch
   is reachable before the password is answered as well as after. */
/* Four of them, taken in turn by the one button: the two warm ones, and black
   and white - the same page in greys, on pure black or pure white. A grey theme
   is a dark or a light one with its palette swapped (`data-mono`), so every
   rule written for dark or light holds for it as well. */
const THEMES = ['dark', 'light', 'black', 'white'];
const THEME_GROUND = { dark: '#1A1411', light: '#EEDAB6', black: '#000000', white: '#FFFFFF' };
let THEME = 'dark';

function applyTheme(mode) {
  THEME = THEMES.includes(mode) ? mode : 'dark';
  const root = document.documentElement;
  root.dataset.theme = THEME === 'light' || THEME === 'white' ? 'light' : 'dark';
  if (THEME === 'black' || THEME === 'white') root.dataset.mono = ''; else delete root.dataset.mono;
  localStorage.setItem('hdh-theme', THEME);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_GROUND[THEME]);
  paintChrome();
}
const nextTheme = () => THEMES[(THEMES.indexOf(THEME) + 1) % THEMES.length];

/* The controls wear the cards' frame. Their labels come from the language and
   theme tables, so the frames are drawn from those rather than written into the
   markup, and redrawn whenever either changes. */
function chromeLabel(el) {
  if (el.matches('[data-theme-toggle]')) {
    // The theme the button goes to next, not the one on show.
    const word = t(nextTheme());
    /* Padded to the longest of the four words, the way the language button is
       padded to the longest name. Dark is four characters and Light is five, so
       pressing it changed the width of its own box - and with it the place of
       every control beside it in the row. */
    const wide = Math.max(...THEMES.map((m) => t(m).length));
    const room = wide - word.length, left = Math.floor(room / 2);
    return ' '.repeat(left) + word + ' '.repeat(room - left);
  }
  if (el.matches('.lang-btn')) {
    const pick = el.closest('[data-site-lang]');
    const names = [...(pick ? pick.querySelectorAll('[data-lang]') : [])].map(langName);
    const chosen = pick?.querySelector('[data-lang="' + LANG + '"]');
    const wide = names.reduce((n, t) => Math.max(n, t.length), 0);
    // Padded to the longest name, so the list below can never be the wider box.
    return (chosen ? langName(chosen) : LANG).padEnd(wide) + ' v';
  }
  return el.dataset.i18n ? t(el.dataset.i18n) : (el.dataset.box || '');
}

/* The language names are the markup's; the rows are drawn round them. Kept on
   the element so the frame can be redrawn without eating the name. */
const langName = (li) => (li.dataset.name || (li.dataset.name = li.textContent.trim()));

/* The list is a drawn box like the rest: a rule top and bottom, an upright at
   each end of every row, and a caret against the language in use. Every row is
   the same number of characters, which is what keeps the uprights in a line. */
function paintLangMenu() {
  for (const pick of document.querySelectorAll('[data-site-lang]')) {
    const menu = pick.querySelector('.lang-menu');
    if (!menu) continue;
    const items = [...menu.querySelectorAll('[data-lang]')];
    if (!items.length) continue;
    const wide = items.reduce((n, li) => Math.max(n, langName(li).length), 0) + 2;
    const rule = '-'.repeat(wide + 2);
    for (const old of menu.querySelectorAll('.lang-rule')) old.remove();
    for (const li of items) {
      const mark = li.getAttribute('aria-selected') === 'true' ? '> ' : '  ';
      li.textContent = '| ' + (mark + langName(li)).padEnd(wide) + ' |';
    }
    const edge = (text) => {
      const li = document.createElement('li');
      li.className = 'lang-rule';
      li.setAttribute('aria-hidden', 'true');
      li.textContent = text;
      return li;
    };
    menu.prepend(edge('.' + rule + '.'));
    menu.append(edge("'" + rule + "'"));
  }
}

function paintChrome() {
  for (const el of document.querySelectorAll('[data-i18n-label]')) {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  }
  for (const el of document.querySelectorAll('[data-box]')) {
    const label = chromeLabel(el);
    el.textContent = asciiBox([label], label.length + 2);
  }
  fitBar();
}

/* One row on a phone, in every language. How wide the bar comes out is decided
   by the words in it - Strona główna is a third again as long as Home - so it is
   not something the stylesheet can be told in advance: measure the row at the
   size the stylesheet asks for, and if it is wider than the screen, hand the
   pills a size that makes it fit. Wrapping was the alternative, and it put the
   five boxes in a different shape in every language.
   Only the pills take this size. The signature in the corner is set from
   --chrome-font like everything else and stays where it is. */
function fitBar() {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  const root = document.documentElement;
  root.style.removeProperty('--pill-font');       // measure at the stylesheet's own size
  const pills = [...bar.querySelectorAll('.pill')].filter((p) => p.offsetParent);
  if (narrow() && pills.length) {
    const cs = getComputedStyle(bar);
    const gaps = (parseFloat(cs.columnGap) || 0) * (pills.length - 1);
    const room = bar.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    /* Fitted to the LONGEST language, not the one on show. The size is what
       decides how tall a three-row box comes out, so fitting it to the current
       language made the boxes shorter in Polish than in English, and the top and
       bottom of every box moved when the language changed. One size for all
       four: it is the widest of them that has to hold.
       Tried rather than solved, because a character's width is not exactly
       proportional to the type size - the advance is rounded to the raster, and
       a size worked out in one step came up a few per cent short. Each pass
       measures a cell at the size on the element and comes down from there;
       three is plenty. */
    let size = parseFloat(getComputedStyle(pills[0]).fontSize);
    const worst = Math.max(...Object.keys(I18N).map(barCells));
    for (let pass = 0; pass < 4; pass++) {
      const cell = cellWidth(bar, pills[0]);
      const need = worst * cell + gaps;
      if (!(cell > 0) || !(room > 0) || need <= room) break;
      size *= (room / need) * 0.99;
      root.style.setProperty('--pill-font', size.toFixed(2) + 'px');
    }
  }
  // The site's name stands in the middle of the row; where the buttons either
  // side reach it, it steps out rather than being written across them.
  const title = bar.querySelector('.gate-top');
  if (title) {
    bar.classList.remove('no-title');
    const q = title.getBoundingClientRect();
    const sides = [...bar.querySelectorAll('.topbar-left, .topbar-right')]
      .map((el) => el.getBoundingClientRect());
    if (q.width && sides.some((r) => r.width && r.left < q.right + 8 && r.right > q.left - 8)) {
      bar.classList.add('no-title');
    }
  }
  measureBar();   // the row's height goes with its type size
}

/* How wide one character comes out in the bar's own face at the size it is
   currently set in. Measured off a probe rather than off the boxes: every box is
   a whole number of characters, and what one of them comes out at must not
   depend on which language is on show - divided out of the boxes, each
   language's own rounding came with it. */
function cellWidth(bar, pill) {
  const face = getComputedStyle(pill);
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
  probe.style.fontFamily = face.fontFamily;
  probe.style.fontSize = face.fontSize;
  probe.style.fontWeight = face.fontWeight;
  probe.textContent = '0'.repeat(40);
  bar.appendChild(probe);
  const wide = probe.getBoundingClientRect().width / 40;
  probe.remove();
  return wide;
}

/* How many characters the five boxes come to in one language, frames included.
   A drawn box is its word plus FOUR: paintChrome() gives asciiBox a column count
   of word + 2 - a space either side - and the box then puts an upright on each
   end of that. The language list is the same everywhere, so the language button
   is the longest name padded plus " v"; the theme button is padded to the longer
   of its two words - see chromeLabel. */
function barCells(code) {
  const T = (key) => (I18N[code] && I18N[code][key]) || I18N.en[key] || key;
  const words = [T('home'), T('projects'), T('hardware')];
  words.push(' '.repeat(Math.max(...THEMES.map((m) => T(m).length))));
  words.push(' '.repeat(7 + 2));               // "English"/"Deutsch" + " v"
  return words.reduce((n, word) => n + word.length + 4, 0);
}

function initTheme() {
  const saved = localStorage.getItem('hdh-theme');
  // Dark unless the visitor has said otherwise - most people prefer it, and the
  // planet burns against the black better than it sits on the amber.
  applyTheme(THEMES.includes(saved) ? saved : 'dark');
  for (const btn of document.querySelectorAll('[data-theme-toggle]')) {
    btn.addEventListener('click', () => applyTheme(nextTheme()));
  }
}

/* --------------------------------------------------------------- connectors */

/* The runs between the machines are drawn like everything else on the panel:
   characters on a grid. Each route arrives as a list of corner points in the
   panel's own pixels; the segments between them are laid down cell by cell,
   with a `+` where two meet and an arrowhead at whichever end asked for one.
   Rebuilt whole on every frame - the grid is a few hundred cells, and a card
   being dragged moves its ends every frame anyway. */
/* A character grid the size of a <pre>, with the few pen strokes everything
   here needs: straight runs, a rectangle, and a word written into an edge. The
   cell is measured rather than assumed - the mono face is whatever the system
   gave us, and every box on the page is spaced by it. */
function gridFor(pre) {
  if (!pre) return null;
  /* The measured box, not clientWidth: that one comes back as a whole number,
     and a box set to an exact number of cells then reads a fraction of a cell
     short - which costs the last column, the one the right-hand rule stands in. */
  const seen = pre.getBoundingClientRect();
  const w = seen.width, h = seen.height;
  if (!w || !h) return null;
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
  probe.textContent = '0'.repeat(40);
  pre.appendChild(probe);
  const pb = probe.getBoundingClientRect();
  const cw = pb.width / 40, chh = pb.height;
  probe.remove();
  if (!cw || !chh) return null;

  /* A hair of tolerance on the division: a box set to a whole number of cells
     measures back a few thousandths short of one, and a bare floor() then gave
     up the last column - which is the one the frame's right-hand rule stands
     in. */
  const cols = Math.max(1, Math.floor(w / cw + 0.02)), rows = Math.max(1, Math.floor(h / chh + 0.02));
  const cells = [];
  for (let r = 0; r < rows; r++) cells.push(new Array(cols).fill(' '));

  const put = (c, r, ch, force) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    const was = cells[r][c];
    // A crossing is a crossing: never let a straight overwrite a corner.
    if (!force && ch === '-' && (was === '|' || was === '+')) { cells[r][c] = '+'; return; }
    if (!force && ch === '|' && (was === '-' || was === '+')) { cells[r][c] = '+'; return; }
    cells[r][c] = ch;
  };
  const cell = (pt) => ({ c: Math.round(pt.x / cw), r: Math.round(pt.y / chh) });

  const run = (points, opts = {}) => {
    const pts = points.map(cell);
    for (let i = 0; i < pts.length - 1; i++) {
      const from = pts[i], to = pts[i + 1];
      if (from.c === to.c) {
        const step = to.r > from.r ? 1 : -1;
        for (let r = from.r; r !== to.r + step; r += step) put(from.c, r, '|');
      } else {
        const step = to.c > from.c ? 1 : -1;
        for (let c = from.c; c !== to.c + step; c += step) put(c, from.r, '-');
      }
      if (i) put(from.c, from.r, '+');
    }
    // Heads point the way the last (or first) segment runs.
    const head = (at, from) => {
      if (at.c === from.c) put(at.c, at.r, at.r > from.r ? 'v' : '^', true);
      else put(at.c, at.r, at.c > from.c ? '>' : '<', true);
    };
    if (opts.head && pts.length > 1) head(pts[pts.length - 1], pts[pts.length - 2]);
    if (opts.head2 && pts.length > 1) head(pts[0], pts[1]);
  };

  const box = (a, b) => {
    const p0 = cell(a), p1 = cell(b);
    const c0 = Math.min(p0.c, p1.c), c1 = Math.max(p0.c, p1.c);
    const r0 = Math.min(p0.r, p1.r), r1 = Math.max(p0.r, p1.r);
    for (let c = c0; c <= c1; c++) { put(c, r0, '-'); put(c, r1, '-'); }
    for (let r = r0; r <= r1; r++) { put(c0, r, '|'); put(c1, r, '|'); }
    put(c0, r0, '.', true); put(c1, r0, '.', true);
    put(c0, r1, "'", true); put(c1, r1, "'", true);
    return { c0, c1, r0, r1 };
  };

  // A name sits IN the edge it labels, with a space either side of it, the way
  // a plate is engraved rather than captioned.
  const label = (text, rect, row) => {
    const word = ' ' + text + ' ';
    let c = Math.round((rect.c0 + rect.c1 - word.length) / 2);
    const at = { c, r: row, w: word.length };
    for (const ch of word) put(c++, row, ch, true);
    return at;
  };

  const flush = () => { pre.textContent = cells.map((r) => r.join('').replace(/\s+$/, '')).join('\n'); };
  return { cols, rows, cw, ch: chh, put, run, box, label, flush };
}

function paintLines(pre, routes) {
  const g = gridFor(pre);
  if (!g) return;
  for (const route of routes) g.run(route.points, route);
  g.flush();
}

/* ------------------------------------------------------------------- boxes */

/* Every box on the page is drawn the way the planet is: characters on a grid.
   One shape - a dot at each top corner, an apostrophe at each bottom one,
   dashes between - and one function that draws it, so the cards, the machines
   and the controls are plainly the same hand.

     .------------------.
     |    pixel_pomo    |
     '------------------'
*/

/* Break text on words to fit `cols`, and hyphen-free: a word longer than the
   line is cut rather than allowed to push the frame open. */
function wrapText(text, cols) {
  const out = [];
  let line = '';
  for (const word of String(text).split(/\s+/)) {
    if (!word) continue;
    if (!line) line = word;
    else if (line.length + 1 + word.length <= cols) line += ' ' + word;
    else { out.push(line); line = word; }
    while (line.length > cols) { out.push(line.slice(0, cols)); line = line.slice(cols); }
  }
  if (line) out.push(line);
  return out;
}

/* Badges break between badges, never inside one. wrapText breaks on spaces, and
   a badge is two words in most languages - Herkese açık, Na żywo, Öffentlich -
   so a row that did not fit came apart in the middle of a word and left `[Na`
   over `żywo]`. English never showed it: its three badges fit one row. */
function packBadges(badges, cols) {
  const out = [];
  let line = '';
  for (const badge of badges) {
    if (!line) line = badge;
    else if (line.length + 1 + badge.length <= cols) line += ' ' + badge;
    else { out.push(line); line = badge; }
  }
  if (line) out.push(line);
  return out;
}

/* Pad a group to its own widest line, so the frame centres the block while the
   lines inside it stay left-aligned with each other - what a spec list wants. */
const padBlock = (lines) => {
  const w = lines.reduce((n, l) => Math.max(n, l.length), 0);
  return lines.map((l) => l + ' '.repeat(w - l.length));
};

/* `rows` pins the inside height so every card in a ring comes out the same
   shape - the ring geometry is solved against a fixed card, and a description
   that wraps to one more line in one language would otherwise grow it. */
function asciiBox(lines, cols, { rows = 0, rule = '-' } = {}) {
  let body = lines.slice();
  if (rows) {
    body = body.slice(0, rows);
    const room = rows - body.length;
    const top = Math.floor(room / 2);
    body = [...Array(top).fill(''), ...body, ...Array(room - top).fill('')];
  }
  const bar = rule.repeat(cols);
  const row = (text) => {
    const clipped = text.length > cols ? text.slice(0, cols) : text;
    const room = cols - clipped.length;
    const left = Math.floor(room / 2);
    return '|' + ' '.repeat(left) + clipped + ' '.repeat(room - left) + '|';
  };
  return ['.' + bar + '.', ...body.map(row), "'" + bar + "'"].join('\n');
}

/* ------------------------------------------------------------------ nodes */

const NODE_COLS = 30, NODE_ROWS = 6;   // inside the frame, in characters

/* Fills a node body. Used by both renderers, so a card looks the same in the
   map and in the list. */
function fillNode(el, item) {
  const cols = NODE_COLS;
  const badges = [];
  // Language names are proper nouns; the category words are not.
  if (item.lang) badges.push('[' + t(item.lang) + ']');
  if (item.repo) badges.push('[' + (item.private ? t('private') : t('public')) + ']');
  if (item.live) badges.push('[' + t('live') + ']');
  const lines = wrapText(item.title, cols);
  if (item.desc) lines.push('', ...wrapText(t(item.desc), cols));
  if (badges.length) lines.push('', ...packBadges(badges, cols));
  el.textContent = asciiBox(lines, cols, { rows: NODE_ROWS });
}

/* A repo card is a link to its repository. */
function makeNode(item, extraClass) {
  const href = item.repo ? GH(item.repo) : item.href;
  const el = document.createElement(href ? 'a' : 'div');
  el.className = 'node' + (extraClass ? ' ' + extraClass : '');
  if (href) {
    el.href = href;
    el.target = '_blank';
    el.rel = 'noopener';
  }
  /* A plain click opens the card into the frame; the link stays a link, so a
     middle click or Ctrl/Cmd-click still goes straight to GitHub. */
  if (item.repo) {
    el.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openDetail(item, el);
    });
  }
  fillNode(el, item);
  return el;
}

/* ------------------------------------------------------------------- map */

/* Every connector on the page, and every rectangle the map draws round a group.
   One list each, rebuilt with whatever renders them. The map itself has no
   connectors any more - the frames are the grouping - so EDGES is the hardware
   panel's alone. */
const EDGES = [];
const RINGS = [];

/* The groups as they stand in the columns of one layout: `self` is the single
   repositories, which have no frame of their own. One reading of COLUMNS for both
   renderers, so the wide map and the phone list cannot disagree on what a group
   holds. */
function groupFor(id) {
  if (id === 'self') return { id, self: true, items: BRANCHES.filter((b) => !b.children) };
  const branch = BRANCHES.find((b) => b.id === id);
  return { id, name: branch.ring, items: branch.children };
}
const columnsFor = (layout) => layout.map((ids) => ids.map(groupFor));

/* The map's groups as built, by id, so fitMap() can stand them in another
   arrangement without building them again: a group is moved whole, and the
   frames drawn round it are worked out from where its cards are, so nothing else
   has to know. */
let mapUnits = null;

function arrangeMap(block, layout) {
  if (block.dataset.layout === String(layout)) return;
  block.dataset.layout = String(layout);
  block.textContent = '';
  for (const ids of COLUMNS.wide[layout]) {
    const col = document.createElement('div');
    col.className = 'map-col';
    for (const id of ids) col.append(...mapUnits.get(id));
    block.appendChild(col);
  }
}

/* The type the cards are set in when there is room for it, and the most they
   are allowed to grow to on a big screen. Everything on the map - the cards, the
   gaps between them and the cell the frames are drawn in - is set from the one
   --card-fs, so the whole block scales together and one measurement fits it. */
const CARD_FS = 12, CARD_FS_MAX = 15, CARD_FS_MIN = 5;

/* How much bigger than 1920x1080 the window is, and 1 below that - the same
   factor as --u in the stylesheet. The ceilings here grow with it, so a big
   monitor or a page zoomed out gets bigger boxes rather than the same small
   ones in a frame stretched to the window. */
const bigScreen = () => Math.max(1, Math.min(innerWidth / 1920, innerHeight / 1080));

/* The map takes the stage, less the rail, and the frame stands in the band
   between the row of controls and the signature: the block of columns is set in
   whatever type lets it fit inside that frame, with the frame's own pad round it. */
function fitMap() {
  const stage = mapEl.parentElement;
  // clientWidth INCLUDES padding, and the stage is padded to leave the rail for
  // the hardware panel. Take the content box.
  const cs = getComputedStyle(stage);
  // The rail comes from the variable, not from the padding that reads it: while
  // the hardware panel slides in that padding is part way through its own
  // transition, and the map has to be handed its FINAL size now so its
  // transition can carry it there rather than chase a moving target.
  const rail = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue('--rail-right')) || 0;
  const availW = stage.clientWidth - parseFloat(cs.paddingLeft) - rail;
  const availH = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  if (!(availW > 0 && availH > 0)) return;
  mapEl.style.width = Math.round(availW) + 'px';
  mapEl.style.height = Math.round(availH) + 'px';

  const nodes = document.getElementById('mapNodes');
  const block = nodes && nodes.querySelector('.map-cols');
  if (!block) return;
  /* The band, in the map's own pixels. Its top does not move while the rail
     slides - only the width does - so it can be read off the screen now. */
  /* The top rule stands where the hardware panel's does - against the
     underside of the boxes in the corner - and the bottom one the same distance
     clear of the signature: the rule is inked in the middle of its row, so the
     row above the signature puts the same half a cell between them that there
     is between the corner boxes and the top rule. */
  const top = stage.getBoundingClientRect().top + parseFloat(cs.paddingTop);
  const bar = document.querySelector('.topbar-right .lang-btn') || document.querySelector('.topbar');
  const sig = document.querySelector('.signature');
  const bandTop = Math.max(0, bar ? bar.getBoundingClientRect().bottom - top : 0);
  let bandBottom = availH;
  if (sig) {
    const row = cellSize(linesEl)?.ch || 0;
    const above = sig.getBoundingClientRect().top - top - row;
    if (above > bandTop) bandBottom = Math.min(availH, above);
  }
  frameBand = { top: bandTop, bottom: bandBottom };
  nodes.style.paddingTop = bandTop + 'px';
  nodes.style.paddingBottom = (availH - bandBottom) + 'px';

  // Measured at the base size, then scaled: every length in the block follows
  // the type, so one pass lands it. Each arrangement is measured the same way
  // and the one that comes out biggest is kept.
  mapEl.style.setProperty('--card-fs', CARD_FS + 'px');
  // Back to the stylesheet's margin for the measuring; paintMap() lines it up again.
  const first = block.querySelector('.map-single-first');
  if (first) first.style.marginTop = '';
  const cell = cellSize(linesEl);
  if (!cell || !mapUnits) return;
  let best = null;
  COLUMNS.wide.forEach((_, i) => {
    arrangeMap(block, i);
    const q = block.getBoundingClientRect();
    if (!q.width || !q.height) return;
    // The outer frame's pad and its rule either side, and a row of air over and
    // under the block inside the rules.
    const needW = q.width + 2 * (MAP_PAD + 1) * cell.cw;
    const needH = q.height + 2 * (MAP_PAD - 1) * cell.ch;
    const k = Math.min(availW / needW, (bandBottom - bandTop) / needH);
    // A hair of preference for the earlier one, so a window that sits right on
    // the line between two does not flip between them as it is dragged.
    if (!best || k > best.k * 1.02) best = { i, k };
  });
  if (!best) return;
  arrangeMap(block, best.i);
  const fs = Math.max(CARD_FS_MIN, Math.min(CARD_FS_MAX * bigScreen(), CARD_FS * best.k));
  mapEl.style.setProperty('--card-fs', fs.toFixed(2) + 'px');
}

/* Cells of clear space between the outer frame and the cards it holds. */
const MAP_PAD = 4;
/* The band the outer frame stands in, worked out by fitMap(). */
let frameBand = null;

function redrawLines() {
  /* Only the panel has runs to draw - the map paints its own grid. Everything
     here is worked out in the panel's own pixels, from the boxes' real rects:
     the boxes are as wide as their text now, so a route solved in some fixed
     coordinate space was right on one screen and through a box on the next.
     Routes are gathered and drawn in one pass at the end, because they share a
     grid and cannot be written one at a time. */
  const asciiRoutes = new Map();
  const CLEAR = 2;
  for (const edge of EDGES) {
    if (!edge.ascii) continue;
    const host = edge.host;
    if (!host || host.hidden || !host.isConnected) continue;
    const box = host.getBoundingClientRect();
    if (!box.width || !box.height) continue;   // hidden on narrow screens
    /* The cell first, because the boxes are read against it. Both the box and
       the panel it sits in are measured off the screen, and while the panel is
       sliding those two numbers are a fraction of a pixel out of step with each
       other from one frame to the next - not enough to see on a box, but enough
       to send an edge across a cell boundary and back, which had the heads on
       the runs jumping a row on every frame of an opening. The boxes stand on
       whole cells (spaceCards), so reading them to the nearest one is both the
       truth and steady. */
    const cell = cellSize(host.querySelector('.dev-lines'));
    const cw = cell ? cell.cw : 6, ch = cell ? cell.ch : 10;
    const rect = (el) => {
      const q = el.getBoundingClientRect();
      const onGrid = (v, step) => Math.round(v / step) * step;
      const l = onGrid(q.left - box.left, cw), r = onGrid(q.right - box.left, cw);
      const t = onGrid(q.top - box.top, ch), b = onGrid(q.bottom - box.top, ch);
      return { l, r, t, b, cx: (l + r) / 2, cy: (t + b) / 2 };
    };
    const a = rect(edge.a), b = rect(edge.b);
    /* An end is snapped to the last whole cell outside its box, not to a couple
       of pixels off it. A cell's ink fills the cell, and the raster rounds to
       the nearest one, so `edge + 2px` was as likely to round back onto the box
       as off it - and the box's ground is painted over the runs, which is what
       ate the head above the Acer. Snapped this way an end is always clear, and
       never further off than the one cell it needs. */
    /* A head sits in the cell against the box it points at - the same on all four
       sides, which is what makes the three of them read as one hand. The boxes
       stand on whole cells (spaceCards puts them there), so "the cell against the
       edge" is an exact thing: the run ends where the box begins. */
    /* The hair of slack is what keeps an edge that sits exactly ON a cell from
       being rounded to the next one: a box snapped to 11 cells measures 11.0004,
       and a bare ceil() put the head a whole row further out than the one beside
       it. */
    const EDGE = 0.02;
    const above = (y) => (Math.floor(y / ch + EDGE) - 1) * ch;
    const below = (y) => Math.ceil(y / ch - EDGE) * ch;
    const rightOf = (x) => Math.ceil(x / cw - EDGE) * cw;
    let points, labelAt;

    if (edge.elbow) {
      /* The phone leaves by its top or bottom, runs to the laptop's height and
         turns once into the laptop's right side. The upright has to clear the
         laptop, which is as wide as its longest spec line - where it does not,
         the route jogs sideways in the clear band between the two boxes first,
         rather than running down through the box. */
      const up = b.cy < a.cy;
      const start = { x: a.cx, y: up ? above(a.t) : below(a.b) };
      const legX = Math.max(a.cx, b.r + CLEAR * 3);
      const door = { x: rightOf(b.r), y: b.cy };
      if (legX > a.cx + 1) {
        const band = (start.y + (up ? b.b : b.t)) / 2;
        points = [start, { x: a.cx, y: band }, { x: legX, y: band },
                  { x: legX, y: b.cy }, door];
      } else {
        points = [start, { x: a.cx, y: b.cy }, door];
      }
      // On the upright, centred in the clear band between the two boxes.
      const g0 = up ? b.b : a.b, g1 = up ? a.t : b.t;
      labelAt = { x: legX, y: (g0 + g1) / 2 };
    } else {
      /* Straight between two boxes one above the other, a head at each end.
         Both ends stop clear of their box: a head drawn on the edge lands on
         the box's own ground and is not there at all. */
      const upper = a.cy <= b.cy ? a : b, lower = a.cy <= b.cy ? b : a;
      const x = (upper.cx + lower.cx) / 2;
      const first = a.cy <= b.cy ? below(upper.b) : above(lower.t);
      const last = a.cy <= b.cy ? above(lower.t) : below(upper.b);
      points = [{ x, y: first }, { x, y: last }];
      labelAt = { x, y: (upper.b + lower.t) / 2 };
      /* Halfway down a long run is where a box standing beside it is too - the
         phone, between the two laptops - and the word hung off the right of the
         run reached into it. Where a box is in the way, the label goes up into
         the clear stretch between the upper box and that one instead: a quarter
         of the way down it, because the middle of that stretch is where the
         phone's own run carries its label. */
      const reach = edge.label ? Math.max(...[...edge.label.children].map((w) => w.offsetWidth)) : 0;
      const tall = edge.label ? edge.label.firstElementChild?.offsetHeight || 0 : 0;
      for (const other of host.querySelectorAll('.dev-card')) {
        if (other === edge.a || other === edge.b) continue;
        const o = rect(other);
        const across = o.l < x + reach + cw && o.r > x - reach - cw;
        const down = o.t < labelAt.y + tall && o.b > labelAt.y - tall;
        if (across && down) labelAt = { x, y: Math.max(upper.b + tall, upper.b + (o.t - upper.b) / 4) };
      }
    }

    if (!asciiRoutes.has(host)) asciiRoutes.set(host, []);
    asciiRoutes.get(host).push({ points, head: !!edge.head, head2: !!edge.head2 });

    if (edge.label) {
      /* On the middle of the cell the upright is drawn in, not on the line the
         route was solved along. The grid puts a character in whole cells - the
         run lands at (round(x / cw) + 0.5) * cw - so up to half a cell of the
         difference was showing as a wider gap on one side of the label than the
         other. The two words hang the same distance either side of this point. */
      const onCell = (Math.round(labelAt.x / cw) + 0.5) * cw;
      edge.label.style.left = (onCell + (edge.labelDx || 0)) + 'px';
      edge.label.style.top = (labelAt.y + (edge.labelDy || 0)) + 'px';
    }
  }
  for (const [host, routes] of asciiRoutes) paintLines(host.querySelector('.dev-lines'), routes);
}
/* Where the map's outer frame drew its top and bottom rules, in page pixels,
   and how tall a cell was when it did. The hardware frame is set to these, so
   the two stand at the same height and run the same length. */
let siteRule = null;
let siteFrame = null;

function paintMap() {
  if (!linesEl || !mapEl) return;
  const box = mapEl.getBoundingClientRect();
  if (!box.width || !box.height) return;
  const g = gridFor(linesEl);
  if (!g) return;
  /* The groups' frames are a layer of their own, so they can fade with the cards
     when a card opens up while the outer frame - the one the open card fills -
     stays where it is. Same box and type as the outer one, so the same grid. */
  const groupsEl = document.getElementById('mapGroups');
  const gg = (groupsEl && gridFor(groupsEl)) || g;
  let groupTop = null;     // the row the highest group frame's top rule is in

  // Where an element sits inside the map, in the map's own pixels.
  const local = (el) => {
    const q = el.getBoundingClientRect();
    return { l: q.left - box.left, t: q.top - box.top, r: q.right - box.left, b: q.bottom - box.top,
             x: q.left + q.width / 2 - box.left, y: q.top + q.height / 2 - box.top };
  };

  for (const ring of RINGS) {
    let l = Infinity, t = Infinity, r = -Infinity, b = -Infinity;
    for (const el of ring.els) {
      const q = local(el);
      l = Math.min(l, q.l); t = Math.min(t, q.t); r = Math.max(r, q.r); b = Math.max(b, q.b);
    }
    if (!Number.isFinite(l)) continue;
    const grid = ring.full ? g : gg;
    const padX = ring.pad * g.cw, padY = ring.pad * g.ch;
    let top = t - padY, bottom = b + padY;
    if (ring.full && frameBand) {
      /* The outer frame reaches from the row the controls stand on down to just
         above the signature, whatever the cards come to - that is the band the
         hardware panel's frame stands in too, so the two are the same height.
         Its sides stay with its cards: taken all the way to the map's own edge it
         ran through the Home button in one corner and the signature in the other. */
      top = frameBand.top;
      bottom = frameBand.bottom;
    }
    const rect = grid.box({ x: l - padX, y: top }, { x: r + padX, y: bottom });
    if (!ring.full) groupTop = groupTop === null ? rect.r0 : Math.min(groupTop, rect.r0);
    if (ring.full) {
      const pre = linesEl.getBoundingClientRect();
      siteRule = { top: pre.top + rect.r0 * g.ch, bottom: pre.top + rect.r1 * g.ch,
                   ch: g.ch, font: getComputedStyle(linesEl).fontSize };
      // The inside of the frame, on screen - what an opened card grows to fill.
      siteFrame = { left: pre.left + (rect.c0 + 1) * g.cw, right: pre.left + rect.c1 * g.cw,
                    top: pre.top + (rect.r0 + 1) * g.ch, bottom: pre.top + rect.r1 * g.ch,
                    cw: g.cw, ch: g.ch };
    }
    // Under the top line and over the bottom one, rather than written into
    // them: the name is set in the page's own serif and the badges in its mono,
    // and neither fits in a character cell.
    const mid = (rect.c0 + rect.c1 + 1) / 2 * g.cw;
    // Clear of the line rather than across it, so it is measured: the two are
    // set in different faces at different sizes, and neither is a cell tall.
    const put = (el, lineRow, on) => {
      if (!el) return;
      el.style.left = mid + 'px';
      const h = el.getBoundingClientRect().height || g.ch;
      // On the line, or clear above it. The name is engraved into its line - the
      // band between a raised top line and the topmost card is not a name tall -
      // and it carries the ground with it, so the dashes stop either side.
      el.style.top = (on ? lineRow * g.ch + g.ch / 2
                         : lineRow * g.ch - h / 2 - 1) + 'px';
    };
    put(ring.nameEl, rect.r0, true);
    // Engraved into the bottom line for the same reason the name is into the
    // top one: with the frame pulled up clear of the signature, the band under
    // the lowest card is not a line of badges tall.
    put(ring.badgeEl, rect.r1, true);
  }
  g.flush();
  if (gg !== g) gg.flush();

  /* The single repositories have no frame, so the first one is lined up by hand:
     its top rule onto the row the groups' top rules were drawn in. The frames
     are put on whole cells and the card is not, which left it a few pixels off
     whatever margin the stylesheet gave it. */
  const first = mapEl.querySelector('.map-single-first');
  if (first && groupTop !== null) {
    const q = local(first);
    const half = parseFloat(getComputedStyle(first).fontSize) / 2;
    const off = (groupTop * gg.ch + gg.ch / 2) - (q.t + half);
    if (Math.abs(off) > 0.5) {
      const was = parseFloat(getComputedStyle(first).marginTop) || 0;
      first.style.marginTop = (was + off) + 'px';
    }
  }
}

function renderMap() {
  linesEl = document.getElementById('mapLines');
  mapEl = document.getElementById('map');
  const nodes = document.getElementById('mapNodes');

  /* Drawn twice over: initLang() runs before the gate is answered and rebuilds
     the map, then the boot sequence drew it again on top - two full sets of cards, one
     hiding under the other until a drag pulled the top one away. Clearing here
     makes the function safe to call from anywhere. */
  nodes.textContent = '';
  linesEl.textContent = '';
  const groupsEl = document.getElementById('mapGroups');
  if (groupsEl) groupsEl.textContent = '';
  RINGS.length = 0;
  closeDetail(true);

  /* A ring is a record, not a shape: which cards it holds, how much clear space
     to leave round them, and the words to write into its frame. paintMap() draws
     it. The name keeps its link as a bare anchor laid over the letters. */
  const addRing = (els, pad, text, href, badge, full) => {
    let nameEl = null, badgeEl = null;
    if (text) {
      // The name IS the link where there is one - a wrapper would be a second
      // positioned box around a box that positions itself.
      nameEl = document.createElement(href ? 'a' : 'span');
      nameEl.className = 'ring-name ' + (full ? 'ring-name-site' : 'ring-name-group') +
        (href ? ' ring-link' : '');
      // A proper noun in every language, and uppercased here rather than by CSS:
      // `text-transform` follows the page's language, and Turkish turns the i of
      // Constellation into a dotted I.
      nameEl.lang = 'en';
      nameEl.textContent = text.toUpperCase();
      if (href) { nameEl.href = href; nameEl.target = '_blank'; nameEl.rel = 'noopener'; }
      nodes.appendChild(nameEl);
    }
    if (badge) {
      badgeEl = document.createElement('span');
      badgeEl.className = 'ring-badge';
      badgeEl.textContent = badge;
      nodes.appendChild(badgeEl);
    }
    RINGS.push({ els, pad, nameEl, badgeEl, full: !!full });
  };

  /* The phone's columns, drawn: the cards stand in the flow, and a group is a
     frame round its own cards with its name written into the top rule. The
     single repositories have no frame but the outer one, which is the page's. */
  const block = document.createElement('div');
  block.className = 'map-cols';
  nodes.appendChild(block);
  const all = [];
  mapUnits = new Map();
  for (const group of columnsFor(COLUMNS.wide[0]).flat()) {
    const els = group.items.map(makeNode);
    all.push(...els);
    if (group.self) {
      // Loose in their column, but still a set: the first one is lined up with
      // the first card of the frames beside it.
      els[0]?.classList.add('map-single-first');
      mapUnits.set(group.id, els);
      continue;
    }
    const host = document.createElement('div');
    host.className = 'map-group';
    host.append(...els);
    mapUnits.set(group.id, [host]);
    addRing(els, 2, group.name);
  }
  arrangeMap(block, 0);

  addRing(all, MAP_PAD, SELF.title, GH(SELF.repo),
          '[' + t(SELF.lang) + '] [' + t(SELF.private ? 'private' : 'public') + ']', true);

  settle();
}

/* Everything under the bar starts at --bar-h: the hardware panel, the narrow
   list, the signature when it steps up on a phone. The bar's height is whatever
   its controls come out to, and they are sized from the window, so it is
   measured rather than written down - a guess that was too small had the panel
   starting underneath the bar, with the buttons cutting across its top. */
const measureBar = () => {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  const h = Math.round(bar.getBoundingClientRect().height);
  if (h) document.documentElement.style.setProperty('--bar-h', h + 'px');
  // The credits are set from the window, so how much of the right-hand side they
  // take changes with it; the edge strip has to stop above whatever they are.
  const insp = document.querySelector('.gate-insp');
  const ih = insp ? Math.round(insp.getBoundingClientRect().height) : 0;
  if (ih) document.documentElement.style.setProperty('--insp-h', ih + 'px');
};

const settle = () => {
  const root = document.documentElement;
  root.style.setProperty('--dev-w', devW() + 'px');
  // An open rail is as wide as the panel it holds, and that follows the window.
  const rigs = document.getElementById('devices');
  if (rigs && !rigs.hidden && rigs.classList.contains('in') && !narrow()) {
    root.style.setProperty('--rail-right', devRail() + 'px');
  }
  fitBar();       // sizes the row to the window, then measures it
  if (!mapEl) return;
  fitMap(); spaceCards(); redrawLines(); paintMap();
  // The frame sets the panel's own box, so the cards are spaced and the runs
  // solved again against the box it ends up with.
  paintDevFrame(); spaceCards(); redrawLines();
  /* Last, not first: it is judged on the type the boxes were cut to, and that
     is only true of the box the panel ends the pass with. Asked before
     paintDevFrame it read the box from the pass before - which, on the step
     from a phone-shaped window to a wide one, is a different box entirely, and
     a panel that should have stood down stayed out. */
  capSidePanels();
  placeDetail();
};
addEventListener('resize', settle);
// Web fonts and the scrollbar appearing both move things after first paint.
addEventListener('load', settle);

function renderList() {
  const list = document.getElementById('list');
  // Same guard renderMap has: initLang()'s rebuild runs one set, then
  // the boot sequence calls this again on top. renderMap clears its own
  // containers; this did not, so the list came out doubled - invisible while it
  // was display:none, plain once it showed on narrow screens. Clear here so it
  // is safe to call from anywhere.
  list.textContent = '';
  const leafOf = (item) => {
    const leaf = makeNode(item);
    leaf.classList.add('leaf');   // keeps `node`: same box, out of the map's flow
    return leaf;
  };
  /* Two columns on a phone, shared out by COLUMNS.narrow. Each is its own box,
     so the row has exactly two children whatever ends up in them - and on the
     map's side of the breakpoint the whole list is off anyway. */
  /* A name over a group, set the way the names on the map's frames are set. It
     is a link where it stands for a repository, exactly as the ring names are -
     the name IS the link, with no box around it.
     Uppercased by the stylesheet, and `text-transform` follows the element's
     language: in Turkish the i of Pixel and of Constellation comes back dotted.
     Both are proper nouns in every locale, so they are written as ones. */
  const columnName = (text, href) => {
    const el = document.createElement(href ? 'a' : 'span');
    el.className = 'branch-head';
    el.lang = 'en';
    el.textContent = text;
    if (href) { el.href = href; el.target = '_blank'; el.rel = 'noopener'; }
    return el;
  };
  for (const column of columnsFor(COLUMNS.narrow)) {
    const col = document.createElement('div');
    col.className = 'col';
    list.appendChild(col);
    for (const group of column) {
      const box = document.createElement('section');
      box.className = 'branch';
      /* Up on the map the page's own repository is the outer frame - the name
         over everything, with no card of its own. Down here it is the name over
         the single repositories, and it carries the same link. A group has no
         repository of its own, so its name is a name and not a link. */
      box.appendChild(group.self ? columnName(SELF.title, GH(SELF.repo)) : columnName(group.name));
      for (const item of group.items) box.appendChild(leafOf(item));
      col.appendChild(box);
    }
  }
}

/* The phone. Below this the map gives way to the stacked list, the two faces
   cross vertically instead of sideways, and the machines are a page of their own
   rather than a rail beside the map - so several things that are true beside a
   map are not true here. It has to stay the number the stylesheet uses. */
const NARROW = 860;
const narrow = () => matchMedia('(max-width: ' + NARROW + 'px)').matches;

/* A window dragged short under a panel that is already out. Called from
   settle(), so it is re-judged on every resize the way the map is. */
function capSidePanels() {
  const rigs = document.getElementById('devices');
  /* Nothing to stand down on a phone: the panel is a page there, the width of
     the screen, and the stylesheet sizes it. Judged by the rail test it was
     always too narrow, which shut the button and left the machines with no way
     in at all. */
  if (!rigs || narrow()) return;
  /* Only what is standing open is stood down here - asking for it again goes
     through setRail(), which measures for itself. Open, the panel is laid out,
     so the type its boxes were just cut to is the fresh answer and devFits()
     measures nothing of its own. */
  if (rigs.hidden || devFits()) return;
  rigs.hidden = true; rigs.classList.remove('in');
  const btn = document.getElementById('devBtn');
  btn?.classList.remove('on'); btn?.setAttribute('aria-expanded', 'false');
  /* The rail goes with it - the page boots with the panel open, so the reserved
     space has to be given back or the map stays pushed off an empty column. The
     BUTTON stays: on a wide screen it is the way over to the projects as well,
     and the projects are readable at sizes the machines are not. */
  document.documentElement.style.setProperty('--rail-right', '0px');
  // The stage just gave back 450px, and the map was fitted to the stage that
  // still had them. Fit it again here rather than leaving it to the next resize
  // that may never come.
  fitMap(); redrawLines(); paintMap();
}

/* Whether the machines are worth offering at the size the window is now.
   The judgement is the type the boxes would have to be cut to. fitDevType()
   keeps them inside the frame at any height by taking the type down, but under
   the stylesheet's own floor they are inside it and unreadable - and this page
   has said from the start that the machines stand down rather than spill.
   Put away, the panel is `display:none` and nothing in it has a box, so it is
   brought out of sight for the length of the measurement - the same trick
   renderDevices uses to read its own. That is what lets the rail be offered
   again when the window grows: judged on a number left over from the last time
   it was open, it would never come back. */
const DEV_MIN_FS = 8;   // the floor in --dev-fs on .dev-stage

function devFits() {
  const wrap = document.querySelector('.wrap');
  if (wrap && wrap.getBoundingClientRect().width - devRail() < 160) return false;
  const panel = document.getElementById('devices');
  if (panel && panel.hidden) {
    panel.style.visibility = 'hidden';
    panel.hidden = false;
    paintDevFrame();
    spaceCards();
    panel.hidden = true;
    panel.style.visibility = '';
  }
  return !devTypePx || devTypePx >= DEV_MIN_FS;
}

/* Switching language changes every card's text, and card size feeds the ring
   geometry, so the map is thrown away and drawn again rather than patched. The
   listeners above are registered once, outside, so this cannot stack them. */
function rebuildMap() {
  if (!document.getElementById('mapNodes')) return;
  renderMap();
  renderList();     // clears itself now
  renderDevices();
}

/* ------------------------------------------------------------------ drag */

/* The cards were draggable, with a spring back to their places. They are part
   of a drawing now rather than furniture on a board, so the whole follow loop,
   the pointer handlers and the spring have gone with the idea. */

/* ----------------------------------------------------------------- rigs */

/* What runs where, and how each one reaches the others.
 *
 * Model names and part numbers only - nothing that identifies a particular unit.
 * No serial numbers, no IMEI, no MAC, no SKU strings, no phone numbers, no
 * carriers. A model number says "this kind of machine"; a serial says "this
 * machine", and the second one does not belong on a public page.
 */
/* A triangle, not a column: two boxes down the left and the phone pushed out to
   the right, so the three links draw the three sides. `at.x` is a card centre;
   spaceCards() shares out the y and leaves the x alone, so these x values are
   what bends the straight line into a triangle. Array order is top-to-bottom,
   which is why the phone sits between the two laptops. */
/* `at.x` is a card's centre across the panel. The two laptops stand at .34 and
   the phone at .76: near enough the middle for a 34-character box to keep both
   its edges inside the panel, and far enough apart that the phone's run has room
   to turn into a laptop's side rather than arriving along its own upright. The
   type is set from the panel's own width (see .dev-card), so those two numbers
   hold at any size the panel is drawn at, on a phone or beside the map. */
const DEVICES = [
  {
    key: 'go', at: { x: 34, y: 12 }, w: '56%',
    name: 'Lenovo Legion Go',
    subKey: 'handheld', sub: '2023',
    specs: ['AMD Ryzen Z1 Extreme · 8C/16T', 'Radeon RDNA 3 (integrated)',
            '16 GB LPDDR5X-7500', '512 GB NVMe', '8.8" 2560×1600', 'Windows 11'],
  },
  {
    key: 'phone', at: { x: 76, y: 50 }, w: '42%',
    name: 'Motorola g23',
    subKey: 'phone', sub: '2023',
    specs: ['MediaTek Helio G85', '8 GB RAM · 128 GB', '6.5" 1600×720 90 Hz', 'Android 14'],
  },
  {
    key: 'acer', at: { x: 34, y: 88 }, w: '56%',
    name: 'Acer Swift 3',
    sub: 'SF314-511 · 2021',
    specs: ['Intel Core i5-1135G7 · 4C/8T', 'Iris Xe (integrated)',
            '16 GB LPDDR4X-4267', '14" 1920×1080',
            'SATA SSD', '400 GB Windows 11 · 75 GB Mint'],
  },
];

/* The two laptops reach each other both ways (`both`), so the left side is
   double-headed. The phone only ever reaches OUT - you SSH from it, not into it
   - so its two sides are one-way (`arrow`), the head on the laptop. All three
   sides ride the same tailnet, so they carry the one label. */
const LINKS = [
  { from: 'phone', to: 'go', label: 'termius|tailscale', arrow: true, elbow: true },
  { from: 'phone', to: 'acer', label: 'termius|tailscale', arrow: true, elbow: true },
  { from: 'go', to: 'acer', label: 'termius|tailscale', both: true },
];

/* The type the boxes were last cut to, in px. Nothing on this page scrolls, so
   a window too short for the machines has to be answered somehow: they are cut
   to fit down to the point they can still be read, and stand down under it -
   see devFits(). The panel's own height says nothing about this, which is why
   the height it was measured at is not kept any more: it is stretched between a
   top and a bottom, so it is always exactly the room there is. */
let devTypePx = 0;

const GLIDE_MS = 560;

/* The panel slides in from the right and the map gives way to the left.

   `change` is run in the middle on purpose. A transition only animates a value
   that changes while the transition is already in effect, so the class carrying
   it has to be on the element - and read back once, to force the style - BEFORE
   anything moves. Arm it afterwards and every value simply jumps.

   The rest is keeping what is drawn from a measurement honest while the sizes
   are still moving: the connectors, the rings, and the notch the outer ring
   cuts in the top bar. */
function glide(change) {
  const wrap = document.getElementById('constellation');
  if (!wrap) { change(); return; }
  wrap.classList.add('gliding');
  wrap.getBoundingClientRect();
  change();
  const until = performance.now() + GLIDE_MS;
  const step = () => {
    /* The panel's height is being animated under the boxes, so they are shared
       out again on every frame - left where they were, they held still through
       the crossing and jumped a cell when it ended. */
    spaceCards();
    redrawLines();
    paintMap();
    // The panel's box is the map's frame; solved once at the end of the glide,
    // it slid in at whatever width it had before and jumped when it landed.
    paintDevFrame();
    if (performance.now() < until) requestAnimationFrame(step);
    // Off the grid for the length of the crossing (see spaceCards), so the last
    // word is a settled one: the class comes off first, then everything is set
    // against the grid one more time.
    else { wrap.classList.remove('gliding'); settle(); }
  };
  requestAnimationFrame(step);
}

/* Opening and closing the rail lives in one place, so the state the page boots
   into and the state the button sets are the same code. */
function setRail(open) {
  const btn = document.getElementById('devBtn');
  const panel = document.getElementById('devices');
  if (!panel) return;
  // Too short a window for the boxes to be read: the button still crosses to the
  // map - it is the projects' way over too - it just does not bring the rail.
  if (open && !narrow() && !devFits()) open = false;
  {
    // No pressed state on the button: the rail is a fixture of the map, not
    // something you switch on, so a lit button would just be lit forever.
    if (btn) btn.setAttribute('aria-expanded', String(open));
    /* On a phone the machines and the projects are two pages in the one box, and
       both ride up together when the machines are asked for from the sky. The
       class is what lets the stylesheet stand the list down while they are up,
       so its cards are not showing underneath on the way. */
    document.body.classList.toggle('on-hw', open);
    if (open) {
      // Out of `hidden` before the glide is armed, and measured once, so the
      // browser has the off-screen starting position to animate FROM. Leave it
      // to the same frame as the class and there is no slide, just an appearance.
      panel.hidden = false;
      panel.getBoundingClientRect();
    }
    glide(() => {
      // Opening reserves a rail on the right and the map slides off it; closing
      // gives the space back and the ring grows over the bar again.
      document.documentElement.style.setProperty('--rail-right', open ? devRail() + 'px' : '0px');
      panel.classList.toggle('in', open);
      settle();
    });
    if (open) {
      redrawLines();
    } else {
      // Laid out only while open, so it stays in the flow until it has left.
      setTimeout(() => {
        if (!panel.classList.contains('in')) panel.hidden = true;
      }, GLIDE_MS);
    }
  }
}

function initDevices() {
  const panel = document.getElementById('devices');
  if (!panel) return;
  /* One direction: the machines, and the map they belong to. The rail is not
     something to switch off again - pressing this on the map you are already
     looking at should do nothing rather than slide it away. Two buttons ask for
     it: the one pill that carries both on a wide screen, and Hardware's own pill
     on a phone, where it is a page rather than a rail. */
  const machines = () => {
    const alreadyOut = !panel.hidden && panel.classList.contains('in');
    showView('map');
    if (!alreadyOut) setRail(true);
  };
  for (const id of ['devBtn', 'hwBtn']) {
    document.getElementById(id)?.addEventListener('click', machines);
  }
  /* Projects is the map on its own. On a phone the machines are a page standing
     over it, so asking for the projects is also asking for that page to go. */
  document.getElementById('projBtn')?.addEventListener('click', () => {
    showView('map');
    if (narrow()) setRail(false);
  });
}

/* The hardware panel is a little map of its own: three draggable boxes in one
   frame, joined by the same connector engine as the big one - same follow loop,
   same spring back. Its own coordinate space (DW x DH) so the two never mix. */
const DW = 100, DH = 100;
/* Panel width, and the rail it reserves on the map's right. One place, so the
   CSS `.devices` width, the rail the map slides off, and the room test all
   agree - keep the CSS width equal to DEV_W. */
const DEV_W = 430;
/* Wider on a screen past 1080p, by the same factor the type grows by, so the
   boxes keep their share of the panel. Written to --dev-w for the stylesheet. */
const devW = () => Math.round(DEV_W * bigScreen());
const devRail = () => devW() + 20;
const DEV_COLS = 30;   // inside the frame, in characters

/* The hardware panel wears a frame like the map's, and it is the panel's own
   box: the panel is set to the height the map's outer frame drew itself at, so
   the two line up and are the same length, and its left side is stood under the
   button that opens it rather than further out than it. One cell means the same
   thing in both grids - the frame is given the map's own type size - so the
   rules land on the same pixels rather than a cell either side of them. */
function paintDevFrame() {
  const panel = document.getElementById('devices');
  const frame = panel && panel.querySelector('.dev-frame');
  const host = panel && panel.offsetParent;
  if (!panel || !frame || !host || panel.hidden) return;
  if (narrow()) {
    /* The stylesheet owns the box on a phone: the panel is a page across the
       whole screen rather than a column stood under its own button and cut to
       the height of the map's frame - and there is no map down here to be level
       with, so `siteRule` is never set either. Whatever the branch below wrote
       is handed back, or a window dragged narrow would keep a rail's box.
       Nothing is drawn either: the frame round the edge of the screen and the
       word over it are both off down here. */
    panel.style.left = panel.style.right = panel.style.top = panel.style.bottom = panel.style.width = '';
    frame.style.fontSize = '';
    const bare = panel.querySelector('.dev-stage');
    if (bare) bare.style.marginTop = bare.style.marginBottom = '';
    return;
  }
  if (!siteRule) return;
  const hb = host.getBoundingClientRect();
  const btn = document.getElementById('devBtn');
  /* Sideways, in layout pixels rather than screen ones. The face this panel
     belongs to is slid off to the right while the planet is up, and the bar it
     is being lined up with is fixed and does not travel with it - measured on
     screen, the offset came out to whatever the slide was, and the panel was
     dragged back over the planet by it. Where a box sits in the layout is the
     same on both faces, which is what `left` wants. */
  const layoutX = (el) => { let x = 0; for (let n = el; n; n = n.offsetParent) x += n.offsetLeft; return x; };
  const hostX = layoutX(host);
  // The frame is drawn in the map's own type size, and the cell has to be known
  // before the box is set - the width below is a whole number of them.
  frame.style.fontSize = siteRule.font;
  if (btn && !btn.hidden) panel.style.left = (layoutX(btn) - hostX) + 'px';
  panel.style.width = 'auto';
  panel.style.right = '';
  /* The panel is fitted to the corner it lives in rather than to the map: its top
     rule at the underside of the last box in the row of controls, and its
     right-hand rule under that box's right edge. The width is then set to a whole
     number of cells, because the grid draws its rectangle in whole ones and keeps
     the remainder - left to the stylesheet's own right edge, the rule came to
     rest most of a cell short of the box above it. */
  const lang = document.querySelector('.topbar-right .lang-btn');
  const cell = cellSize(frame);
  if (lang && cell) {
    /* Lined up on the STROKE, not on the box around it. An upright is inked in
       the middle of its cell, and these two boxes are set in different sizes -
       the bar's is the corner type, the frame's is the map's - so with their
       edges level the two lines still stood four pixels apart. Where the bar's
       last upright is inked is where the frame's right-hand one has to be, and
       the panel's edge is worked back from that. */
    const bar = barInk(lang), rule = barInk(frame);
    const barRight = layoutX(lang) + lang.offsetWidth - hostX;
    const inkAt = barRight - bar.advance + bar.right;         // the bar's own stroke
    const right = inkAt + rule.advance - rule.right;          // the panel's edge that puts ours there
    const left = parseFloat(panel.style.left) || 0;
    const cols = Math.max(1, Math.round((right - left) / cell.cw));
    panel.style.left = (right - cols * cell.cw) + 'px';
    panel.style.right = (host.offsetWidth - right) + 'px';
  }
  // On the map frame's own top rule, so the two are level to the pixel.
  const top = siteRule.top;
  panel.style.top = (top - hb.top) + 'px';
  /* The bottom rule is a cell tall like any other row, so the box has to hold
     it - and half a cell over, because the grid takes whole rows and a box
     exactly 52 cells deep can measure as 51. The slack is under the last rule,
     where nothing is drawn. */
  panel.style.bottom = (hb.bottom - (siteRule.bottom + siteRule.ch * 1.5)) + 'px';

  const g = gridFor(frame);
  if (!g) return;
  // Cut again only when the grid itself changed: this runs on every frame of a
  // crossing, and rewriting the same rectangle sixty times a second is work for
  // nothing.
  const sig = g.cols + 'x' + g.rows + '@' + getComputedStyle(frame).fontSize;
  if (frame.dataset.sig !== sig) {
    frame.dataset.sig = sig;
    frame.textContent = '';
    g.box({ x: 0, y: 0 }, { x: (g.cols - 1) * g.cw, y: (g.rows - 1) * g.ch });
    g.flush();
  }
  // The name is engraved into the top rule, the way the map's names are.
  const head = panel.querySelector('.dev-head');
  if (head) {
    head.style.left = (g.cols * g.cw / 2) + 'px';
    head.style.top = (g.ch / 2) + 'px';
  }
  /* The boxes are shared out inside the stage, and the stage has to stop where
     the frame's rules do. The frame is drawn in the map's cell, not the panel's,
     and its bottom rule stands in the last WHOLE row - which leaves anything from
     one to two cells between that rule and the foot of the panel. Sat on a margin
     of its own the stage ran past it, and the lowest box crossed the rule at some
     window sizes and not at others. */
  const stage = panel.querySelector('.dev-stage');
  if (stage) {
    const tall = frame.getBoundingClientRect().height;
    stage.style.marginTop = (g.ch + 4) + 'px';
    stage.style.marginBottom = (tall - (g.rows - 1) * g.ch + 4) + 'px';
  }
}

function renderDevices() {
  const box = document.getElementById('devices');
  if (!box) return;
  const stageOld = box.querySelector('.dev-stage');
  for (let i = EDGES.length - 1; i >= 0; i--) {
    if (EDGES[i].host === stageOld) EDGES.splice(i, 1);
  }
  box.textContent = '';
  // First, so everything else is drawn over it.
  const frame = document.createElement('pre');
  frame.className = 'dev-frame';
  frame.setAttribute('aria-hidden', 'true');
  box.appendChild(frame);

  const head = document.createElement('div');
  head.className = 'dev-head';
  head.textContent = t('hardware');
  box.appendChild(head);

  const stage = document.createElement('div');
  stage.className = 'dev-stage';
  const lines = document.createElement('pre');
  lines.className = 'dev-lines';
  lines.setAttribute('aria-hidden', 'true');
  const nodes = document.createElement('div');
  nodes.className = 'dev-nodes';
  stage.append(lines, nodes);
  box.appendChild(stage);

  /* The text first, then the widths, then the cards: a box is as wide as its own
     longest line - the phone's specs are short and a shared width left it half
     empty - but boxes that name the same width class are cut to the widest of
     them. The two laptops sit one above the other, so a single character
     between them shows twice: once in the frames, and again in where their
     arrowheads land, because a head is rounded to the grid from the box's own
     edge. */
  const drafts = DEVICES.filter((item) => item.name).map((item) => {
    // A category ahead of the year translates; a model number does not. Specs
    // are model names and numbers except for the one English word inside them.
    const sub = item.subKey ? t(item.subKey) + ' · ' + item.sub : item.sub;
    const specs = padBlock(item.specs.map(
      (line) => line.replace('(integrated)', '(' + t('integrated') + ')')));
    const lines = [...wrapText(item.name, DEV_COLS), ...wrapText(sub, DEV_COLS), '', ...specs];
    // Plus a space either side, so the text is not up against the frame.
    const cols = Math.min(DEV_COLS, lines.reduce((n, l) => Math.max(n, l.length), 0)) + 2;
    return { item, lines, cols };
  });
  const widest = {};
  for (const d of drafts) widest[d.item.w] = Math.max(widest[d.item.w] || 0, d.cols);

  const made = {};
  for (const { item, lines, cols } of drafts) {
    const card = document.createElement('div');
    card.className = 'dev-card';
    card.style.left = item.at.x + '%';
    card.style.top = item.at.y + '%';
    // Where across the panel this box belongs, kept on the box itself: spaceCards
    // writes pixels, and without the share to work from it would be re-snapping
    // whatever it wrote last time instead of the place the box is meant to be.
    card.dataset.across = item.at.x;
    // spaceCards centres the three by height; a box can ask to ride a few px off
    // that (the phone reads better a touch below the go/acer midline).
    if (item.nudge) card.dataset.nudge = item.nudge;
    card.textContent = asciiBox(lines, Math.max(cols, widest[item.w] || 0));
    nodes.appendChild(card);
    made[item.key] = card;
  }

  for (const link of LINKS) {
    // A shape of its own rather than a marker - see redrawLines for why.
    // `both` puts a head on each end; `arrow` only on the `to` end.
    const head = !!(link.arrow || link.both);
    const head2 = !!link.both;
    // The label is HTML, not SVG text, so it can wear the same frame the boxes
    // do. redrawLines() moves it with the line.
    /* Two words with a gap between them, not one string with a bar in it. The
       label is anchored ON the run and the words are hung either side of that
       point, so what shows between them is the run's own upright - the label
       does not have to draw one, or be nudged until its own lines up. */
    const label = document.createElement('span');
    label.className = 'dev-label';
    const parts = link.label.split('|');
    const left = document.createElement('span');
    left.className = 'dev-word l';
    left.textContent = parts[0];
    const right = document.createElement('span');
    right.className = 'dev-word r';
    right.textContent = parts[1] || '';
    label.append(left, right);
    nodes.appendChild(label);
    EDGES.push({ a: made[link.from], b: made[link.to], ascii: true, head, head2, label,
                 elbow: link.elbow, host: stage, w: DW, h: DH,
                 labelDx: link.dx || 0, labelDy: link.dy || 0 });
  }

  // Laid out for the length of one sharing-out, so the boxes have their places
  // and their type before anything asks for them: [hidden] is display:none, and
  // nothing inside it can be measured.
  const wasHidden = box.hidden;
  box.hidden = false;
  spaceCards();
  box.hidden = wasHidden;
  redrawLines();
}

/* Even spacing between the boxes. The percentages in DEVICES cannot do this on
   their own: the boxes are different heights - and change height again in
   another language - so equal centres still leave uneven gaps. Measure the
   heights, share out what is left.

   The gaps between boxes and the margins at the ends are not the same number on
   purpose: a gap has to hold a link label, an end holds nothing. So the ends
   take the inset below when there is room for it and give it up when there is
   not - a short window costs the ends their air before it costs a label its
   place. */
const DEV_EDGE = 10;
const DEV_LABEL_AIR = 4;                     // clearance left round a label
/* The stage's height last time the boxes were shared out. Whether it has moved
   since is what says if the grid can be used - see spaceCards. */
let devStageH = 0;

/* Where an upright's stroke falls inside its own cell, in the face and size an
   element is set in: how wide the cell is, and how far the ink reaches from the
   pen's own starting point. Two boxes drawn in different sizes line up on their
   strokes, not on their edges - see paintDevFrame. */
function barInk(el) {
  const cs = getComputedStyle(el);
  const pen = (barInk.pen ||= document.createElement('canvas').getContext('2d'));
  pen.font = cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
  const m = pen.measureText('|');
  return { advance: m.width, right: m.actualBoundingBoxRight };
}

/* One cell of the grid the runs are drawn into. The boxes are set against it, so
   that a head standing in the cell beside a box is the same distance off it on
   every side and in every box. */
function cellSize(pre) {
  if (!pre) return null;
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
  probe.textContent = '0'.repeat(40);
  pre.appendChild(probe);
  const box = probe.getBoundingClientRect();
  probe.remove();
  return box.width && box.height ? { cw: box.width / 40, ch: box.height } : null;
}

/* The type in the panel is set from the window, and the window cannot know how
   tall the boxes come to: that is how many lines each of them wraps to, which
   changes with the language. On a window short for its width the stack was
   taller than the stage, the sharing below gave up, and the boxes were left on
   the shares the stylesheet gives them - which stood the last one through the
   frame's bottom rule, and on a phone through the bottom of the screen.

   So the type comes down by exactly what the stack is over. Everything in the
   panel is set from the one custom property, so the boxes, the runs and the
   labels all come down together and the runs still meet the boxes they join.
   One pass lands it: every height in here is a multiple of the type size,
   except the fixed air round a label, which is taken off the room first. */
function fitDevType(stage, cards, height) {
  // Back to the size the window asks for before measuring, or a window that
  // grows again would keep the size the smaller one was cut to.
  stage.style.removeProperty('--dev-fs');
  const gaps = cards.length - 1;
  const word = stage.querySelector('.dev-word');
  const air = DEV_LABEL_AIR * gaps;                    // does not follow the type
  const stack = cards.reduce((n, c) => n + c.getBoundingClientRect().height, 0)
              + (word ? word.offsetHeight : 0) * gaps; // does
  const base = parseFloat(getComputedStyle(cards[0]).fontSize);
  // What it came to either way: devFits() is judged on this, and the window's
  // own size is the answer whenever nothing had to be cut.
  devTypePx = base || 0;
  if (!stack || !base || stack + air <= height) return;
  devTypePx = Math.max(1, base * (height - air) / stack);
  stage.style.setProperty('--dev-fs', devTypePx + 'px');
}

function spaceCards() {
  const stage = document.querySelector('.dev-stage');
  if (!stage) return;
  const height = stage.clientHeight;
  const cards = [...stage.querySelectorAll('.dev-card')];
  if (!height || cards.length < 2) return;
  // Cut to the room there is before anything is measured against it.
  fitDevType(stage, cards, height);
  // The real height, not the rounded one: a box is a whole number of cells and
  // offsetHeight loses the fraction, which the spacing below then carries.
  const tall = cards.map(c => c.getBoundingClientRect().height);
  const total = tall.reduce((a, b) => a + b, 0);
  // The label itself is a point with no height now; the room a label needs is
  // the height of one of its words.
  const word = stage.querySelector('.dev-word');
  const need = ((word ? word.offsetHeight : 0) + DEV_LABEL_AIR) * (cards.length - 1);
  const edge = Math.max(0, Math.min(DEV_EDGE, (height - total - need) / 2));
  const free = height - total - edge * 2;
  if (free < 0) return;                      // fitDevType above is what keeps this off
  let gap = free / (cards.length - 1);
  /* Set against the grid the runs are drawn into: a box that starts on a whole
     cell ends on one too - it is a whole number of lines tall - so every head has
     the same clearance from the box it points at, on all four sides. The gap
     between boxes is rounded DOWN to whole cells and the first box's inset with
     it: rounded to the nearest, the three of them could add up to more than the
     stage and the last one hung out of the bottom of the panel.
     Not while the panel is moving, though. Its height is animated, so the boxes
     are re-spaced on every frame of a crossing, and snapping each one had them
     stepping a whole cell at a time - see glide(). */
  /* On the grid, unless a crossing is under way AND the stage is changing height
     with it. Beside the map the panel's height is animated, so the shares move
     from frame to frame and snapping each one had the boxes stepping a cell at a
     time; on a phone the panel slides on a transform and its height never moves,
     so they are on the grid from the first frame and nothing shifts when the
     crossing lands. At rest it always snaps - the panel's own box is settled
     between the two passes of a settle, and testing the height alone had the
     second pass reading a height the first one had just changed. */
  const cell = cellSize(stage.querySelector('.dev-lines'));
  const crossing = document.getElementById('constellation')?.classList.contains('gliding');
  const steady = !crossing || Math.abs(height - devStageH) < 0.5;
  devStageH = height;
  const grid = steady && cell ? cell : null;
  let y = edge;
  if (grid) {
    gap = Math.floor(gap / grid.ch) * grid.ch;
    /* What the whole column comes to once the gaps are whole cells, centred in
       what there is. Started at the top inset instead, every cell the gaps gave
       up piled at the bottom - the first box stood against the frame's top rule
       and the last one had an empty band under it. */
    const stack = total + gap * (cards.length - 1);
    const slack = Math.max(0, height - stack);
    y = Math.min(Math.round(slack / 2 / grid.ch), Math.floor(slack / grid.ch)) * grid.ch;
  }
  const stageBox = stage.getBoundingClientRect();
  cards.forEach((card, i) => {
    // The nudge shifts only where this card is drawn, not the running cursor, so
    // the boxes below it keep their places and its own gaps trade instead.
    const nudge = parseFloat(card.dataset.nudge) || 0;
    // In pixels, not a share of the stage: a percentage is resolved against a
    // height that has already been rounded, and the box came to rest a fraction
    // of a cell off the grid it was just snapped to.
    card.style.top = (y + tall[i] / 2 + nudge) + 'px';
    if (grid) {
      /* Sideways too, so the head that arrives in a box's side stands the same
         distance off it as the ones that arrive at its top and bottom - and held
         inside the stage, because rounding to the nearest column can put a box
         that was already against the edge over the frame's own rule.
         Worked out from the share of the panel the box is meant to stand at, not
         from where it is standing now: re-snapping its own last answer, a box
         walked a little further off with every change of size and never came
         back. */
      const box = card.getBoundingClientRect();
      const across = parseFloat(card.dataset.across);
      const mid = Number.isFinite(across) ? (across / 100) * stageBox.width : box.left - stageBox.left + box.width / 2;
      const room = Math.floor((stageBox.width - box.width) / grid.cw) * grid.cw;
      const want = Math.round((mid - box.width / 2) / grid.cw) * grid.cw;
      card.style.left = (Math.max(0, Math.min(want, room)) + box.width / 2) + 'px';
    }
    y += tall[i] + gap;
  });
}

/* ---------------------------------------------------------------- detail */

/* A card opened up. The box grows from the card to just inside the outer frame
   - the whole list on a phone - while every other card and the groups' frames
   fade out; the stars stay showing through it, because it has no ground of its
   own. It is drawn the way every other box here is, character by character, and
   redrawn on each frame of the grow so its rules stay whole at every size. */
let detail = null;      // { el, frame, card, item, shown }
const DETAIL_MS = 520;

function detailText(item) {
  const entry = DETAILS[item.repo];
  return (entry && (entry[LANG] || entry.en)) || [t(item.desc)];
}

/* Where the box goes, in the coordinates of the face it lives in. */
function detailTarget() {
  const wrap = document.getElementById('constellation');
  const w = wrap.getBoundingClientRect();
  if (narrow()) {
    const bar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar-h')) || 56;
    const pad = Math.max(10, innerWidth * .03);
    return { left: pad - w.left, top: bar + 6 - w.top,
             width: innerWidth - pad * 2, height: innerHeight - bar - 6 - pad };
  }
  if (!siteFrame) return null;
  /* Two cells in from the frame's rules at the sides and the foot - inside them,
     not on them - and three under the top one, which carries the site's name
     engraved in it: any closer and the open card's own name ran into it. */
  const f = siteFrame;
  return { left: f.left + f.cw * 2 - w.left, top: f.top + f.ch * 3 - w.top,
           width: f.right - f.left - f.cw * 4, height: f.bottom - f.top - f.ch * 5 };
}

function rectOf(el) {
  const w = document.getElementById('constellation').getBoundingClientRect();
  const q = el.getBoundingClientRect();
  return { left: q.left - w.left, top: q.top - w.top, width: q.width, height: q.height };
}

function setRect(el, r) {
  el.style.left = r.left + 'px'; el.style.top = r.top + 'px';
  el.style.width = r.width + 'px'; el.style.height = r.height + 'px';
}

function drawDetailFrame() {
  if (!detail) return;
  const g = gridFor(detail.frame);
  if (!g) return;
  g.box({ x: 0, y: 0 }, { x: (g.cols - 1) * g.cw, y: (g.rows - 1) * g.ch });
  g.flush();
  const name = detail.el.querySelector('.detail-name');
  if (name) { name.style.left = (g.cols * g.cw / 2) + 'px'; name.style.top = (g.ch / 2) + 'px'; }
}

/* Redrawn on every frame for as long as the box is changing size. */
function animateDetailFrame(ms) {
  const until = performance.now() + ms;
  const step = () => {
    drawDetailFrame();
    if (detail && performance.now() < until) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* A link drawn as a box, like the controls in the corners. */
function detailLink(label, href) {
  const a = document.createElement('a');
  a.className = 'detail-link';
  a.href = href; a.target = '_blank'; a.rel = 'noopener';
  a.textContent = asciiBox([label], label.length + 2);
  return a;
}

function openDetail(item, card) {
  closeDetail(true);
  const wrap = document.getElementById('constellation');
  const to = detailTarget();
  if (!wrap || !to) { window.open(GH(item.repo), '_blank', 'noopener'); return; }

  const el = document.createElement('section');
  el.className = 'detail';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', item.title);
  // In the type of the card it grows out of, so at the first frame it IS the card.
  el.style.fontSize = getComputedStyle(card).fontSize;

  const frame = document.createElement('pre');
  frame.className = 'detail-frame';
  frame.setAttribute('aria-hidden', 'true');

  const name = document.createElement('div');
  name.className = 'detail-name';
  name.lang = 'en';
  name.textContent = item.title.toUpperCase();

  const body = document.createElement('div');
  body.className = 'detail-body';
  const badges = document.createElement('p');
  badges.className = 'detail-badges';
  badges.textContent = [item.lang && '[' + t(item.lang) + ']',
                        '[' + (item.private ? t('private') : t('public')) + ']',
                        item.live && '[' + t('live') + ']'].filter(Boolean).join(' ');
  body.appendChild(badges);
  for (const para of detailText(item)) {
    const p = document.createElement('p');
    p.className = 'detail-text';
    p.textContent = para;
    body.appendChild(p);
  }
  const links = document.createElement('div');
  links.className = 'detail-links';
  links.appendChild(detailLink(t('onGithub'), GH(item.repo)));
  if (item.live) links.appendChild(detailLink(t('openLive'), item.live));
  body.appendChild(links);

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'detail-close';
  close.setAttribute('aria-label', t('close'));
  close.textContent = asciiBox(['x'], 3);
  close.addEventListener('click', (event) => closeDetail(false, event.detail === 0));

  el.append(frame, name, body, close);
  setRect(el, rectOf(card));
  wrap.appendChild(el);
  detail = { el, frame, card, item, shown: false };
  drawDetailFrame();

  el.getBoundingClientRect();          // the start has to be laid out to be animated from
  el.classList.add('moving');
  document.body.classList.add('detail-open');
  setRect(el, to);
  animateDetailFrame(DETAIL_MS + 60);
  setTimeout(() => {
    if (detail?.el !== el) return;
    el.classList.remove('moving');
    el.classList.add('shown');
    detail.shown = true;
    drawDetailFrame();
    close.focus({ preventScroll: true });
  }, DETAIL_MS);
}

/* Back into the card it came out of, and the rest fades back in. `now` drops it
   without the animation - a language change, a crossing to the other face. */
function closeDetail(now, keyboard) {
  if (!detail) return;
  const { el, card } = detail;
  detail = null;
  document.body.classList.remove('detail-open');
  if (now || !card.isConnected) { el.remove(); return; }
  el.classList.remove('shown');
  el.classList.add('moving', 'leaving');
  setRect(el, rectOf(card));
  const back = { el, frame: el.querySelector('.detail-frame') };
  const until = performance.now() + DETAIL_MS + 60;
  const step = () => {
    const g = gridFor(back.frame);
    if (g) { g.box({ x: 0, y: 0 }, { x: (g.cols - 1) * g.cw, y: (g.rows - 1) * g.ch }); g.flush(); }
    if (performance.now() < until) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  setTimeout(() => el.remove(), DETAIL_MS + 40);
  // Focus goes back to the card only for the keyboard; after a click it would
  // just leave the browser's focus ring standing round the card.
  if (keyboard) card.focus?.({ preventScroll: true });
}

/* A window resized under an open box: straight to its new place, no animation. */
function placeDetail() {
  if (!detail || !detail.shown) return;
  const to = detailTarget();
  if (!to) return;
  setRect(detail.el, to);
  drawDetailFrame();
}

document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDetail(false, true); });
/* A click on the frame's empty ground, outside the box, puts it away too. */
document.addEventListener('click', (event) => {
  if (!detail || !detail.shown) return;
  if (detail.el.contains(event.target) || event.target.closest('.topbar, .node, .lang-pick')) return;
  closeDetail();
});

/* ------------------------------------------------------------------ gate */

/* One page, two faces. Neither is thrown away when the other is up - the planet
   keeps its place and the map keeps its layout - so crossing over is a swap, not
   a rebuild. The map measures nothing while it is away, though, so it is laid
   out again on the way back. */
function showView(name) {
  const saturn = name === 'saturn';
  const gate = document.getElementById('gate');
  const wrap = document.getElementById('constellation');
  /* Both faces stay laid out and slide past each other - the class is the whole
     switch, the transforms are in the stylesheet. `inert` is what actually takes
     the face that has left out of reach; it cannot be `hidden`, because
     display:none has nothing to animate from. */
  if (saturn) closeDetail(true);
  document.body.classList.toggle('on-saturn', saturn);
  gate.inert = !saturn;
  wrap.inert = saturn;
  document.getElementById('viewBtn')?.setAttribute('aria-pressed', String(saturn));
  // The site's name is on show with the planet only, so whether it has room in
  // the row is judged again now it is.
  fitBar();
  /* Before the slide, not after it: the panel's box is worked out in layout
     pixels, so it is as true on the face that is leaving as on the one arriving
     - and set now, the panel crosses at the size it will land at instead of
     changing width once it gets there. */
  paintDevFrame();
  // The map measures itself in viewport coordinates, and it is mid-slide right
  // now; let it come to rest first.
  if (!saturn) setTimeout(settle, GLIDE_MS + 40);
  // The sky's own loops idle while it is away; this is their cue to catch up.
  document.dispatchEvent(new Event('hdh:view'));
}

/* ---------------------------------------------------------------- saturn */

/* A Saturn drawn the way the spinning-donut demo draws a torus: sample two
   surfaces - a banded globe and a flat ring with a Cassini gap - rotate the whole
   body, project each point to a character cell, keep the nearest at each cell with
   one shared z-buffer (so the ring passes in front of the globe's underside and
   behind its top), and pick a glyph by how much the point faces a fixed light.
   The body is pitched a fixed amount, then turned continuously about the vertical
   so the whole thing rotates the way the donut does - the ring sweeps open and
   shut and the globe's bands wheel round with it. Reduced-motion holds one frame. */
function spinSaturn(pre) {
  if (!pre) return;
  const CW = 98, CH = 30;
  const LUM = '.,-~:;=!*#$@';                 // dark to light
  let lx = -0.5, ly = 0.5, lz = -0.7;         // light in screen space, normalised below
  const ll = Math.hypot(lx, ly, lz); lx /= ll; ly /= ll; lz /= ll;
  const Rs = 1.4;                             // globe radius
  const Rr1 = 2.05, Rr2 = 2.68;              // ring inner / outer (a wide band, well past the globe)
  const G0 = 2.34, G1 = 2.44;                 // Cassini gap
  const TILT = 0.28, K2 = 6.2, K1 = 44;       // low tilt: the ring runs through the globe's middle
  const ROLL = 0.262;                         // ~15 deg roll about the view axis, so the rings slant
  const RING_LIFT = 0.3;                       // nudge the ring up so it crosses the globe's middle, not low
  // sinT negated: we look at the ring from a touch above, so its far side runs
  // behind the globe's top and its near side crosses in front of the bottom.
  const cosT = Math.cos(TILT), sinT = -Math.sin(TILT);
  const cosR = Math.cos(ROLL), sinR = Math.sin(ROLL);
  // the ring's fixed normal, tilted then rolled, against the light
  const ringL = Math.abs((-cosT * sinR) * lx + (cosT * cosR) * ly + sinT * lz);
  const glyph = (s) => LUM[Math.max(0, Math.min(LUM.length - 1, Math.floor(s * LUM.length)))];

  function render(spin) {
    const out = new Array(CW * CH).fill(' ');
    const zb = new Float32Array(CW * CH);      // 0 = nothing yet (any real depth beats it)
    const put = (px, py, pz, shade) => {
      const ooz = 1 / (K2 + pz);
      const xp = Math.round(CW / 2 + K1 * ooz * px * 2);   // x doubled: char cells are ~half as wide as tall
      const yp = Math.round(CH / 2 - K1 * ooz * py);
      if (xp < 0 || xp >= CW || yp < 0 || yp >= CH) return;
      const i = xp + yp * CW;
      if (ooz <= zb[i]) return;
      zb[i] = ooz; out[i] = glyph(shade);
    };

    /* The globe is fixed on a tilted axis; it spins about that axis, so the ring
       (symmetric) holds still while the surface wheels past a fixed light. The
       markings are bold and vary in longitude - belts, a mottle and one bright
       storm, all fixed to the surface - so the turn is unmistakable. */
    for (let lat = -1.55; lat < 1.55; lat += 0.03) {
      const cl = Math.cos(lat), sl = Math.sin(lat);
      for (let lon = 0; lon < 6.283; lon += 0.02) {
        const x = cl * Math.cos(lon), y = sl, z = cl * Math.sin(lon);
        const yt = y * cosT - z * sinT, zt = y * sinT + z * cosT;   // tilt about screen x
        const xr = x * cosR - yt * sinR, yr = x * sinR + yt * cosR; // roll about the view axis
        const L = xr * lx + yr * ly + zt * lz;                      // normal = point (unit sphere)
        const mlon = lon - spin;                                    // longitude fixed to the surface
        const belts = 0.74 + 0.26 * Math.sin(lat * 5.6);            // Saturn's banding
        const mottle = 0.2 * Math.sin(mlon * 3 + lat * 1.5) + 0.12 * Math.sin(mlon * 2 - lat * 2);
        const dl = Math.atan2(Math.sin(mlon - 0.9), Math.cos(mlon - 0.9));
        const storm = 0.42 * Math.exp(-((lat - 0.16) * (lat - 0.16) / 0.06 + dl * dl / 0.32));
        const albedo = Math.max(0.22, Math.min(1.3, belts + mottle + storm));
        // Enough ambient that the shadowed half still reads, so the whole sphere
        // shows as a round disk rather than just its lit cap.
        put(xr * Rs, yr * Rs, zt * Rs, (0.3 + 0.7 * Math.max(0, L)) * albedo);
      }
    }
    // ring: a thin bright band in the equatorial plane, opened by the same tilt,
    // with a Cassini gap; it runs out well past the globe to the left and right.
    // Radial spokes tied to `spin` sweep round it at the same rate the globe
    // turns, so the ring reads as turning too, not sitting still.
    for (let a = 0; a < 6.283; a += 0.013) {
      const ca = Math.cos(a), sa = Math.sin(a);
      const spokes = 0.4 + 0.6 * Math.abs(Math.cos((a - spin) * 2.5));
      for (let r = Rr1; r <= Rr2; r += 0.03) {
        if (r > G0 && r < G1) continue;
        const z = r * sa, px = r * ca;
        const yt = -z * sinT, zt = z * cosT;                        // y is 0 in the ring plane
        const xr = px * cosR - yt * sinR, yr = px * sinR + yt * cosR; // same roll as the globe
        const ripple = 0.84 + 0.16 * Math.abs(Math.sin((r - Rr1) * 9)); // a couple of soft bands, not noise
        put(xr, yr + RING_LIFT, zt, (0.4 + 0.5 * ringL) * ripple * spokes);
      }
    }

    let s = '';
    for (let y = 0; y < CH; y++) s += out.slice(y * CW, (y + 1) * CW).join('') + (y < CH - 1 ? '\n' : '');
    pre.textContent = s;
  }

  let spin = 0.6;
  render(spin);
  // The turn is the point of the screen and the owner asked for it plainly, so it
  // always runs - a system "reduce motion" setting only eases it to a gentler
  // pace rather than freezing the planet (which read as broken across browsers).
  const gentle = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rate = gentle ? 0.014 : 0.032;
  let last = 0;
  const step = (now) => {
    if (!pre.isConnected) return;
    // Idle while the map is the face on show: the loop stays alive, but there is
    // nothing to draw into a box with no width, and the planet is then mid-turn
    // when the airlock comes back rather than starting over.
    if (!planetShowing()) { requestAnimationFrame(step); return; }
    if (now - last >= 70) { last = now; render(spin); spin += rate; }   // ~14 fps
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* A rocket, off the same wall of ASCII the planet came from and drawn at the
   planet's own size and in its own ink. It is not carried along a path: it
   chases. There is a point it wants to be at - the pointer while the pointer is
   moving, one of its own choosing when it is not - and every frame it turns a
   little towards that point and moves at whatever speed it has built up. So the
   nose leads, the body swings round after it, and it arrives in a curve rather
   than jumping from place to place. Saturn pushes it away, so it goes round the
   planet. First appearance ten seconds in; it flies from then on.

     .        .        .
    .'.      .'.      .'.
    |o|      |o|      |o|
   .'o'.    .'o'.    .'o'.
   |.-.|    |.-.|    |.-.|
   '   '    '   '    '   '
    ( )      )        ( )
     )      ( )        )
    ( )      )         (
*/
const ROCKET_BODY = [
  '   .   ',
  "  .'.  ",
  '  |o|  ',
  " .'o'. ",
  ' |.-.| ',
  " '   ' ",
];
const ROCKET_BURN = [
  ['  ( )  ', '   )   ', '  ( )  '],
  ['   )   ', '  ( )  ', '   )   '],
  ['  ( )  ', '   )   ', '   (   '],
];
const ROCKET_WAIT = 10000;   // before the first appearance
const ROCKET_SPEED = 3.5;    // pixels per 60fps frame - it never slows or backs up
const ROCKET_RATE = 1.0;     // degrees of heading it can change in one frame
const ROCKET_CAP = 60;       // degrees it may aim off its current line, at most

function flyRocket(el) {
  if (!el) return;
  const pre = document.createElement('pre');
  pre.className = 'gate-rocket';
  pre.textContent = ROCKET_BODY.concat(ROCKET_BURN[0]).join('\n');
  el.appendChild(pre);

  // What it is chasing: the pointer while the pointer is moving, otherwise a
  // place of its own, changed once it gets there.
  let aim = null, aimAt = -1e9;
  addEventListener('pointermove', (event) => {
    aim = { x: event.clientX, y: event.clientY };
    aimAt = performance.now();
  }, { passive: true });

  // The planet as the ellipse it is, in page pixels.
  const planet = () => {
    const ink = inkBox();
    if (!ink) return null;
    return { cx: (ink.x0 + ink.x1) / 2, cy: (ink.y0 + ink.y1) / 2,
             hw: Math.max(1, (ink.x1 - ink.x0) / 2), hh: Math.max(1, (ink.y1 - ink.y0) / 2) };
  };
  const howFarIn = (p, e) => Math.hypot((p.x - e.cx) / e.hw, (p.y - e.cy) / e.hh);

  /* A course is only offered if it is clear: the place has to be off the planet
     and the line to it has to miss the planet too. Nothing gets aimed into
     Saturn, which is what had the rocket bearing down on it, stalling against
     it and hanging there nose-first. Where no clear course exists at all - a
     window the planet fills - it returns nothing, and the rocket does not
     visit rather than making a fool of itself. */
  const pickFar = (W, H, from) => {
    const e = planet();
    let best = null, far = -1;
    for (let i = 0; i < 120; i++) {
      const q = { x: 60 + Math.random() * (W - 120), y: 60 + Math.random() * (H - 120) };
      if (e && howFarIn(q, e) < 1.15) continue;
      let clear = true;
      if (e && from) {
        for (let t = 0; t <= 1.0001 && clear; t += 0.04) {
          const px = from.x + (q.x - from.x) * t, py = from.y + (q.y - from.y) * t;
          if (howFarIn({ x: px, y: py }, e) < 1.1) clear = false;
        }
      }
      if (!clear) continue;
      const d = from ? Math.hypot(q.x - from.x, q.y - from.y) : 1;
      if (d > far) { far = d; best = q; }
    }
    return best;
  };

  const wrap = (a) => {
    while (a > Math.PI) a -= 2 * Math.PI;
    while (a < -Math.PI) a += 2 * Math.PI;
    return a;
  };

  let at = null, head = 0, wander = null, orbit = 0;
  let legs = 0, legsWanted = 0, leaving = false, away = false, backAt = 0, stayUntil = 0;
  let born = 0, puff = 0, lastPuff = 0, lastT = 0;

  const enter = (W, H) => {
    // In off one of the four sides, and only if there is a clear course waiting
    // on the other side of the edge - it is pointed at that course, never at the
    // middle of the window, which is where the planet is.
    for (let tries = 0; tries < 8; tries++) {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) at = { x: Math.random() * W, y: -80 };
      else if (side === 1) at = { x: Math.random() * W, y: H + 80 };
      else if (side === 2) at = { x: -80, y: Math.random() * H };
      else at = { x: W + 80, y: Math.random() * H };
      wander = pickFar(W, H, at);
      if (wander) break;
    }
    if (!wander) {
      // No clear course from any side - a window the planet fills. It stays away
      // and tries again later rather than sitting there with nowhere to go.
      at = null;
      pre.style.opacity = '0';
      backAt = performance.now() + 20000;
      away = true;
      return;
    }
    head = Math.atan2(wander.y - at.y, wander.x - at.x);
    legs = 0;
    legsWanted = 1 + Math.floor(Math.random() * 2);
    // A visit is a leg or two OR five seconds, whichever runs out first, and the
    // way out is the nearest edge - so it is on screen for something under ten
    // seconds all told. It is a thing crossing the sky, like the streaks are.
    stayUntil = performance.now() + 3000 + Math.random() * 2000;
    leaving = false;
    away = false;
    pre.style.opacity = '1';
  };

  const step = (now) => {
    if (!pre.isConnected) return;
    requestAnimationFrame(step);
    const W = el.clientWidth, H = el.clientHeight;
    if (!W || !H) return;
    if (!born) born = now;
    if (now - born < ROCKET_WAIT) return;
    if (!at) enter(W, H);
    if (away) {
      if (now >= backAt) enter(W, H);
      return;                                  // out of sight, and out of mind
    }
    // Time in 60fps frames, capped so a tab coming back does not teleport it.
    const dt = Math.min(3, (now - (lastT || now)) / 16.67);
    lastT = now;

    if (now - lastPuff >= 130) {
      lastPuff = now;
      pre.textContent = ROCKET_BODY.concat(ROCKET_BURN[puff++ % ROCKET_BURN.length]).join('\n');
    }

    /* The visit is over when its time is up, whatever it happens to be chasing -
       a pointer that keeps moving used to hold it here for ever - and once it
       has turned for the door nothing calls it back. */
    /* A pointer sitting on the planet is not a place it can get to: chasing it
       had the rocket sliding round the rim until its time ran out, which looked
       like it was stuck on Saturn. It ignores an aim it cannot reach and carries
       on with its own errands. */
    const eNow = planet();
    const reachable = !aim || !eNow || howFarIn(aim, eNow) > 1.12;
    const chasing = !leaving && reachable && aim && now - aimAt < 4000;
    // On the way out it opens the throttle: the planet can stand between it and
    // the nearest edge, and a slow exit keeps it on screen past its welcome.
    const speed = ROCKET_SPEED * (leaving ? 1.6 : 1);
    if (!leaving && now > stayUntil) leaving = true;
    else if (!leaving && !chasing && (!wander || Math.hypot(wander.x - at.x, wander.y - at.y) < 90)) {
      // Arrived. A leg or two to a visit, then it puts its nose down and goes.
      if (++legs >= legsWanted) leaving = true;
      else {
        wander = pickFar(W, H, at);
        if (!wander) leaving = true;      // nowhere clear left to go
      }
    }

    /* Where it would like to be pointing. Straight on if it is leaving; Saturn
       overrides that at close range, and the window's edge overrides Saturn -
       but only while it is staying. */
    let want;
    if (leaving) {
      /* Out by the nearest door that is not through the planet. Taking the
         nearest one flat had it heading for an edge with Saturn in the way,
         which no amount of turning inside sixty degrees can get round. */
      const outs = [{ x: at.x, y: -160 }, { x: at.x, y: H + 160 },
                    { x: -160, y: at.y }, { x: W + 160, y: at.y }];
      let door = outs[0], bestScore = 1e9;
      for (const o of outs) {
        let over = 0, tot = 0;
        if (eNow) {
          for (let t = 0; t <= 1.0001; t += 0.05) {
            tot++;
            const px = at.x + (o.x - at.x) * t, py = at.y + (o.y - at.y) * t;
            if (howFarIn({ x: px, y: py }, eNow) < 1.1) over++;
          }
        }
        // Distance, plus a heavy toll for every step of it spent over Saturn.
        const score = Math.hypot(o.x - at.x, o.y - at.y) + (tot ? over / tot : 0) * 4000;
        if (score < bestScore) { bestScore = score; door = o; }
      }
      want = Math.atan2(door.y - at.y, door.x - at.x);
    } else {
      const goal = chasing ? aim : wander;
      want = Math.atan2(goal.y - at.y, goal.x - at.x);
    }
    /* Off the planet whatever the two of them are sized at: the keep-out is the
       planet's own ellipse plus a hair, and the rocket turns when the point it
       will be at in a third of a second is inside it - not when it already is,
       by which time it is too late. So it flies close to the rim on a window
       the planet fills, and anywhere it likes on one it does not. */
    let hard = false;                     // near the planet: it may turn harder
    const e = eNow;
    if (e) {
      const cx = e.cx, cy = e.cy;
      const reach = 1.08;
      // Far enough ahead that it can finish the turn: at four degrees a frame a
      // quarter turn costs about eighty pixels, so it looks a hundred and forty.
      const soon = { x: at.x + Math.cos(head) * speed * 40,
                     y: at.y + Math.sin(head) * speed * 40 };
      if (howFarIn(at, e) < reach || howFarIn(soon, e) < reach) {
        hard = true;
        /* Round the planet, not out of it: inside its reach the rocket aims
           along the tangent, leaning a little out of the turn so the loop opens
           and it leaves rather than orbiting for ever. Which way round is
           decided once, on the way in, and held: picking the nearer tangent
           every frame flipped it back and forth over the midpoint and the
           rocket stood there shaking its head instead of flying. */
        const out = Math.atan2(at.y - cy, at.x - cx);
        if (!orbit) {
          const gap = (a) => Math.abs(wrap(a - head));
          orbit = gap(out + Math.PI / 2) < gap(out - Math.PI / 2) ? 1 : -1;
        }
        const openOut = (leaving ? 34 : 14) * Math.PI / 180;
        want = out + orbit * (Math.PI / 2 - openOut);
      } else {
        orbit = 0;
      }
    }
    const margin = 70;
    if (!leaving && (at.x < margin || at.x > W - margin || at.y < margin || at.y > H - margin)) {
      want = Math.atan2(H / 2 - at.y, W / 2 - at.x);
    }

    /* It flies: the speed is constant and only the heading changes, so it never
       stops, never backs up and never slides sideways. It may aim at most sixty
       degrees off the line it is on - anything sharper it comes round to in an
       arc - and it can only swing a degree of that per frame. */
    let off = wrap(want - head);
    const cap = ROCKET_CAP * Math.PI / 180;
    off = Math.max(-cap, Math.min(cap, off));
    // A degree a frame in open sky; near the planet it pulls four times harder,
    // or it would be over Saturn before it had finished turning away.
    const rate = (hard ? 4 : ROCKET_RATE) * Math.PI / 180 * dt;
    head += Math.max(-rate, Math.min(rate, off));
    at.x += Math.cos(head) * speed * dt;
    at.y += Math.sin(head) * speed * dt;

    /* There is no wall any more. Pushing the rocket back out of the rim every
       frame cancelled the forward motion it had just made, so it hung there
       facing the planet and barely moving - which is exactly what it looked
       like. Nothing aims it at Saturn now, so nothing has to shove it off. */

    // Well clear of the window on its way out: gone, for half a minute or so.
    if (at.x < -200 || at.x > W + 200 || at.y < -200 || at.y > H + 200) {
      away = true;
      backAt = now + 45000 + Math.random() * 45000;
      pre.style.opacity = '0';
      return;
    }

    // The art points up, so the heading is turned a quarter on; the rotation is
    // about the rocket's own middle, which is where its nose swings from.
    const lean = head * 180 / Math.PI + 90;
    pre.style.transform = 'translate(calc(' + at.x.toFixed(0) + 'px - 50%), calc(' +
      at.y.toFixed(0) + 'px - 50%)) rotate(' + lean.toFixed(1) + 'deg)';
  };
  requestAnimationFrame(step);
}

/* Dozens of faint asterisks scattered behind the gate - the deep-space ground
   the planet turns against. Each carries its own place, size and dimness. */
function fillStars(el) {
  if (!el) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('span');
    s.className = 'gate-star';
    s.textContent = '*';
    s.style.left = (Math.random() * 100).toFixed(2) + '%';
    s.style.top = (Math.random() * 100).toFixed(2) + '%';
    s.style.fontSize = (6 + Math.random() * 8).toFixed(1) + 'px';
    s.style.opacity = (0.12 + Math.random() * 0.4).toFixed(2);
    frag.appendChild(s);
  }
  el.textContent = '';
  el.appendChild(frag);
}

/* One shooting star at a time, drawn the way the planet is: characters stepped
   across a grid a frame at a time, out of the planet's own luminance ramp and in
   the planet's own ink - not a CSS slide of a fixed string. It enters off one
   edge, crosses a stretch of open sky picked to miss Saturn's ink, and carries
   on out of the far edge; nothing fades out in the middle of the screen.
   The first after 15s, then one every 30s.
   Like the planet, this ignores "reduce motion": a frozen gate reads as broken,
   and nothing here flashes or fills the screen. */
/* Where the planet's ink actually is. Its <pre> is a 98x30 block of cells and
   most of the corners of that block are blank, so the element's own box would
   fence off sky that is in fact empty. Measured per call, because the planet
   turns and its outline breathes with it. Everything that crosses the sky asks
   this before it picks a line - a streak, and now a rocket. */
function inkBox() {
  const sat = document.getElementById('saturn');
  if (!sat || !sat.textContent) return null;
  const rows = sat.textContent.split('\n');
  let c0 = 1e9, c1 = -1, r0 = 1e9, r1 = -1;
  rows.forEach((line, r) => {
    const first = line.search(/\S/);
    if (first < 0) return;
    const last = line.replace(/\s+$/, '').length - 1;
    if (first < c0) c0 = first;
    if (last > c1) c1 = last;
    if (r < r0) r0 = r;
    if (r > r1) r1 = r;
  });
  if (c1 < 0) return null;
  const box = sat.getBoundingClientRect();
  const w = box.width / rows[0].length, h = box.height / rows.length;
  const pad = 2 * h;                        // a couple of lines of clearance
  return { x0: box.left + c0 * w - pad, x1: box.left + (c1 + 1) * w + pad,
           y0: box.top + r0 * h - pad,   y1: box.top + (r1 + 1) * h + pad };
}

/* The planet keeps its size when it is off to the left, so "is it on show" is
   the class the switch sets, not a measurement. The sky it turns against is
   behind both faces now and always on show, so only the planet asks.
   On a phone the planet is part of that sky rather than one of the faces - it
   stays where it is behind all three pages - so there it is always turning. */
const planetShowing = () => narrow() || document.body.classList.contains('on-saturn');

const SHOT_RAMP = '.,-~:;=!*#';   // the planet's ramp, faint tail to bright head
const SHOT_TAIL = 14;             // cells of trail behind the head
const SHOT_FRAMES = 32;           // frames to cross, at the planet's own ~14fps
const SHOT_QUEUE_MAX = 14;        // most that can bank up while the tab is away

function shootStars(el) {
  if (!el) return;
  let timer = 0, pending = 0;

  const fire = () => {
    if (!el.isConnected) {                                   // gate removed on unlock - stop
      clearInterval(timer);
      document.removeEventListener('visibilitychange', release);
      document.removeEventListener('hdh:view', release);
      return;
    }
    /* A hidden tab runs no requestAnimationFrame, so a streak started now would
       sit frozen on its start line - and left as it was, one dead <pre> piled up
       per turn for as long as the tab was away. Bank the turn instead and let
       the shower out when the tab comes back: leaving a page and returning to a
       sky full of them is worth keeping, so it is on purpose and it is capped.
       The sky itself is never away - it lies behind both faces - so only the tab
       leaving banks a turn. */
    if (document.hidden || !el.clientWidth) { pending = Math.min(pending + 1, SHOT_QUEUE_MAX); return; }
    const pre = document.createElement('pre');
    pre.className = 'gate-shot';
    el.appendChild(pre);

    // Cell size measured, not assumed - the mono face is whatever the system has.
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
    probe.textContent = '0'.repeat(50);
    pre.appendChild(probe);
    const pb = probe.getBoundingClientRect();
    const cw = pb.width / 50, chh = pb.height;
    probe.remove();
    const W = el.clientWidth, H = el.clientHeight;
    if (!cw || !chh || !W || !H) { pre.remove(); return; }
    const cols = Math.floor(W / cw), rows = Math.floor(H / chh);

    const ink = inkBox();
    const clear = (x, y) => !ink || x < ink.x0 || x > ink.x1 || y < ink.y0 || y > ink.y1;

    /* Find a crossing that stays in open sky: come in off the top or a side, aim
       down and across, and score the line by how much of it lands on the planet's
       ink. A clean lane wins outright; if the planet fills the frame and none is
       clean, the least-bad one still runs, because a turn where nothing comes
       reads as broken. */
    let best = null;
    for (let attempt = 0; attempt < 60; attempt++) {
      const right = Math.random() < 0.5;
      const a = (14 + Math.random() * 62) * Math.PI / 180;    // below the horizontal
      const dx = (right ? 1 : -1) * Math.cos(a), dy = Math.sin(a);
      let sx, sy;
      if (Math.random() < 0.5) { sx = Math.random() * W; sy = -chh * 2; }
      else { sx = right ? -cw * 2 : W + cw * 2; sy = Math.random() * H * 0.7; }
      let len = 0;                                           // run until it is out again
      while (len < W + H) {
        const x = sx + dx * len, y = sy + dy * len;
        if (y > H + chh * 2 || x < -cw * 3 || x > W + cw * 3) break;
        len += cw;
      }
      if (len <= Math.max(W, H) * 0.4) continue;             // too short to be a run
      let bad = 0;
      for (let t = 0; t <= 1.0001; t += 0.02) {
        if (!clear(sx + dx * len * t, sy + dy * len * t)) bad++;
      }
      if (!best || bad < best.bad) best = { sx, sy, dx, dy, len, bad };
      if (bad === 0) break;
    }
    if (!best) { pre.remove(); return; }
    const { sx, sy, dx, dy, len } = best;

    const line = new Array(cols + 1).join(' ');
    const draw = (head) => {
      const grid = [];
      for (let r = 0; r < rows; r++) grid.push(line.split(''));
      for (let k = 0; k <= SHOT_TAIL; k++) {
        const d = head - k * cw;              // the trail lies behind the head
        if (d < 0) continue;
        const c = Math.round((sx + dx * d) / cw), r = Math.round((sy + dy * d) / chh);
        if (c < 0 || c >= cols || r < 0 || r >= rows) continue;
        grid[r][c] = SHOT_RAMP[Math.round((1 - k / SHOT_TAIL) * (SHOT_RAMP.length - 1))];
      }
      pre.textContent = grid.map((r) => r.join('')).join('\n');
    };

    let head = 0, last = 0;
    const step = (now) => {
      if (!pre.isConnected || !el.isConnected) { pre.remove(); return; }
      if (now - last >= 70) {                 // the planet's own frame rate
        last = now;
        head += len / SHOT_FRAMES;
        if (head - SHOT_TAIL * cw > len) { pre.remove(); return; }   // tail is out too
        draw(head);
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* Back in view: let the banked turns go, each after its own short delay, so
     they arrive as a shower rather than all on one frame. */
  const release = () => {
    if (document.hidden || !el.isConnected || !el.clientWidth) return;
    const owed = pending;
    pending = 0;
    for (let i = 0; i < owed; i++) setTimeout(fire, Math.random() * 1400);
  };
  document.addEventListener('visibilitychange', release);
  document.addEventListener('hdh:view', release);   // and on the way back to the sky
  setTimeout(() => { fire(); timer = setInterval(fire, 30000); }, 15000);
}

/* The airlock's own contents. Drawn once and left running: the loops idle while
   the map is up rather than stopping, so the planet is mid-turn when you come
   back to it instead of starting over. */
function initSaturn() {
  fillStars(document.getElementById('gateStars'));
  shootStars(document.getElementById('gateStars'));   // in the starfield, behind the planet
  flyRocket(document.getElementById('gateStars'));
  spinSaturn(document.getElementById('saturn'));
  // Home goes home. It was a toggle, so pressing it from the home page took you
  // away from it - a button named for a place should always land on that place.
  const btn = document.getElementById('viewBtn');
  if (btn) btn.addEventListener('click', () => showView('saturn'));
  // The two edges do what the two buttons do; the right-hand one brings the
  // rail with it, as its button does.
  document.getElementById('edgeRight')?.addEventListener('click', () => {
    showView('map');
    const panel = document.getElementById('devices');
    if (panel && (panel.hidden || !panel.classList.contains('in'))) setRail(true);
  });
  document.getElementById('edgeLeft')?.addEventListener('click', () => showView('saturn'));
}

initTheme();
initLang();   // after the theme, because it repaints the switch labels

/* The airlock is the face the page opens on - the planet is the front door. The
   map is laid out all the same, off to the right, so it is ready when it is
   called for and the hardware rail is already out beside it. */
showView('saturn');
// The markup already has the page on this face; let one frame paint it there
// before the crossing animation is allowed to run.
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('boot')));
measureBar();   // before anything measures itself against the bar
renderMap();
renderList();
renderDevices();
initDevices();
initSaturn();
/* The rail is a fixture of the map, so it is out from the start - but only where
   there is a map. On a phone the machines are a page of their own, and a page
   that opened itself would be lying over the projects the first time they are
   asked for. */
if (!narrow()) setRail(true);
