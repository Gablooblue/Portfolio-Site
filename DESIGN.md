# DESIGN

## Aesthetic lane
"Operator's site." Reference points: Dan Luu (danluu.com), Patrick Collison (patrickcollison.com), Maciej Cegłowski (idlewords.com). Text-first, hand-feeling, opinionated, never gradient-soup. A faint risograph / zine warmth from the paper background and single hot-red accent.

## Color (OKLCH)
Restrained strategy. Tinted neutrals + one accent ≤10% of the surface.

| Role        | Token            | Value                       | Use |
|-------------|------------------|-----------------------------|-----|
| Paper       | `--paper`        | `oklch(0.965 0.012 85)`     | page background, warm off-white |
| Paper deep  | `--paper-deep`   | `oklch(0.935 0.018 80)`     | section dividers, subtle blocks |
| Ink         | `--ink`          | `oklch(0.20 0.025 270)`     | primary text, near-black w/ cool tint |
| Ink muted   | `--ink-muted`    | `oklch(0.45 0.020 270)`     | secondary text, dates, captions |
| Hairline    | `--hairline`     | `oklch(0.82 0.018 80)`      | 1px section/row dividers |
| Signal      | `--signal`       | `oklch(0.55 0.22 28)`       | accent: link hover, year tab, bullet dot |

No `#000` or `#fff`. No gradients. No drop shadows.

## Typography

**Display + Body:** Bricolage Grotesque (Google Fonts, variable axes: `opsz` 12–96, `wght` 200–800, `wdth` 75–100). Single committed family with strong scale + weight contrast.

**Mono (data labels only):** system mono stack — `ui-monospace, "SF Mono", "Cascadia Code", "Menlo", monospace`. Used for years, tags, file-name-style hints. Never for body copy.

**Scale (clamp):**
- Hero name: `clamp(3.5rem, 9vw, 7rem)` weight 600 opsz max wdth 95
- Section heading: `clamp(2rem, 4vw, 3rem)` weight 500 opsz auto
- Body: `1.0625rem` (17px) weight 400 line-height 1.55
- Caption / mono: `0.8125rem` (13px)

Body line length capped at ~68ch.

## Layout
- Asymmetric. Left margin ~9% on desktop, content max-width ~720px for prose, full bleed for rules.
- Section labels in mono on the left rail, content offset right.
- 1px hairline rules between sections, full content width.
- No cards. List rows that take full width and get a single hover state (background tint shift to `--paper-deep`).
- Section numbering: `01 — Now / 02 — Work / 03 — Builds / 04 — Press / 05 — Reach`.

## Motion
- Page-load: subtle stagger on hero only (200ms cascade, 16px y-translate). Ease-out-quart.
- Section reveal: 1-shot fade on first viewport entry. Nothing on re-scroll.
- Links: animated underline, 150ms left-to-right, signal color.
- No scale-on-hover for text rows. No bounce. No glow.

## Component patterns
- **Year tag:** mono small, `--ink-muted`, becomes `--signal` on row hover.
- **Tag chip:** plain text in mono, `[brackets]` style, no fill, no border. e.g. `[ python · genai · github actions ]`.
- **Bullet:** small filled `--signal` square (4×4px), not a dash, not a dot.
- **Link:** ink color, 1px underline at 0.4 opacity, becomes signal-colored full-opacity on hover.

## Bans (project-specific, on top of impeccable's)
- No glow blobs / gradient orbs.
- No glass / backdrop-blur.
- No gradient text.
- No icon cards in a 3-up grid.
- No rounded-2xl cards. Border-radius is 0 by default; rare 4px on the rare card.
- No hover-scale on rows.
- No emoji except as deliberate, sparing voice (≤1 per page).
