# Roll Now Design System

## Overview

Roll Now is a "dopamine" style consumer brand — bright, high-saturation, playful. This design system was built from a **brand-guidelines-only** brief: no codebase, Figma file, or existing product screens were attached. Everything here derives from:

- `uploads/logo.png` — the Roll Now wordmark/logo (speech-bubble shape, "ROLL" in black, "NOW" in red, yellow motion arrow, three colored tick marks)
- `uploads/BebasNeue-Regular.ttf`, `uploads/Montserrat-VariableFont_wght.ttf`, `uploads/Montserrat-Italic-VariableFont_wght.ttf` — the two brand typefaces
- A short style brief (Chinese): style = "多巴胺" (dopamine), keywords = high saturation, colour-block/clashing colours, energetic, circular motifs, arrows. Primary colors `#D40C2E` (red) and `#1D1E2C` (near-black navy); secondary colors `#7dcd85` (green), `#8390fa` (periwinkle blue), `#fac748` (yellow), `#ffffff` (white). Display type: Bebas Neue. Body type: Montserrat.

No product screenshots, apps, or marketing pages were provided, so the product itself (what "Roll Now" actually does — food delivery? rides? a rewards/spin game? logistics?) is **unconfirmed**. The UI kit in this system is a generic, brand-plausible mobile app (home feed / order flow / rewards) built to exercise the components — **not** a recreation of a real Roll Now product screen. If you have real app screens, a Figma file, or a codebase, attach them and this kit should be rebuilt against that source of truth.

## Index

- `styles.css` — root stylesheet, `@import`s everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing/radius/shadow/motion), `fonts.css` (`@font-face`)
- `assets/fonts/` — Bebas Neue + Montserrat (regular + italic variable) TTFs
- `assets/logo/roll-now-logo.png` — the only real brand mark provided
- `assets/icons/` — Phosphor icon set (CDN-substituted, see Iconography)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/` — Button, IconButton, Card, Badge, Tag
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Dialog, Toast, Tooltip
- `components/navigation/` — Tabs
- `ui_kits/mobile_app/` — generic Roll Now mobile app screens (Home, Order, Rewards, Profile)
- `SKILL.md` — Claude-Code-portable skill wrapper

### Components

| Component | Location |
|---|---|
| Button | `components/core/Button.jsx` |
| IconButton | `components/core/IconButton.jsx` |
| Card | `components/core/Card.jsx` |
| Badge | `components/core/Badge.jsx` |
| Tag | `components/core/Tag.jsx` |
| Input | `components/forms/Input.jsx` |
| Select | `components/forms/Select.jsx` |
| Checkbox | `components/forms/Checkbox.jsx` |
| Radio | `components/forms/Radio.jsx` |
| Switch | `components/forms/Switch.jsx` |
| Dialog | `components/feedback/Dialog.jsx` |
| Toast | `components/feedback/Toast.jsx` |
| Tooltip | `components/feedback/Tooltip.jsx` |
| Tabs | `components/navigation/Tabs.jsx` |

**Intentional additions:** since no source defined a component inventory, the set above is the standard baseline sized to a consumer app (forms, feedback, navigation, and card/badge/tag primitives for browsing/ordering UI). No component here has a confirmed real-world counterpart — treat all of them as a reasonable starting proposal, not a locked spec.

## Content Fundamentals

Only two real strings of brand copy exist in the source material: the logo's "ROLL NOW" wordmark and the one-line Chinese style brief. Voice/tone below is an **inferred proposal** based on the dopamine-style brief and category conventions for a bright, energetic consumer app — flag anything that doesn't match the real brand voice.

- **Address:** direct second person ("you"), imperative verbs for CTAs — "Roll Now", "Order now", "Get rolling". Short commands, not soft suggestions.
- **Casing:** UI labels/badges are set in tight all-caps or Title Case for punch (matches Bebas Neue's all-caps-friendly letterforms); body sentences are normal sentence case.
- **Sentence length:** short and punchy. Fragments over full sentences in headlines ("20% off. Today only."). Body copy stays plain and functional — one idea per sentence.
- **Punctuation/energy:** exclamation points are earned, not constant — reserve for confirmations and rewards ("Order confirmed!"), not for every label.
- **Emoji:** not used. The brand's "energy" comes from color, the arrow motif, and Bebas Neue headlines — not emoji. Icons (see Iconography) carry the functional weight emoji might otherwise fill.
- **Vibe:** fast, confident, a little cheeky — like a scooter cutting through traffic. Never corporate, never apologetic.

## Visual Foundations

- **Color:** two-tone brand core — Roll Now Red `#D40C2E` and Ink Navy `#1D1E2C` — punched up with three saturated accents (green `#7dcd85`, periwinkle blue `#8390fa`, yellow `#fac748`) on a white ground. This is a **color-block, not gradient** system: flat saturated fills, hard color transitions, no soft blends. See `guidelines/colors.card.html`.
- **Type:** display headlines in **Bebas Neue** — condensed, all-caps-shaped, used big and tight (`--display-xl/lg/md/sm`, line-height 0.92–1.05, letting the tall condensed letterforms breathe without excess line-gap). Body/UI text in **Montserrat** (variable, 100–900, with a true italic) at generous line-height (1.4–1.55) for readability at small sizes.
- **Spacing:** 4px base scale (`--space-1` = 4px up to `--space-24` = 96px). Generous internal card padding (24–32px) matches the brand's confident, uncluttered feel.
- **Backgrounds:** flat white or ink-navy full-bleed sections; no photography, texture, or gradients in the source material — color-blocking and the arrow/dot motifs carry visual interest instead. If/when real product photography exists, keep it warm and high-contrast to sit against the saturated palette without fighting it.
- **Animation:** springy/bouncy easing (`--ease-pop`, an overshoot cubic-bezier) for tap feedback — buttons and switches settle with a little overshoot, matching "energetic" branding. Standard UI transitions (focus rings, hover) use a normal ease-in-out (`--ease-standard`) and stay quick (120–200ms) — the bounce is reserved for direct-manipulation feedback, not everything.
- **Hover states:** ghost/tertiary buttons pick up a light ink-tinted background; bordered elements do not change border weight on hover (reserved for focus).
- **Press states:** buttons/icon-buttons translate down-right slightly on press (a subtle inset feel via transform, no shadow to drop since none is used).
- **Borders:** bold and structural — every button, card, input, badge, and dialog carries a solid `2px` (or `3px` for dialogs) ink-navy (`#1D1E2C`) border. This is a defining trait: nothing floats without a border.
- **Shadows:** none — flat throughout. All `--shadow-*` tokens resolve to `none`; borders alone carry the visual weight.
- **Radii:** sharp everywhere — every `--radius-*` token (including `--radius-full`) resolves to `0px`. No rounded corners, no pills, no circles.
- **Cards:** white fill, bold ink border, no shadow, square corners, optional color accent bar across the top edge (using one of the four accent hues) to tag a card's category at a glance.
- **Transparency/blur:** used only for modal scrims (`--surface-overlay`, ~60% ink navy) — no frosted-glass/backdrop-blur effects seen or implied by the brief.
- **Iconography motif:** circular dots and a diagonal motion arrow (both present in the logo) recur as small decorative accents — e.g. a row of 3 colored dots, or an arrow used as a "next/forward" affordance echoing the logo's arrow.

