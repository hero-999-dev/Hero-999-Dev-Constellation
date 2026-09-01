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

/* x / y are points on the 1200 x 840 grid the connector SVG uses.
 *
 * These numbers are solved, not eyeballed. Two things fight each other: a ring
 * that really CONTAINS its cards needs about 1.4x the half-extent of the box
 * they sit in, and the Pixel Pomo ring then has to sit inside the outer ring as
 * well - and it sits far to the left, where the outer ellipse has already
 * narrowed. What buys the clearance is a vertical column for the cluster (that
 * is the arrangement with the smallest horizontal reach, so its ring pokes out
 * least), a tall spread on the right (which raises the outer ring without
 * touching the inner one) and a generous pad on the outer ring. Measured: the
 * inner ring reaches 0.909 of the outer at its worst point - inside, with room
 * to see. Move a card and that number moves; check it before shipping.
 */
const ME = { id: 'me', title: 'Hero Dev', desc: OWNER, x: 600, y: 420 };

/* A ring is a group: the circle around the cards IS the grouping, which is why
   Pixel Pomo has no box of its own.
   `desc` and the two category words in `lang` are I18N keys, not text. Keep every
   translation to ONE line: card height is pinned and feeds the ring geometry, so
   a second line is clipped rather than fitted. Check all four after editing. */
const BRANCHES = [
  {
    ring: 'Pixel Pomo',
    children: [
      {
        title: 'pixel_pomo',
        desc: 'dPomo',
        repo: 'pixel_pomo', lang: 'Dart', private: true,
        x: 240, y: 310,
      },
      {
        title: 'pixel-pomo-web',
        desc: 'dWeb',
        repo: 'pixel-pomo-web', lang: 'Flutter', private: false,
        live: 'https://hero-999-dev.github.io/pixel-pomo-web/',
        x: 240, y: 420,
      },
      {
        title: 'pixel_pomo_art_kit',
        desc: 'dKit',
        repo: 'pixel_pomo_art_kit', lang: 'Python', private: false,
        x: 240, y: 530,
      },
    ],
  },
  {
    title: 'CubeDeck',
    desc: 'dCube',
    repo: 'CubeDeck', lang: 'Extension', private: true,
    x: 765, y: 158,
  },
  {
    title: 'Warsaw Cat Sitting',
    desc: 'dCat',
    repo: 'warsaw-cat-sitting', lang: 'HTML', private: true,
    x: 935, y: 285,
  },
  /* The right-hand arc carries five cards now. Its widest point sits at x 960,
     which is the same 360 from the centre that the Pixel Pomo column reaches on
     the left - so the outer ring is fitted to exactly the numbers it was before
     and none of the four measured ratios move. Spreading the other two out to
     y 285 / 555 is what makes room: the cards are 99 grid units tall, and 135
     between centres clears them. */
  {
    title: 'Project Lea',
    desc: 'dLea',
    repo: 'Project-Lea', lang: 'PowerShell', private: true,
    x: 960, y: 420,
  },
  {
    title: 'SplitExec',
    desc: 'dSplit',
    repo: 'SplitExec-Video-Splitter-For-Discord-And-Other-Platforms', lang: 'Desktop', private: true,
    x: 935, y: 555,
  },
  {
    title: 'ClaWus',
    desc: 'dClaw',
    repo: 'ClaWus-Claude-Usage-Widget', lang: 'Desktop', private: true,
    x: 765, y: 683,
  },
];

