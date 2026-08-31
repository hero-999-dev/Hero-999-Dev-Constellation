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
    gateSub: 'Enter the password to open the constellation.', password: 'Password', open: 'Open',
    wrong: 'That is not it. Try again.',
    heading: 'Everything in one map',
    hardware: 'Hardware', dark: 'Dark', light: 'Light',
    private: 'Private', public: 'Public', live: 'Live',
    Extension: 'Extension', Desktop: 'Desktop',
    dPomo: 'Pixel-art Pomodoro timer.', dWeb: 'Runs in the browser.',
    dKit: 'Editor for its sprites.', dCube: 'Fifteen tools for YouTube.',
    dCat: 'Cat sitting in Warsaw.', dSplit: 'Splits video for Discord.',
    dClaw: 'When to use Claude.', dLea: 'A hook for Claude Code.',
    dSelf: 'A map of every repository.',
  },
  tr: {
    gateSub: 'Açmak için parolayı gir.', password: 'Parola', open: 'Aç',
    wrong: 'Bu değil. Tekrar dene.',
    heading: 'Her şey tek haritada',
    hardware: 'Donanım', dark: 'Koyu', light: 'Açık',
    private: 'Özel', public: 'Herkese açık', live: 'Canlı',   // not 'Açık' - that is the light theme
    Extension: 'Eklenti', Desktop: 'Masaüstü',
    dPomo: 'Piksel Pomodoro sayacı.', dWeb: 'Tarayıcıda çalışır.',
    dKit: "Sprite'ları için editör.", dCube: 'YouTube için on beş araç.',
    dCat: "Varşova'da kedi bakımı.", dSplit: 'Videoyu Discord için böler.',
    dClaw: 'Claude ne zaman uygun.', dLea: 'Claude Code için hook.',
    dSelf: "Her repo'nun haritası.",
  },
  pl: {
    gateSub: 'Wpisz hasło, aby otworzyć.', password: 'Hasło', open: 'Otwórz',
    wrong: 'To nie to. Spróbuj ponownie.',
    heading: 'Wszystko na jednej mapie',
    hardware: 'Sprzęt', dark: 'Ciemny', light: 'Jasny',
    private: 'Prywatne', public: 'Publiczne', live: 'Na żywo',
    Extension: 'Rozszerzenie', Desktop: 'Desktop',
    dPomo: 'Pikselowe Pomodoro.', dWeb: 'Działa w przeglądarce.',
    dKit: "Edytor jego sprite'ów.", dCube: '15 narzędzi do YouTube.',
    dCat: 'Opieka nad kotami.', dSplit: 'Dzieli wideo pod Discorda.',
    dClaw: 'Kiedy używać Claude.', dLea: 'Hook do Claude Code.',
    dSelf: 'Mapa wszystkich repozytoriów.',
  },
  de: {
    gateSub: 'Passwort eingeben, um zu öffnen.', password: 'Passwort', open: 'Öffnen',
    wrong: 'Das war es nicht. Noch einmal.',
    heading: 'Alles auf einer Karte',
    hardware: 'Hardware', dark: 'Dunkel', light: 'Hell',
    private: 'Privat', public: 'Öffentlich', live: 'Live',
    Extension: 'Erweiterung', Desktop: 'Desktop',
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
  const input = document.getElementById('gateInput');
  if (input) input.placeholder = t('password');
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
    if (!fits) { rigs.hidden = true; btn?.classList.remove('on'); btn?.setAttribute('aria-expanded', 'false'); }
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
      // A fixed inset from the top does not work: the ellipse narrows fast up
      // there, so the ends of the word hang out over the stroke. Solve the
      // ellipse for the width this particular text needs instead - that gives
      // the highest line it fits on - then drop the baseline by the cap height
      // so the letters, not the baseline, are what sits inside.
      const size = parseFloat(getComputedStyle(ring.label).fontSize) || 22;
      const halfText = ring.label.getComputedTextLength() / 2 + 26;
      const ratio = Math.min(halfText / rx, 0.999);
      ring.label.setAttribute('x', cx);
      ring.label.setAttribute('y', cy - ry * Math.sqrt(1 - ratio * ratio) + size * 0.96);
    }
  }
}

