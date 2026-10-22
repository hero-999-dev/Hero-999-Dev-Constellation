# Hero Dev — Constellation

A single page that maps every project in one place. A project that is several repositories —
the app, its web entrance, its tools — is a **group**: an ASCII frame round its cards with its
name written into the top rule. A project that is one repository stands on its own inside the
outer frame, which is the page's own repository, `CONSTELLATION`. Click any card to open that
repository on GitHub.

**Live:** https://hero-999-dev.github.io/Hero-999-Dev-Constellation/

## What is here

| | |
|---|---|
| `index.html` | The page |
| `assets/css/styles.css` | Palette and layout |
| `assets/js/app.js` | Repository list, map and frames, hardware panel, theme, language |

The whole page is set in one face: Palatino, the softest of the serifs every system already
has, with Georgia as the fallback. Nothing is bold — weights run 400 and 500 only, because
600 read heavy at these sizes. The heading, the Language button and the theme switch share
one size, padding and shape.

Four themes, taken in turn by the one button (it names the next one): **Dark** and **Light**
use the same palette as `warsaw-cat-sitting` — cream, sand, amber, orange, terracotta, brown —
the same values, not an approximation. **Black** and **White** are the same page in greys, on
pure black and pure white. A grey theme is the dark or light one with its palette swapped
(`data-mono` on `<html>`), so every rule written for dark or light holds for it too. The choice
is remembered in `localStorage`.

## Adding a repository

Everything comes from the `BRANCHES` array at the top of `assets/js/app.js`. Both the wide
map and the list on a phone are built from it, so one edit covers both.

A single repository:

```js
{
  id: 'cat', title: 'Name shown on the card',
  desc:  'dCat',           // an I18N key - one line in all four languages
  repo:  'exact-repo-name',
  lang:  'HTML',
  private: true,
  live: 'https://…',       // optional: adds a [Live] badge
}
```

A group is an entry with an `id`, a `ring` (its name) and `children` instead of `repo`. The
frame drawn round the cards is the grouping, so a group has no card of its own.

Then give the group a place in `COLUMNS`, by `id` (`self` is the single repositories):

- `COLUMNS.narrow` is the phone's two columns — share the groups out so the two come to about
  the same height;
- `COLUMNS.wide` is a list of arrangements for the wide screen. `fitMap()` measures each one and
  keeps whichever lets the cards be set biggest, so a window that is wide for its height gets
  four columns and one that is tall for its width gets three.

Clicking a card opens it: the box grows out of the card to just inside the outer frame (the
whole list on a phone), everything else fades, and it carries a longer description, the badges
and a link to GitHub (and to the live site where there is one). Esc, the `x` or a click outside
puts it back. A middle or Ctrl/Cmd-click still goes straight to GitHub. The text lives in
`assets/js/details.js`, keyed by `repo`, two paragraphs per language — add an entry there when
you add a card, or the card opens with its one-line description.

Screenshots go in `assets/img/shots/` as WebP (about 1400px on the long side, quality 80) and
are listed per `repo` in `SHOTS` at the end of `details.js`; the first is shown large and the
rest as thumbnails. They were taken by running each project — the live site, a web build, or
the desktop app under a virtual display. Projects whose public face is behind a password are
left without one on purpose.

Only projects belong here — course work and one-off repositories stay off the page.

Descriptions are one line and the badges one row: card height is pinned (`NODE_ROWS`), so a
second line is clipped rather than fitted. Check all four languages after editing.

### The page's own repository

It is neither a card nor a group. `SELF` names the **outer** frame — the frame that holds
everything is the repository that draws it. The name is a link like any card, which needs
`.ring-link` to switch `pointer-events` back on, because the map layer has them off so the
header strip stays clickable through it. On a phone it is the name over the single
repositories, with the same link.

### Fitting the screen

The page never scrolls. The map takes the stage less the hardware rail, and the outer frame
stands in the band between the row of controls and the signature — the same band the hardware
panel's frame stands in, so the two bottom rules line up. Everything in the block of columns
(the cards, the gaps between them, the cell the frames are drawn in) is set from one custom
property, `--card-fs`, so `fitMap()` measures the block once at a base size and scales it to
fit inside the frame with its pad, up to `CARD_FS_MAX`.

On narrow screens the map is replaced by the two-column list, and that list scrolls inside its
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
160px wide — it stands down rather than spilling. Below 861px none of that applies: the map
gives way to the stacked list and the machines become a page of their own, so the rail and the
room test both stand aside — see **The phone**.

Too short a window is answered by the type first. How tall three boxes come to is how many
lines each of them wraps to, which is the language's business, so the stylesheet cannot know
it — `fitDevType()` measures the stack against the panel and takes the type down by exactly
what it is over. Everything inside the panel is set from the one custom property, `--dev-fs`
on `.dev-stage`, so the boxes, the runs and the labels come down together and the runs still
meet the boxes they join. Left to the stylesheet's own floor the stack simply ran past the
frame: `spaceCards()` had nothing to share out, gave up, and left the boxes on the shares in
`DEVICES` — which put the last one through the bottom rule beside the map, and through the
bottom of the screen on a phone.

Under the floor the type is cut to, the machines stand down instead: `devFits()` says no below
8px — the same floor `--dev-fs` carries — and `capSidePanels()` puts the panel away and gives
the rail back, `setRail()` declines to bring it out again. Two things it does **not** do. The
`Projects & Hardware` button stays, because on a wide screen it is the way over to the
projects as well, and the projects are readable at sizes the machines are not; it crosses
without a rail. And none of it applies on a phone, where the machines are a page of their own
and standing them down would leave no way in at all — there the type simply keeps going down.