/* The page's own repository. It is not a card - it is the name of the outer
   ring, the circle that holds everything being the repository that draws it.
   `desc` is not shown on the map (the ring carries only its name); the card list
   on narrow screens, where there is no ring, carries it as a row and uses it. */
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
    inspiration: 'Inspiration',
    home: 'Home', projectsHardware: 'Projects & Hardware',
    hardware: 'Hardware', dark: 'Dark', light: 'Light',
    private: 'Private', public: 'Public', live: 'Live',
    Extension: 'Extension', Desktop: 'Desktop',
    handheld: 'Handheld', phone: 'Phone', integrated: 'integrated',
    vibecoded: 'This project is vibecoded by using Opus 5',
    dPomo: 'Pixel-art Pomodoro timer.', dWeb: 'Runs in the browser.',
    dKit: 'Editor for its sprites.', dCube: 'Fifteen tools for YouTube.',
    dCat: 'Cat sitting in Warsaw.', dSplit: 'Splits video for Discord.',
    dClaw: 'When to use Claude.', dLea: 'A hook for Claude Code.',
    dSelf: 'A map of every repository.',
  },
  tr: {
    inspiration: 'İlham',
    home: 'Ana sayfa', projectsHardware: 'Projeler & Donanım',
    hardware: 'Donanım', dark: 'Koyu', light: 'Açık',
    private: 'Özel', public: 'Herkese açık', live: 'Canlı',   // not 'Açık' - that is the light theme
    Extension: 'Eklenti', Desktop: 'Masaüstü',
    handheld: 'Avuç içi', phone: 'Telefon', integrated: 'tümleşik',
    vibecoded: 'Bu proje Opus 5 ile vibecode edildi',
    dPomo: 'Piksel Pomodoro sayacı.', dWeb: 'Tarayıcıda çalışır.',
    dKit: "Sprite'ları için editör.", dCube: 'YouTube için on beş araç.',
    dCat: "Varşova'da kedi bakımı.", dSplit: 'Videoyu Discord için böler.',
    dClaw: 'Claude ne zaman uygun.', dLea: 'Claude Code için hook.',
    dSelf: "Her repo'nun haritası.",
  },
  pl: {
    inspiration: 'Inspiracje',
    home: 'Strona główna', projectsHardware: 'Projekty i sprzęt',
    hardware: 'Sprzęt', dark: 'Ciemny', light: 'Jasny',
    private: 'Prywatne', public: 'Publiczne', live: 'Na żywo',
    Extension: 'Rozszerzenie', Desktop: 'Desktop',
    handheld: 'Konsola przenośna', phone: 'Telefon', integrated: 'zintegrowana',
    vibecoded: 'Ten projekt powstał w vibecodingu z Opus 5',
    dPomo: 'Pikselowe Pomodoro.', dWeb: 'Działa w przeglądarce.',
    dKit: "Edytor jego sprite'ów.", dCube: '15 narzędzi do YouTube.',
    dCat: 'Opieka nad kotami.', dSplit: 'Dzieli wideo pod Discorda.',
    dClaw: 'Kiedy używać Claude.', dLea: 'Hook do Claude Code.',
    dSelf: 'Mapa wszystkich repozytoriów.',
  },
  de: {
    inspiration: 'Inspiration',
    home: 'Startseite', projectsHardware: 'Projekte & Hardware',
    hardware: 'Hardware', dark: 'Dunkel', light: 'Hell',
    private: 'Privat', public: 'Öffentlich', live: 'Live',
    Extension: 'Erweiterung', Desktop: 'Desktop',
    handheld: 'Handheld', phone: 'Telefon', integrated: 'integriert',
    vibecoded: 'Dieses Projekt wurde mit Opus 5 vibecoded',
    dPomo: 'Pixel-Art-Pomodoro-Timer.', dWeb: 'Läuft im Browser.',
    dKit: 'Editor für seine Sprites.', dCube: '15 Werkzeuge für YouTube.',
    dCat: 'Katzenbetreuung, Warschau.', dSplit: 'Teilt Videos für Discord.',
    dClaw: 'Wann man Claude nutzt.', dLea: 'Ein Hook für Claude Code.',
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
    const now = pick.querySelector('.lang-now');
    const chosen = pick.querySelector(`[data-lang="${LANG}"]`);
    if (now && chosen) now.textContent = chosen.textContent;
    for (const opt of pick.querySelectorAll('[data-lang]')) {
      opt.setAttribute('aria-selected', String(opt.dataset.lang === LANG));
    }
  }
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
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
function applyTheme(mode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('hdh-theme', mode);
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', mode === 'dark' ? '#1A1411' : '#FFFBF4');
  for (const label of document.querySelectorAll('.theme-label')) {
    label.textContent = mode === 'dark' ? t('light') : t('dark');
  }
}

function initTheme() {
  const saved = localStorage.getItem('hdh-theme');
  const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved === 'dark' || saved === 'light' ? saved : system);
  for (const btn of document.querySelectorAll('[data-theme-toggle]')) {
    btn.addEventListener('click', () =>
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
    );
  }
}

/* ------------------------------------------------------------------ nodes */

function tag(text, cls) {
  const el = document.createElement('span');
  el.className = 'tag' + (cls ? ' ' + cls : '');
  el.textContent = text;
  return el;
}

/* Fills a node body. Used by both renderers, so a card looks the same in the
   map and in the list. */
function fillNode(el, item) {
  const title = document.createElement('span');
  title.className = 'node-title';
  title.textContent = item.title;
  el.appendChild(title);

  if (item.desc) {
    const desc = document.createElement('span');
    desc.className = 'node-desc';
    desc.textContent = t(item.desc);
    el.appendChild(desc);
  }

  const meta = document.createElement('span');
  meta.className = 'node-meta';
  // Language names are proper nouns; the two category words are not.
  if (item.lang) meta.appendChild(tag(t(item.lang)));
  if (item.repo) meta.appendChild(tag(item.private ? t('private') : t('public'), item.private ? 'lock' : ''));
  // The `live` badge is NOT here. Three badges fit one row in English but not
  // once "Public" becomes "Herkese açık" or "Öffentlich", and a second row makes
  // the card too tall for the ring geometry the coordinates were solved against.
  // The list view has room and carries it instead.
  if (meta.children.length) el.appendChild(meta);
}

/* A repo card is a link; a grouping node is not. */
function makeNode(item, extraClass) {
  const el = document.createElement(item.repo ? 'a' : 'div');
  el.className = 'node' + (extraClass ? ' ' + extraClass : '');
  if (item.repo) {
    el.href = GH(item.repo);
    el.target = '_blank';
    el.rel = 'noopener';
  }
  fillNode(el, item);
  return el;
}

/* ------------------------------------------------------------------- map */

const W = 1200, H = 840;
const pct = (v, total) => (v / total) * 100 + '%';