function renderMap() {
  linesEl = document.getElementById('mapLines');
  mapEl = document.getElementById('map');
  const nodes = document.getElementById('mapNodes');

  /* Drawn twice over: initLang() runs before the gate is answered and rebuilds
     the map, then openConstellation() drew it again on top - two full sets of cards, one
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

const settle = () => {
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
  // openConstellation() calls this again on top. renderMap clears its own
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
    key: 'go', at: { x: 30, y: 12 },
    name: 'Lenovo Legion Go',
    sub: 'Handheld · 2023',
    specs: ['AMD Ryzen Z1 Extreme · 8C/16T', 'Radeon RDNA 3 (integrated)',
            '16 GB LPDDR5X-7500', '512 GB NVMe', '8.8" 2560×1600', 'Windows 11'],
  },
  {
    key: 'phone', at: { x: 70, y: 50 },
    name: 'moto g23',
    sub: 'Phone · 2023',
    specs: ['MediaTek Helio G85', '8 GB RAM · 128 GB', '6.5" 1600×720 90 Hz', 'Android 14'],
  },
  {
    key: 'acer', at: { x: 30, y: 88 },
    name: 'Acer Swift 3',
    sub: 'SF314-511 · 2021',
    specs: ['Intel Core i5-1135G7 · 4C/8T', 'Iris Xe (integrated)',
            '16 GB LPDDR4X-4267', 'Dual boot: Windows 11 + Linux Mint'],
  },
];

/* The two laptops reach each other both ways (`both`), so the left side is
   double-headed. The phone only ever reaches OUT - you SSH from it, not into it
   - so its two sides are one-way (`arrow`), the head on the laptop. All three
   sides ride the same tailnet, so they carry the one label. */
const LINKS = [
  { from: 'phone', to: 'go', label: 'termius / tailscale', arrow: true },
  { from: 'phone', to: 'acer', label: 'termius / tailscale', arrow: true },
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

function initDevices() {
  const btn = document.getElementById('devBtn');
  const panel = document.getElementById('devices');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const open = panel.hidden || !panel.classList.contains('in');
    btn.setAttribute('aria-expanded', String(open));
    btn.classList.toggle('on', open);
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
    const name = document.createElement('span');
    name.className = 'dev-name';
    name.textContent = item.name;
    const sub = document.createElement('span');
    sub.className = 'dev-sub';
    sub.textContent = item.sub;
    card.append(name, sub);
    for (const line of item.specs) {
      const row = document.createElement('span');
      row.className = 'dev-spec';
      row.textContent = line;
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
                 host: stage, w: DW, h: DH,
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
    card.style.top = ((y + tall[i] / 2) / height) * 100 + '%';
    y += tall[i] + gap;
  });
}

/* ------------------------------------------------------------------ gate */

const PASS_HASH = 'e7626d921d49c0d82020f11470c78af03e2d605c2f6c08823074a6d3e12a98c5';

async function sha256(text) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function openConstellation() {
  document.getElementById('gate').remove();
  document.getElementById('constellation').hidden = false;
  renderMap();
  renderList();
  renderDevices();
  initDevices();
}

function initGate() {
  const gate = document.getElementById('gate');
  // Answered already this session - do not ask again on every reload.
  if (sessionStorage.getItem('hdh-open') === '1') {
    openConstellation();
    return;
  }
  gate.hidden = false;
  const form = document.getElementById('gateForm');
  const input = document.getElementById('gateInput');
  const error = document.getElementById('gateError');
  input.focus();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (await sha256(input.value) === PASS_HASH) {
      sessionStorage.setItem('hdh-open', '1');
      openConstellation();
      return;
    }
    error.hidden = false;
    input.value = '';
    input.focus();
    const card = form;
    card.classList.remove('shake');
    void card.offsetWidth; // restart the animation
    card.classList.add('shake');
  });
}

initTheme();
initLang();   // after the theme, because it repaints the switch labels
initGate();