The judgement is made on the type, not on the panel's height, and it is made **last** in
`settle()`. The panel is stretched between a top and a bottom, so its height is always exactly
the room there is and says nothing about the room it wants — measuring that was why the old
test never once fired. Made before `paintDevFrame()`, it reads the box from the pass before,
which on the step from a phone-shaped window to a wide one is a different box entirely.

Measured across 2560x1440, 1920x1080, 1600x900, 1440x900, 1366x768, 1280x720 and 1024x600:
ratio holds, page never scrolls, both side columns clear the ring, nothing clipped. Those are
all one shape of window, which is how the short ones got away.

Measured again, in the shapes and on the screens the first pass never had — 3840x2160 and
2560x1600 and 3440x1440 and 2560x1080 and 1280x1024 and 1024x768 beside the usual ones, at
device pixel ratios 1, 1.25, 1.5, 1.75, 2 and 2.625, and as a page at 800x1280, 412x915,
360x640 and 320x568. The boxes stand inside their frame at every one of them, the tightest
clearance 2.3px, in all four languages and in Consolas, Cascadia Mono, Courier New and DejaVu
Sans Mono — the stack is a system font list, so a box is a different width on a machine with a
different one, and the narrowest clearance across the four was 6.8px. On top of the windows
themselves the panel's own stage was stepped from 120px to 900px in tens at each of them, and
the type it lands on was checked against the floor: down to 1600x430 the machines show and
stay inside; at 1600x400 they stand down, which is the 8px floor doing what it says. Dragged
from a phone-shaped window straight to a wide one they stand down too, and pressing the pill
after the window grows again brings them straight back.

## The phone

Below 861px the page is three faces rather than two, and they cross the other way: the sky
holds still and the pages ride up over it from under the bottom edge.

- **Home** is the face it opens on — the sky, the planet far off and faint, the ship crossing
  it. The two corner blocks are its own: the identity bottom-left, the ASCII credits
  bottom-right, both small. On the other two faces the column wants the whole screen.
- **Projects** is the same cards as the map in two columns, each group under its own name and
  the single repositories under `CONSTELLATION`. No frames — the heading is the grouping.
- **Hardware** comes up the same way, over the projects, the whole width of the screen.

Every way across stands in the bar, which wraps to two rows: `Home`, `Projects`, `Hardware`,
then the language and the theme. The one `Projects & Hardware` pill is the wide screen's — it
opens both at once because there they stand side by side; here they are two pages and take a
pill each. The name over the bar is dropped: the planet is the identity on this screen, and
the row the word would take is a row the pages never get back.

What it rests on:

- The face that has left goes out of **paint**, not just out of view. Pushed off with a
  transform alone it was still being drawn on the phone this was fitted to, and the cards came
  up over the planet. `visibility` is held back by the length of the slide, so the face that is
  leaving is still there to watch it go.
- The panel's box belongs to the **stylesheet** here. On the map it is pinned to the rules the
  outer frame drew (`siteRule`), and there is no map on a phone — so `paintDevFrame()` hands
  the inline box back and draws its frame to whatever the CSS gives it. `capSidePanels()`
  steps aside for the same reason: judged by the 450px rail test the panel was always too
  narrow, which shut its button and left the machines with no way in at all. And the rail is
  out from boot only where there is a map — a page that opened itself would be lying over the
  projects the first time they were asked for.
- The planet is set smaller than the map's: its block is 98 characters across, so at a phone's
  width anything larger runs the rings off both edges, which reads as a planet you are
  standing on rather than one far off.

The machines keep the desktop triangle, fitted to the screen rather than redrawn: the cards
come out around 8px and the phone box at `at.x: 76%` still lands inside. If that reads too
small the next step is one column — and `DEVICES` has to be reordered `go`, `acer`, `phone`
for it, or the straight `go ↔ acer` run passes through the box in the middle.

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

The password screen is the airlock. One header line carries the identity — **Hero Dev**, in
the warm gradient the H tile is drawn in — on the left, the name **Constellation** centred on
the page in wide-tracked caps, and the theme/language switch on the right, all on the same
baseline. Under the identity the prompt breaks after "to" over a **frameless** field — no box,
just a hairline the amber picks up on focus — and a slim Open pill; the four ASCII references
are credited bottom-left in a small monospace log. Behind all of it a scatter of faint
asterisks (`fillStars()`) is the deep-space ground the Saturn turns against. Below 720px the
header stacks, the column centres, and the planet drops behind it at low opacity so the text
stays legible.

### The Saturn

The signature is a **Saturn drawn the way the spinning-donut demo draws a torus** (both are
credited on the screen). `spinSaturn()` in `app.js` samples two surfaces — a banded globe and
a thin ring with a Cassini gap — projects each point to a character cell, keeps the nearest at
each cell with a z-buffer, and picks a glyph from `.,-~:;=!*#$@` by how much the point faces a
fixed light. One buffer for both surfaces is what lets the ring pass in front of the globe's
underside and behind its top; the fixed tilt opens the ring into the sideways ellipse of the
classic view.

Both surfaces turn at the one rate, off the same `spin`. The globe spins on the tilted axis —
bold longitude markings (belts, a mottle, one bright storm) wheel past the fixed light — and
the ring turns with it: radial spokes keyed to `a − spin` sweep round the band, so the ring
reads as rotating too rather than sitting still. The globe's silhouette never changes, so the
drawn-cell count holds steady while the glyphs inside it move. About 14 fps; a system
reduce-motion setting only eases it to a gentler pace (the turn is the point and was asked for
plainly) rather than freezing it. It runs only while the gate is up and stops the moment the
gate is removed (the loop checks `isConnected`). Its `<pre>` is `aria-hidden` — decoration.

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