function place(el, item) {
  el.style.left = pct(item.x, W);
  el.style.top = pct(item.y, H);
}

/* A flat horizontal-ish curve between two points. Control points sit on the
   midpoint in x, which gives the branch its bend without any maths worth a
   comment. */
function curve(a, b) {
  const mx = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

/* Every edge holds the two elements it joins, not their coordinates. The line
   is redrawn from where the cards actually ARE, so nothing has to be kept in
   sync by hand: dragging, the spring back, a window resize and the first paint
   after the fonts load all go through the same measurement. */
const EDGES = [];
let mapEl, linesEl;

const ARROW = 10;                            // arrowhead length on screen, px

function centreOf(el, box, w = W, h = H) {
  const r = el.getBoundingClientRect();
  return {
    x: ((r.left + r.width / 2 - box.left) / box.width) * w,
    y: ((r.top + r.height / 2 - box.top) / box.height) * h,
  };
}

/* Where the line from `from` meets this box's edge. A line that runs to the
   centre disappears under the card - which is fine for a plain connector, and
   no good at all for an arrowhead: it would be drawn where nothing can see it. */
function edgeOf(el, box, w, h, from) {
  const c = centreOf(el, box, w, h);
  const r = el.getBoundingClientRect();
  const dx = from.x - c.x, dy = from.y - c.y;
  if (!dx && !dy) return c;
  const hw = (r.width / box.width) * w / 2;
  const hh = (r.height / box.height) * h / 2;
  const t = Math.min(Math.abs(dx) > 1e-6 ? hw / Math.abs(dx) : Infinity,
                     Math.abs(dy) > 1e-6 ? hh / Math.abs(dy) : Infinity);
  return { x: c.x + dx * t, y: c.y + dy * t };
}

/* CSS cannot fit a fixed-ratio box into a box of a different ratio without
   distorting it: with `height:100%` plus `aspect-ratio`, `max-width` clamps the
   width and the ratio is dropped rather than the height reduced. Measured at
   1920x1080: the map came out 1240x1006 instead of 1240x868, which stretched the
   rings (they scale with the viewBox) while the cards did not (they are sized in
   cqw, off the width). So the fit is computed here instead. */
function fitMap() {
  const stage = mapEl.parentElement;
  // clientWidth INCLUDES padding, and the stage is padded to leave rails for the
  // two side columns. Measuring off it made the map wider than the space it was
  // allowed, flex then squashed the width alone, and the ratio went with it
  // (1440x900 gave a 900x900 map instead of 900x630). Take the content box.
  const cs = getComputedStyle(stage);
  // The rail comes from the variable, not from the padding that reads it: while
  // the hardware panel slides in that padding is part way through its own
  // transition, and the map has to be handed its FINAL size now so its
  // transition can carry it there rather than chase a moving target.
  const rail = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue('--rail-right')) || 0;
  const availW = stage.clientWidth - parseFloat(cs.paddingLeft) - rail;
  const availH = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  const k = Math.min(availW / W, availH / H);
  if (!(k > 0)) return;
  mapEl.style.width = Math.round(W * k) + 'px';
  mapEl.style.height = Math.round(H * k) + 'px';
}

