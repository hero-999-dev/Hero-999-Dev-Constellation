# Hero Dev — Constellation

A single page that maps every repository in one place: `Hero Dev` in the middle, each
project branching off it, and the Pixel Pomo family grouped with its own children.
Click any node to open that repository on GitHub, or drag it around — the connectors follow and
the card springs back to its place when let go. The connector layer is `overflow: visible`: an
`<svg>` clips to its viewBox, so dragging a card past the edge of the map cut the tail off the
line and left it looking half drawn.

**Live:** https://hero-999-dev.github.io/Hero-999-Dev-Constellation/

## What is here

| | |
|---|---|
| `index.html` | The page |
| `assets/css/styles.css` | Palette and layout |
| `assets/js/app.js` | Repository list, map and rings, dragging, theme, password gate |

The whole page is set in one face: Palatino, the softest of the serifs every system already
has, with Georgia as the fallback. Nothing is bold — weights run 400 and 500 only, because
600 read heavy at these sizes. The heading, the Language button and the theme switch share
one size, padding and shape.

Light and dark themes use the same palette as `warsaw-cat-sitting` — cream, sand, amber,
orange, terracotta, brown — the same values, not an approximation. The choice follows the system by default and is remembered in
`localStorage`, and the switch is on the lock screen as well as in the header.

## Adding a repository

Everything comes from the `BRANCHES` array at the top of `assets/js/app.js`. Both the map
and the stacked list on narrow screens are built from it, so one edit covers both.

A leaf entry:

```js
{
  title: 'Name shown on the card',
  desc:  'One short sentence.',
  repo:  'exact-repo-name',
  lang:  'Dart',
  private: true,
  x: 1005, y: 238,       // point on the 1200 x 840 grid the connectors use
}
```

A group is an entry with `ring` and `children` instead of `repo` — the circle drawn round
the cards is the grouping, and its name is the ring's label. Pixel Pomo is the one group.

### The page's own repository

It is neither a card nor a group. `SELF` names the **outer** ring — the circle that holds
everything is the repository that draws it. The name is a link like any card, which needs
`.ring-link` to switch `pointer-events` back on, because the map layer has them off so the
header strip stays clickable through it. Its `desc` is not drawn on the map — the ring
carries only its name — but the stacked list has no ring, so below 861px the repository is
the list's first row and shows the description there.

### Where the coordinates come from

The rings are not decoration fitted around whatever the cards do; they constrain the
layout, and the numbers were solved rather than eyeballed. Two things pull against each
other:

- a ring that really **contains** its cards needs roughly 1.4x the half-extent of the box
  those cards sit in, so cards parked in the corners push their own ring off the canvas;
- the Pixel Pomo ring then has to sit inside the outer ring as well — and it sits far to
  the left, where the outer ellipse has already narrowed.

What buys the clearance: a **vertical column** for the cluster (the arrangement with the
smallest horizontal reach, so its ring pokes out least), a **tall spread on the right**
(which raises the outer ring without touching the inner one), and a **generous pad** on the
outer ring. Raising the canvas height alone does nothing — the ring is fitted to the cards,
not to the canvas.

Descriptions are one line and the badges one row for the same reason: a taller card breaks
the geometry.

Measured on the live page:

| | |
|---|---|
| inner ring inside the outer | 0.909 (1.0 = touching) |
| outer ring contains every card | 0.892 |
| inner ring contains its three | 0.924 |
| outer ring inside the canvas | x 24..1166, y 10..831 of 1200 x 840 |

If you move a card, re-check those four numbers — a bad coordinate shows up as a ring
running off the edge or crossing the other one.

### Why the strokes live in one group

Rings and connectors are drawn with **opaque** colours inside a single `<g class="ink">`, and
the fade sits on that group rather than on each stroke. Translucent strokes *add* where they
overlap — two at `.3` come out at `.51` — which put a visibly darker smudge everywhere a
connector crossed a ring. A group with `opacity` is composited once and then faded, so a
crossing paints the same as a plain line.

Measured on the three places a Pixel Pomo connector crosses its ring, reading the painted
alpha:

| | ring alone | at the crossing | overshoot |
|---|---|---|---|
| alpha per stroke | 97 | 157 | **+60** |
| one faded group | 82 | 82 | **0** |

Ring labels stay outside the group, at full strength.

### Fitting the screen

The page never scrolls. Header, then the map takes every pixel that is left, so the outer
ring sits close to the top and bottom edges whatever the window is. Three things make that
hold:

- the heading strip and the footer line are **laid over** the map, not stacked above and
  below it — giving them their own rows cost the map about 90px of height;
- cards are sized in **`cqw`**, a share of the map, and their height is pinned too. Fixed
  pixels were a bug: on a 480px-wide map the cards were 40% of its width and the rings burst
  out of the canvas. Line wrapping does not scale linearly either, so a card left to size
  itself grew the ring (measured: ry 411 to 435);
- the header bar is `position: fixed`, so the map gets the whole window height and the ring
  runs to within ~10px of the top and bottom edges. The map is `pointer-events: none` with the
  cards switched back on, so the strip stays clickable through it;