## Iconography

- **Source assets:** the only real icon-adjacent asset provided is the logo itself (arrow + tick-mark dots). No icon font, sprite sheet, or icon SVGs were included in the brief.
- **Substitution:** components and the UI kit use **Phosphor Icons** (`Bold` weight) loaded from CDN (`unpkg.com/@phosphor-icons/web`) as the closest stroke-weight/fill match to the brand's bold, rounded, high-contrast style. This is a flagged substitution — swap for real Roll Now icons if/when provided.
- **Style:** filled/bold glyphs, not thin-line — thin line icons would undersell the brand's punchy energy.
- **Emoji:** not used in UI (see Content Fundamentals).
- **Unicode-as-icon:** a couple of components (Checkbox's ✓, Select's ▾) use plain unicode glyphs directly — acceptable for tiny functional marks, not a general icon strategy.

## Fonts — substitution note

Both requested fonts were provided as real files (Bebas Neue regular; Montserrat variable + italic variable) and used as-is — **no substitution was necessary.**

## Products / Surfaces

Only one plausible surface was buildable without a real product definition: a **generic mobile app** (`ui_kits/mobile_app/`) — Home/browse, an order or item detail, a rewards screen (playing on "Roll" for a spin-to-win / rewards mechanic, a reasonable guess given the name and dopamine styling), and Profile. This is explicitly a **placeholder surface** to demonstrate the components together, not a recreation of any real Roll Now screen.

## Ask

This system was built from a logo + 3 fonts + a one-line style brief — no app, website, or Figma file to ground it in a real product. To get this to "perfect," please share:
1. What Roll Now actually is (delivery? rides? rewards app? something else) — this changes the entire UI kit.
2. Any existing screens, a Figma file, or a codebase to replace the placeholder mobile app kit with a real recreation.
3. A real icon set if Phosphor's substitution isn't right.
4. Confirmation on tone/voice — the Content Fundamentals above are inferred from the style brief, not from real copy.