function redrawLines() {
  for (const edge of EDGES) {
    const host = edge.host || mapEl;
    if (!host || host.hidden || !host.isConnected) continue;
    const box = host.getBoundingClientRect();
    if (!box.width || !box.height) continue;   // hidden on narrow screens
    const w = edge.w || W, h = edge.h || H;
    const sx = box.width / w, sy = box.height / h;
    const ca = centreOf(edge.a, box, w, h);
    const cb = centreOf(edge.b, box, w, h);
    // An end with a head stops at the box edge, not the centre - a head drawn on
    // the centre hides under the card. An end without one runs to the centre.
    const a = edge.head2 ? edgeOf(edge.a, box, w, h, cb) : ca;
    const b = edge.head ? edgeOf(edge.b, box, w, h, ca) : cb;

    /* The arrowhead is a triangle of its own rather than an SVG marker. A marker
       is laid out in the same space as the line, and this space is a square
       stretched over a tall narrow panel - the head came out as a spike. Built
       in screen pixels and converted back, it keeps its shape at any panel size.
       It also lets the line stop at the base of the head, not run through it.
       Returns that base, so a double-headed edge is pulled in at both ends. */
    const drawHead = (headEl, tail, tip) => {
      let dx = (tip.x - tail.x) * sx, dy = (tip.y - tail.y) * sy;
      const len = Math.hypot(dx, dy) || 1;
      dx /= len; dy /= len;
      const tipX = tip.x * sx, tipY = tip.y * sy;
      const backX = tipX - dx * ARROW, backY = tipY - dy * ARROW;
      const wing = ARROW / 2;
      const u = (px, py) => `${px / sx} ${py / sy}`;
      headEl.setAttribute('d',
        `M ${u(tipX, tipY)} L ${u(backX - dy * wing, backY + dx * wing)}` +
        ` L ${u(backX + dy * wing, backY - dx * wing)} Z`);
      return { x: backX / sx, y: backY / sy };
    };

    if (edge.elbow) {
      /* A right-angle route instead of a diagonal: `edge.a` (the phone) leaves
         from its top or bottom edge, runs straight up or down to the height of
         `edge.b` (the laptop), then turns once and runs in to the laptop's RIGHT
         side, so the head enters horizontally. Two 90-degree bends, one up-left
         and one down-left, rather than two slants. */
      const rb = edge.b.getBoundingClientRect();
      const bhw = (rb.width / box.width) * w / 2;
      const ra = edge.a.getBoundingClientRect();
      const ahh = (ra.height / box.height) * h / 2;
      const up = cb.y < ca.y;
      const start = { x: ca.x, y: ca.y + (up ? -ahh : ahh) };  // phone top / bottom
      const tip = { x: cb.x + bhw, y: cb.y };                  // laptop right edge
      const corner = { x: ca.x, y: cb.y };
      const base = edge.head ? drawHead(edge.head, corner, tip) : tip;
      edge.path.setAttribute('d',
        `M ${start.x} ${start.y} L ${corner.x} ${corner.y} L ${base.x} ${base.y}`);
      if (edge.label) {
        // On the vertical run, centred in the clear band between the phone and
        // the laptop - not the run's own midpoint, which climbs into the laptop
        // once the laptop is wide enough to reach the run.
        const g0 = up ? rb.bottom : ra.bottom;
        const g1 = up ? ra.top : rb.top;
        const y = ((g0 + g1) / 2 - box.top) / box.height * h;
        edge.label.style.left = (ca.x + (edge.labelDx || 0)) / w * 100 + '%';
        edge.label.style.top = (y + (edge.labelDy || 0)) / h * 100 + '%';
      }
      continue;
    }

    const pa = edge.head2 ? drawHead(edge.head2, b, a) : a;
    const pb = edge.head ? drawHead(edge.head, a, b) : b;
    edge.path.setAttribute('d', curve(pa, pb));
    if (edge.label) {
      // Halfway along the line is halfway between the two CENTRES, which is not
      // the middle of the space between the boxes once they are different
      // heights - the label ends up sitting on the taller one. Where there is a
      // clear gap, centre the label in the gap instead.
      let y = (a.y + b.y) / 2;
      const ra = edge.a.getBoundingClientRect(), rb = edge.b.getBoundingClientRect();
      const gap = ra.bottom <= rb.top ? [ra.bottom, rb.top]
                : rb.bottom <= ra.top ? [rb.bottom, ra.top] : null;
      if (gap) y = ((gap[0] + gap[1]) / 2 - box.top) / box.height * h;
      edge.label.style.left = ((a.x + b.x) / 2 + (edge.labelDx || 0)) / w * 100 + '%';
      edge.label.style.top = (y + (edge.labelDy || 0)) / h * 100 + '%';
    }
  }
}

/* ------------------------------------------------------------------ rings */

/* The smallest ellipse of the group's own proportions that contains every
   corner of every card in it. Scaling the half-extents by the worst corner is
   what makes it enclose rather than merely hug: a ring fitted to the bounding
   box passes through the middle of each edge and leaves the corners outside.
   Rings sit at the cards' resting places, so dragging one does not drag the
   boundary with it. */
const RINGS = [];