- the strip keeps its fill and its rule, but on a `::before` layer that `layoutRings()` masks
  with a hole the shape of the outer ring — so the band stops exactly where the ring runs and
  is whole everywhere else. Masking the bar itself would have taken the controls with it, and
  a `backdrop-filter` on that layer had to go: blur under a mask samples across the cut and
  leaves a seam at the crossings. The mask edge is feathered (98.9% to 100%) rather than a
  single step, which would staircase along the curve;
- the outer ring is pinned to the centre of the canvas rather than to the middle of what it
  holds, so its top and bottom margins are equal — the cards are not quite symmetric (the
  centre card is taller), which left the ring about a unit low;
- the heading and the theme switch both ride in that strip, in the same pill. The heading used
  to sit in the page underneath, where the strip's blur washed it out;
- the private-repos note sits bottom-left, outside the ellipse: measured across five screen
  sizes it never crosses the ring or lands on a card;
- the map's own box is fitted in JS (`fitMap`). CSS drops the aspect ratio rather than the
  height when `max-width` binds — at 1920x1080 that gave a 1240x1006 map instead of
  1240x868, stretching the rings while the cards stayed put.

Measured across 2560x1440, 1920x1080, 1600x900, 1440x900, 1366x768, 1280x720, 1024x600 and
a portrait 900x1600: nothing overflows, the ratio holds, and `encloses` / `inner inside
outer` read 0.891 / 0.909 at every one of them.

On narrow screens the map is replaced by the stacked list, and that list scrolls inside its
own area rather than scrolling the page.

## Hardware

A **Hardware** pill sits beside the language picker; pressing it drops one framed panel
under it, pressing it again puts it away — the same behaviour as Used Coding Languages.
Inside: the three machines and how each reaches the others.

```
   Lenovo Legion Go ◀──┐
        ▲              │  ┌── moto g23   (phone)
        │ ↕            └──┤
        ▼              ┌──┘
   Acer Swift 3 ◀──────┘
   (laptops ↕ each other; phone → each laptop, right side, 90°)
```

The two laptops down the left and the phone pushed out to the right. The two laptops reach
each other both ways, so their side is a straight double-headed line down the left. The phone
only ever reaches **out** — you SSH from it, not into it — so its two links are one-way, and
they are **right-angled**: the line leaves the phone's top or bottom, runs up or down to the
laptop's height, then turns once and enters the laptop's **right side**, so the head arrives
horizontally rather than on a slant. All three sides are the same tailnet, so they carry the
one label, `termius / tailscale`, each centred on its own run.

Inside that frame it is a little map of its own: three boxes the same connector engine drags
and springs back, joined by the same curves. `DEVICES` holds the boxes and their resting
places on a 100 x 100 grid — `at.x` is the triangle (spaceCards shares out the y and leaves
the x alone); `LINKS` holds who reaches whom, `both: true` puts a head on each end and
`arrow: true` only on the `to` end, and `elbow: true` routes a link as a right angle into the
target's right side instead of a diagonal.

`redrawLines()` takes each edge's own host element and coordinate space, so the big map and
this one share the code without sharing a grid, and draws a head at either end an edge asks
for — the line is pulled back to the box edge under each head so none hides under a card. One
catch worth remembering: a closed panel measures 0x0, so its connectors cannot be drawn until
it opens — the toggle redraws.

Card width and panel width pull against each other twice over: the phone has to clear the
laptops **and** leave the left side room for a centred label, but a card narrowed to buy that
room wraps its specs onto more lines and grows tall enough to overflow. The way out is to
widen the panel (`DEV_W` 360px, the one constant the CSS width, the map's rail and the room
test all read) and set the card widths per box rather than one share for all: the two laptops
run `56%` and the phone `42%` (its specs are short and left a gap), passed as `w` on the
DEVICES entry and applied inline. The wider a laptop, the fewer lines its specs wrap onto, so
they come out **shorter**, not taller — which is what leaves room for the taller Acer entry
(it carries its display and its SATA split now). Measured open, all four locales: no card
overlaps another, no label lands on a card or another label, nothing wraps past its box,
nothing leaves the panel.

One thing the per-box widths moved: a wider laptop reaches far enough right to touch the
phone's vertical run, so the elbow label can no longer sit at the run's own midpoint — it is
centred in the clear band between the phone and the laptop instead, where no card is whatever
the two heights come out to.

The `DEVICES` array in `app.js` holds it. **Model names and part numbers only** — no serial
numbers, no IMEI, no MAC addresses, no SKU strings, no phone numbers, no carriers. A model
number says "this kind of machine"; a serial says "this machine", and the second one has no
business on a public page.

The map now leaves a **rail** either side (`--rail`, 250px above the 861px breakpoint) so the
language panel and this column always have room and never sit on the ring. `fitMap()` measures
the stage's *content* box for that reason — `clientWidth` includes padding, and measuring off
it made the map wider than its allowance, which flex then squashed in width alone and took the
aspect ratio with it (1440x900 gave a 900x900 map instead of 900x630).

