<div align="center">

# wookieOS `v.0.3`

**a portfolio disguised as an operating system**

pixel-art meets dusk. flat shadows, hard edges, glitch accents.
not a template. not a behance clone. a desktop you can actually click around in.

[![live demo](https://img.shields.io/badge/live-demo-FF4FA0?style=flat-square&labelColor=150B22)](https://woosqa.vercel.app)
[![vanilla](https://img.shields.io/badge/stack-vanilla-9C7DF0?style=flat-square&labelColor=150B22)](#)
[![no build](https://img.shields.io/badge/build-none-C6F02C?style=flat-square&labelColor=150B22)](#)

</div>

---

## what is this

wookieOS is a retro desktop environment built entirely with vanilla HTML, CSS, and JS. it's a portfolio site that doesn't look like one — it's an OS you can interact with. open windows, drag them around, minimize, close. there's a taskbar, a start menu, a boot sequence, CRT scanlines, and a working email client.

everything is real. nothing is a mockup screenshot.

## features

- **multi-window manager** — open, drag, minimize, close, focus stacking
- **aero-peek taskbar** — hover previews on minimize, pinned app icons
- **boot sequence** — randomized flavor lines, BIOS-style top-left reveal
- **CRT effects** — scanlines + film grain with intensity slider
- **quick settings panel** — music player, mini calendar, system toggles
- **settings window** — wallpaper picker, accent colors, sticky note colors, night light
- **email client** — inbox with fake emails, compose with real `mailto:` send
- **start menu** — profile, app launcher, shutdown with CRT power-off animation
- **desktop context menu** — right-click for refresh, about, settings
- **mobile fallback** — drops the OS metaphor below 900px, clean card layout
- **localStorage persistence** — settings survive page reloads

## run it

no build step. no bundler. no `npm install`.

```bash
# just open it
open index.html

# or serve locally (for images + youtube embed)
npx serve .
```

## windows

| icon | window | type | description |
|:----:|--------|------|-------------|
| ◐ | consultly | browser | case study |
| ◐ | frenzly | browser | case study |
| ◐ | storyloop | browser | case study stub |
| ▤ | more.work | folder | project archive |
| ✎ | about.me | notepad | bio + skills |
| ✉ | contact | mail | email client |
| ⚙ | settings | control panel | customize everything |
| ▤ | trash | — | you know what this is |

## stack

```
index.html    → the whole page
styles.css    → all the pixels
app.js        → window manager + settings + boot + music
images/       → wallpapers + case study assets
```

vanilla only. will port to astro + vercel later.

## screenshots

> coming soon — once the figma case studies are dropped in

## fonts

DotGothic16, VT323, Pixelify Sans, Silkscreen, Press Start 2P — loaded from google fonts. degrades to monospace if offline.

---

<div align="center">

built with care. not with react.

`wookieOS v.0.3 · '02 edition`

</div>