function fitRing(els, box, pad, centre) {
  const pts = els.map((el) => {
    const r = el.getBoundingClientRect();
    return { c: centreOf(el, box), hw: (r.width / box.width) * W / 2, hh: (r.height / box.height) * H / 2 };
  });
  const xs = pts.flatMap((p) => [p.c.x - p.hw, p.c.x + p.hw]);
  const ys = pts.flatMap((p) => [p.c.y - p.hh, p.c.y + p.hh]);
  // `centre` pins the ring to a point instead of to the middle of what it holds.
  // The outer ring uses the middle of the canvas, so its top and bottom margins
  // come out equal - the cards are not quite symmetric (the centre card is
  // taller than the rest), which left the ring about a unit low.
  const cx = centre ? centre.x : (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = centre ? centre.y : (Math.min(...ys) + Math.max(...ys)) / 2;
  const hw = Math.max(...xs.map((v) => Math.abs(v - cx)));
  const hh = Math.max(...ys.map((v) => Math.abs(v - cy)));
  let s = 1;
  for (const p of pts) {
    for (const sx of [-1, 1]) {
      for (const sy of [-1, 1]) {
        s = Math.max(s, Math.hypot(
          Math.abs(p.c.x + sx * p.hw - cx) / hw,
          Math.abs(p.c.y + sy * p.hh - cy) / hh));
      }
    }
  }
  return { cx, cy, rx: hw * s + pad, ry: hh * s + pad };
}

/* Punches a hole the shape of the outer ring out of the header strip, so the
   strip and its rule stop where the ring runs and stay whole everywhere else.
   The mask is written in the bar's own coordinates - the ring's centre sits far
   below it, so what crosses the bar is the top of the arc. */
function maskHeader(ring, box) {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  const barBox = bar.getBoundingClientRect();
  const sx = box.width / W, sy = box.height / H;
  const cx = box.left + ring.cx * sx - barBox.left;
  const cy = box.top + ring.cy * sy - barBox.top;
  // The hole is cut a hair wider than the ring - enough that the bar's own rules
  // do not land on top of the ring's line and read as a bright nick, and no more.
  // At 7px the bar's lines stopped well clear of the ring on both sides, and the
  // eye joined those ends into a second circle that was not drawn anywhere.
  const CLEAR = 2;
  bar.style.setProperty('--ring-mask',
    `radial-gradient(ellipse ${ring.rx * sx + CLEAR}px ${ring.ry * sy + CLEAR}px at ${cx}px ${cy}px,` +
    ' transparent 99.4%, #000 100%)');
}

/* Panel width, and the rail it reserves on the map's right. One place, so the
   CSS `.devices` width, the rail the map slides off, and the room test below all
   agree - keep the CSS width equal to DEV_W. */
const DEV_W = 360;
const DEV_RAIL = DEV_W + 20;

/* The language panel is not allowed past the leftmost point of the outer ring.
   That point moves with the window - the map is centred in the page and its
   size follows the shorter side - so the width is measured rather than guessed
   and handed to CSS as --lang-max. */
function capSidePanels(ring, box) {
  const wrapBox = (document.querySelector('.wrap') || document.body).getBoundingClientRect();
  // Mirror image on the right: the device column stops before the ring does.
  // Below about 160px the specs wrap to mush, and on a short window the three
  // cards are taller than the column - nothing here scrolls, so in either case
  // the column stands down rather than spilling.
  const rigs = document.getElementById('devices');
  if (rigs) {
    const room = wrapBox.width - DEV_RAIL;
    // `hidden` is the toggle's business now, so room is judged on the button:
    // too narrow a rail or too short a window and the panel is not offered at
    // all - it must never spill, because nothing here scrolls.
    const btn = document.getElementById('devBtn');
    // While the panel is open its box is real; while it is closed fall back to
    // the last height seen. `top` reads `auto` if the rule ever fails to apply,
    // and parseFloat of that is NaN - which would quietly fail every comparison,
    // so it is pinned to the bar height instead.
    if (!rigs.hidden) devNaturalH = rigs.getBoundingClientRect().height;
    const topPx = parseFloat(getComputedStyle(rigs).top);
    const offset = Number.isFinite(topPx) ? topPx : 58;
    const headroom = wrapBox.height - offset - 6;
    const fits = room >= 160 && (devNaturalH === 0 || devNaturalH <= headroom);
    if (btn) btn.hidden = !fits;
    if (!fits) {
      rigs.hidden = true; rigs.classList.remove('in');
      btn?.classList.remove('on'); btn?.setAttribute('aria-expanded', 'false');
      // The rail went with it: the page now boots with the panel open, so the
      // reserved space has to be given back or the map stays pushed off an
      // empty column.
      document.documentElement.style.setProperty('--rail-right', '0px');
    }
  }
}

function layoutRings() {
  const box = mapEl.getBoundingClientRect();
  if (!box.width || !box.height) return;
  for (const ring of RINGS) {
    const { cx, cy, rx, ry } = fitRing(ring.els, box, ring.pad, ring.centre);
    if (ring.shape.classList.contains('outer-ring')) {
      maskHeader({ cx, cy, rx, ry }, box);
      capSidePanels({ cx, rx }, box);
    }
    ring.shape.setAttribute('cx', cx);
    ring.shape.setAttribute('cy', cy);
    ring.shape.setAttribute('rx', rx);
    ring.shape.setAttribute('ry', ry);
    if (ring.label) {
      /* A fixed inset from the top does not work: the ellipse narrows fast up
         there, so the ends of the word hang out over the stroke. Solve the
         ellipse for the width this particular text needs instead - that gives
         the highest line it fits on - then drop the baseline by the cap height
         so the letters, not the baseline, are what sits inside.
         A name too wide for the top of a narrow ring gets pushed down onto the
         cards inside it, which is what the tracked group label did, so it is
         stepped down in size until the line it wants is one near the top. The
         inline size is cleared first: this runs on every resize, and reading
         back its own last answer would ratchet the label away to nothing. */
      ring.label.style.fontSize = '';
      const css = parseFloat(getComputedStyle(ring.label).fontSize) || 19;
      let size = css, y = 0;
      for (;;) {
        // Side clearance is a share of the ring, not a fixed 26 units: on the
        // small group ring a fixed inset was most of its width.
        const halfText = ring.label.getComputedTextLength() / 2 + Math.min(26, rx * 0.14);
        const ratio = Math.min(halfText / rx, 0.999);
        y = cy - ry * Math.sqrt(1 - ratio * ratio) + size * 0.96;
        if (y <= cy - ry + size * 3 || size <= css * 0.72) break;
        size -= 1;
        ring.label.style.fontSize = size + 'px';
      }
      ring.label.setAttribute('x', cx);
      ring.label.setAttribute('y', y);
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
  for (let i = EDGES.length - 1; i >= 0; i--) {
    if (!EDGES[i].host || EDGES[i].host === mapEl) EDGES.splice(i, 1);
  }
  RINGS.length = 0;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = (tag, cls) => {
    const el = document.createElementNS(NS, tag);
    if (cls) el.setAttribute('class', cls);
    return el;
  };

  // Every stroke goes in one group and the group carries the fade, instead of
  // each stroke carrying its own alpha. Translucent strokes ADD where they
  // overlap - two at .3 come out at .51 - which is what put a dark smudge at
  // every place a connector crossed a ring or another connector. A group with
  // `opacity` is composited once and then faded, so a crossing looks the same
  // as a single line. Labels stay outside it, at full strength.
  const ink = svg('g', 'ink');
  linesEl.appendChild(ink);

  const join = (a, b, cls) => {
    const path = svg('path', cls);
    ink.appendChild(path);
    EDGES.push({ a, b, path });
  };

  const addRing = (els, cls, pad, text, centre, href) => {
    const shape = svg('ellipse', cls);
    ink.prepend(shape);                // behind the connectors
    let label = null;
    if (text) {
      label = svg('text', 'ring-label');
      label.textContent = text;
      // A named ring that stands for a repository is clickable like a card is.
      // The map is pointer-events: none, so `.ring-link` switches them back on
      // for this one element the way `.node` does for the cards.
      if (href) {
        const link = document.createElementNS(NS, 'a');
        link.setAttribute('class', 'ring-link');
        link.setAttribute('href', href);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
        link.appendChild(label);
        linesEl.appendChild(link);
      } else {
        linesEl.appendChild(label);
      }
    }
    RINGS.push({ els, shape, label, pad, centre });
  };

  const me = makeNode(ME, 'me');
  place(me, ME);
  nodes.appendChild(me);
  makeDraggable(me);

  const all = [me];
  const add = (item) => {
    const el = makeNode(item);
    place(el, item);
    nodes.appendChild(el);
    makeDraggable(el);
    join(me, el, 'trunk');
    all.push(el);
    return el;
  };

  for (const branch of BRANCHES) {
    // A ring group has no card of its own - the circle IS the grouping.
    if (branch.ring) {
      addRing(branch.children.map(add), 'ring group-ring', 14, branch.ring);
      continue;
    }
    add(branch);
  }

  addRing(all, 'ring outer-ring', 48, SELF.title, { x: W / 2, y: H / 2 }, GH(SELF.repo));

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
};

const settle = () => {
  measureBar();
  if (!mapEl) return;
  fitMap(); spaceCards(); redrawLines(); layoutRings();
};
addEventListener('resize', settle);
// Web fonts and the scrollbar appearing both move things after first paint.
addEventListener('load', settle);

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

const BASE = 'translate(-50%, -50%)';
let dragging = 0;   // how many cards are mid-drag or mid-spring

/* Lines are redrawn every frame for as long as anything is moving. The spring
   back is a CSS transition rather than hand-rolled physics - the loop just
   watches where the card has got to, so the curve cannot drift away from it. */
function follow() {
  redrawLines();
  if (dragging > 0) requestAnimationFrame(follow);
}

function makeDraggable(el) {
  let startX = 0, startY = 0, moved = false, live = false;

  el.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    live = true;
    moved = false;
    startX = event.clientX;
    startY = event.clientY;
    el.setPointerCapture(event.pointerId);
    el.classList.remove('returning');
    el.classList.add('dragging');
    dragging++;
    requestAnimationFrame(follow);
  });

  el.addEventListener('pointermove', (event) => {
    if (!live) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    // A few pixels of slop, so a click on a card is still a click.
    if (!moved && Math.hypot(dx, dy) > 4) moved = true;
    el.style.transform = `${BASE} translate(${dx}px, ${dy}px)`;
  });

  const release = (event) => {
    if (!live) return;
    live = false;
    el.releasePointerCapture?.(event.pointerId);
    el.classList.remove('dragging');
    if (!moved) {
      el.style.transform = '';
      dragging--;
      return;
    }
    // Spring home. The frame loop keeps running until the transition ends, so
    // the connector stays attached the whole way back.
    el.classList.add('returning');
    el.style.transform = BASE;
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      el.removeEventListener('transitionend', onEnd);
      el.classList.remove('returning');
      el.style.transform = '';
      dragging--;
      redrawLines();
      // Clearing the transform above does not always move the card in the same
      // tick - it can still measure at the point it was let go from, which
      // leaves the connectors and their labels behind. One more pass once the
      // style has settled. A timer, not a frame: the frame loop is the first
      // thing a browser stops handing out when the tab is not being painted.
      setTimeout(redrawLines, 0);
    };
    // Dropping the card also drops its drag shadow and border colour, and on the
    // map those transition too - their `transitionend` lands at .2s, less than
    // half way home. Only the transform finishing means the card has arrived;
    // anything earlier cuts the spring short and freezes the label mid-flight.
    const onEnd = (event) => { if (event.propertyName === 'transform') done(); };
    el.addEventListener('transitionend', onEnd);
    // transitionend does not fire at all if the card was let go where it started.
    setTimeout(done, 900);
  };

  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);

  // A drag that ends on a link must not also open it.
  el.addEventListener('click', (event) => {
    if (moved) {
      event.preventDefault();
      moved = false;
    }
  });
  el.addEventListener('dragstart', (event) => event.preventDefault());
}