Three things this cost, all of them the same shape of mistake — a check that looked right and
measured the wrong box:

- `justify-content: center` spills a too-tall column past **both** ends, and `scrollHeight`
  reports the box as fitting. The stand-down test measures the real extent instead, first
  child's top to last child's bottom.
- An author `display` beats the UA's `[hidden] { display: none }`, so `hidden = true` on a
  `display: flex` column changed nothing. `.devices[hidden] { display: none }` fixes it.
- The column's heading landed behind the language and theme controls; it starts at
  `top: var(--bar-h)` now.

Nothing on the page scrolls, inside a panel or out of it. If the column cannot fit — under
160px wide, or taller than the window — it stands down rather than spilling. Below 861px the
map gives way to the stacked list, one column down the left, and the device column is hidden.

Measured across 2560x1440, 1920x1080, 1600x900, 1440x900, 1366x768, 1280x720 and 1024x600:
ratio holds, page never scrolls, both side columns clear the ring, nothing clipped.

## Site language

A picker sits beside the theme switch, on the lock screen and in the header: **English,
Türkçe, Polski, Deutsch**. The choice is remembered in `localStorage`; with nothing stored
the browser's own language decides, falling back to English.

All the strings live in one flat `I18N` table in `app.js`. Repository names, the Pixel Pomo
label and language names (Dart, Python, HTML…) are proper nouns and stay put — only prose
and the two category badges (`Extension`, `Desktop`) are translated.

Every translation has to stay **one line** on a card. Card height is pinned and feeds the
ring geometry, so a second line is clipped rather than fitted — German and Polish needed
shorter wording, and the `Live` badge moved off the map card entirely because three badges
stop fitting one row once `Public` becomes `Öffentlich`. It shows in the list view instead.
Measured across four locales x three screen sizes: nothing clipped.

Switching language throws the map away and draws it again rather than patching text in
place: every card's text changes, card size feeds the ring geometry, and the rings are fitted
to measured cards. The resize and load listeners are registered once, outside `renderMap`, so
repeated switches cannot stack them.


### The ghost cards

`renderMap()` used to append. `initLang()` runs before the gate is answered and rebuilds the
map, then `openConstellation()` drew it again on top — two complete sets of cards, one hiding exactly
under the other until a drag pulled the top one away and revealed its twin. It clears its own
containers and its own edges now, so it is safe to call from anywhere. Counted after the fix:
9 cards, 8 connectors, 2 rings, no duplicate titles.

### Rails

There is no rail by default: the map takes the whole window and the ring runs up over the
header strip, which is masked where it crosses. Opening **Hardware** sets `--rail-right`, the
map redraws itself into what is left and shifts west; closing gives the space back.

## Cache

`index.html` links its CSS and JS with a `?v=` stamp. GitHub Pages serves assets with a
ten-minute cache, which during a run of quick edits means the browser keeps showing the old
build and the fix looks like it did not work. Bump the stamp when you deploy.

## The gate

The password screen is the airlock. The name **Constellation** banners the top in
wide-tracked caps; the whole identity column — **Hero Dev** and its handle at the top, the
password card left-aligned in the middle, the two ASCII references credited bottom-left in a
small monospace log — is pinned down the left; and the Saturn is turned up huge behind it,
anchored to the right and reaching back across the middle. Below 720px the column centres and
the planet drops behind it at low opacity so the text stays legible; the column scrolls inside
the panel rather than the page.

### The Saturn

The signature is a **Saturn drawn the way the spinning-donut demo draws a torus** (both are
credited on the screen). `spinSaturn()` in `app.js` samples two surfaces — a banded globe and
a flat ring with a Cassini gap — rotates the whole body, projects each point to a character
cell, keeps the nearest at each cell with a z-buffer, and picks a glyph from `.,-~:;=!*#$@` by
how much the point faces a fixed light. One buffer for both surfaces is what lets the ring pass
correctly in front of the globe's underside and behind its top.

The body is pitched a fixed amount and then turned continuously about the vertical, so — like
the donut — the **whole thing rotates**: the ring sweeps open and shut and the globe's bands
wheel round with it, past a fixed light so a bright surface oval carries the eye. It runs at
about 14 fps only while the gate is on screen, and stops the moment the gate is removed (the
loop checks `isConnected`). Reduced-motion holds a single frame. Its `<pre>` is `aria-hidden`
— it is decoration, not content.

## The password

The page asks for a password before it shows the map. This is a static site: there is no
server to check anything, so the check runs in the browser and the whole page is already in
the source. **It is a curtain, not a lock.** It keeps the constellation from being read at a glance by
anyone who lands on the URL; it does not protect anything, and nothing private should be put
on this page.

Only public repositories open for visitors. Private ones are marked and their links work for
the owner alone.

To change the password, replace `PASS_HASH` in `assets/js/app.js` with a new SHA-256:

```bash
node -e "console.log(require('crypto').createHash('sha256').update('NEW PASSWORD').digest('hex'))"
```

## Running it locally

No build step. Any static server works:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`. Opening `index.html` straight from disk works too,
except the password check — `crypto.subtle` needs `https://` or `localhost`.