/* ------------------------------------------------------------------ list */

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
    leaf.classList.remove('node');
    leaf.classList.add('leaf');
    // Room for the third badge down here, which is why the map card does without.
    if (item.live) leaf.querySelector('.node-meta')?.appendChild(tag(t('live'), 'live'));
    return leaf;
  };
  // Up on the map the page's own repository is the outer ring; there is no ring
  // down here, so it leads the list instead.
  list.appendChild(leafOf(SELF));
  for (const branch of BRANCHES) {
    if (!branch.children) {
      list.appendChild(leafOf(branch));
      continue;
    }
    const box = document.createElement('section');
    box.className = 'branch';
    const head = document.createElement('span');
    head.className = 'node-title';
    head.textContent = branch.ring || branch.title;   // the ring's name is the group's name
    box.appendChild(head);
    for (const child of branch.children) box.appendChild(leafOf(child));
    list.appendChild(box);
  }
}

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
const DEVICES = [
  {
    key: 'go', at: { x: 30, y: 12 }, w: '56%',
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
    key: 'acer', at: { x: 30, y: 88 }, w: '56%',
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
  { from: 'phone', to: 'go', label: 'termius / tailscale', arrow: true, elbow: true },
  { from: 'phone', to: 'acer', label: 'termius / tailscale', arrow: true, elbow: true },
  { from: 'go', to: 'acer', label: 'termius / tailscale', both: true },
];

/* Natural height of the panel, measured the first time it is drawn. Nothing on
   this page scrolls, so on a window too short to hold the panel the button goes
   away rather than the panel spilling off the bottom. */
let devNaturalH = 0;

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
    redrawLines();
    layoutRings();
    if (performance.now() < until) requestAnimationFrame(step);
    else wrap.classList.remove('gliding');
  };
  requestAnimationFrame(step);
}

/* Opening and closing the rail lives in one place, so the state the page boots
   into and the state the button sets are the same code. */
function setRail(open) {
  const btn = document.getElementById('devBtn');
  const panel = document.getElementById('devices');
  if (!panel) return;
  {
    // No pressed state on the button: the rail is a fixture of the map, not
    // something you switch on, so a lit button would just be lit forever.
    if (btn) btn.setAttribute('aria-expanded', String(open));
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
      document.documentElement.style.setProperty('--rail-right', open ? DEV_RAIL + 'px' : '0px');
      panel.classList.toggle('in', open);
      settle();
    });
    if (open) {
      devNaturalH = panel.getBoundingClientRect().height;
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
  const btn = document.getElementById('devBtn');
  const panel = document.getElementById('devices');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    /* One button, one direction: projects and hardware, both open. The rail is
       not something to switch off again - pressing this on the map you are
       already looking at should do nothing rather than slide it away. */
    const alreadyOut = !panel.hidden && panel.classList.contains('in');
    showView('map');
    if (!alreadyOut) setRail(true);
  });
}

/* The hardware panel is a little map of its own: three draggable boxes in one
   frame, joined by the same connector engine as the big one - same follow loop,
   same spring back. Its own coordinate space (DW x DH) so the two never mix. */
const DW = 100, DH = 100;

function renderDevices() {
  const box = document.getElementById('devices');
  if (!box) return;
  const stageOld = box.querySelector('.dev-stage');
  for (let i = EDGES.length - 1; i >= 0; i--) {
    if (EDGES[i].host === stageOld) EDGES.splice(i, 1);
  }
  box.textContent = '';
  const NS = 'http://www.w3.org/2000/svg';
  const svgEl = (tag, cls) => {
    const el = document.createElementNS(NS, tag);
    if (cls) el.setAttribute('class', cls);
    return el;
  };

  const head = document.createElement('div');
  head.className = 'dev-head';
  head.textContent = t('hardware');
  box.appendChild(head);

  const stage = document.createElement('div');
  stage.className = 'dev-stage';
  const lines = svgEl('svg', 'dev-lines');
  lines.setAttribute('viewBox', `0 0 ${DW} ${DH}`);
  lines.setAttribute('preserveAspectRatio', 'none');
  const ink = svgEl('g', 'ink');
  lines.appendChild(ink);
  const nodes = document.createElement('div');
  nodes.className = 'dev-nodes';
  stage.append(lines, nodes);
  box.appendChild(stage);

  const made = {};
  for (const item of DEVICES) {
    if (!item.name) continue;
    const card = document.createElement('div');
    card.className = 'dev-card';
    card.style.left = item.at.x + '%';
    card.style.top = item.at.y + '%';
    // Per-box width overrides the CSS default: the laptops run a touch wider, the
    // phone narrower (its specs are short and left a gap). The triangle and the
    // elbows measure the real rect, so they follow whatever these come out to.
    if (item.w) card.style.width = item.w;
    // spaceCards centres the three by height; a box can ask to ride a few px off
    // that (the phone reads better a touch below the go/acer midline).
    if (item.nudge) card.dataset.nudge = item.nudge;
    const name = document.createElement('span');
    name.className = 'dev-name';
    name.textContent = item.name;
    const sub = document.createElement('span');
    sub.className = 'dev-sub';
    // A category ahead of the year translates; a model number does not.
    sub.textContent = item.subKey ? t(item.subKey) + ' · ' + item.sub : item.sub;
    card.append(name, sub);
    for (const line of item.specs) {
      const row = document.createElement('span');
      row.className = 'dev-spec';
      // Specs are model names and numbers except for this one English word.
      row.textContent = line.replace('(integrated)', '(' + t('integrated') + ')');
      card.appendChild(row);
    }
    nodes.appendChild(card);
    makeDraggable(card);
    made[item.key] = card;
  }

  for (const link of LINKS) {
    const path = svgEl('path', 'trunk');
    ink.appendChild(path);
    // A shape of its own rather than a marker - see redrawLines for why.
    // `both` puts a head on each end; `arrow` only on the `to` end.
    const head = (link.arrow || link.both) ? svgEl('path', 'trunk-head') : null;
    if (head) ink.appendChild(head);
    const head2 = link.both ? svgEl('path', 'trunk-head') : null;
    if (head2) ink.appendChild(head2);
    // The label is HTML, not SVG text, so it can wear the same frame the boxes
    // do. redrawLines() moves it with the line.
    const label = document.createElement('span');
    label.className = 'dev-label';
    label.textContent = link.label;
    nodes.appendChild(label);
    EDGES.push({ a: made[link.from], b: made[link.to], path, head, head2, label,
                 elbow: link.elbow, host: stage, w: DW, h: DH,
                 labelDx: link.dx || 0, labelDy: link.dy || 0 });
  }

  const wasHidden = box.hidden;
  box.hidden = false;
  spaceCards();
  devNaturalH = box.getBoundingClientRect().height;
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

function spaceCards() {
  const stage = document.querySelector('.dev-stage');
  if (!stage) return;
  const height = stage.clientHeight;
  const cards = [...stage.querySelectorAll('.dev-card')];
  if (!height || cards.length < 2) return;
  const tall = cards.map(c => c.offsetHeight);
  const total = tall.reduce((a, b) => a + b, 0);
  const label = stage.querySelector('.dev-label');
  const need = ((label ? label.offsetHeight : 0) + DEV_LABEL_AIR) * (cards.length - 1);
  const edge = Math.max(0, Math.min(DEV_EDGE, (height - total - need) / 2));
  const free = height - total - edge * 2;
  if (free < 0) return;                      // too short to space; leave the fallback
  const gap = free / (cards.length - 1);
  let y = edge;
  cards.forEach((card, i) => {
    // The nudge shifts only where this card is drawn, not the running cursor, so
    // the boxes below it keep their places and its own gaps trade instead.
    const nudge = parseFloat(card.dataset.nudge) || 0;
    card.style.top = ((y + tall[i] / 2 + nudge) / height) * 100 + '%';
    y += tall[i] + gap;
  });
}

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
  document.body.classList.toggle('on-saturn', saturn);
  gate.inert = !saturn;
  wrap.inert = saturn;
  document.getElementById('viewBtn')?.setAttribute('aria-pressed', String(saturn));
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
    if (!skyShowing()) { requestAnimationFrame(step); return; }
    if (now - last >= 70) { last = now; render(spin); spin += rate; }   // ~14 fps
    requestAnimationFrame(step);
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
/* The airlock keeps its size when it is off to the left, so "is it on show" is
   the class the switch sets, not a measurement. */
const skyShowing = () => document.body.classList.contains('on-saturn');

const SHOT_RAMP = '.,-~:;=!*#';   // the planet's ramp, faint tail to bright head
const SHOT_TAIL = 14;             // cells of trail behind the head
const SHOT_FRAMES = 32;           // frames to cross, at the planet's own ~14fps
const SHOT_QUEUE_MAX = 14;        // most that can bank up while the tab is away

function shootStars(el) {
  if (!el) return;
  let timer = 0, pending = 0;

  /* Where the planet's ink actually is. Its <pre> is a 98x30 block of cells and
     most of the corners of that block are blank, so the element's own box would
     fence off sky that is in fact empty. Measured per run, because the planet
     turns and its outline breathes with it. */
  const inkBox = () => {
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
  };

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
       The same goes for the sky being away rather than the tab - while the map
       is the face on show this box has no width. */
    if (document.hidden || !skyShowing()) { pending = Math.min(pending + 1, SHOT_QUEUE_MAX); return; }
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
    if (document.hidden || !el.isConnected || !skyShowing()) return;
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
  spinSaturn(document.getElementById('saturn'));
  const btn = document.getElementById('viewBtn');
  if (btn) btn.addEventListener('click', () => {
    showView(document.body.classList.contains('on-saturn') ? 'map' : 'saturn');
  });
}

initTheme();
initLang();   // after the theme, because it repaints the switch labels

/* The map is the face the page opens on, with the hardware beside it: the rail
   is out from the start, so projects and machines are on screen together. */
showView('map');
measureBar();   // before anything measures itself against the bar
renderMap();
renderList();
renderDevices();
initDevices();
initSaturn();
setRail(true);
