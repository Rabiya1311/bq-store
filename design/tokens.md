# Design Tokens — BQ Store

> Extracted from Figma file: [https://www.figma.com/design/bFHDpWULrVwNEfmSTbAb0C/Untitled?node-id=0-1&t=6gOUFbshs3B3QRTY-1]
> Last updated: [25-4-2026]

---

## Colors

| Token           | Hex       | Use                                  |
| --------------- | --------- | ------------------------------------ |
| surface         | #F9FAFB   | Page background                      |
| surface-raised  | #FFFFFF   | Cards, modals                        |
| text-primary    | #111827   | Headings, body                       |
| text-muted      | #6B7280   | Labels, hints                        |
| border          | #E5E7EB   | Dividers, input borders              |
| primary         | #1B1B1B   | Primary button background            |
| primary-hover   | #000000   | Primary button hover                 |
| danger          | #DC2626   | Errors, destructive actions          |
| success         | #16A34A   | Success states                       |

---

## Typography

Font family: Inter, sans-serif.

| Token    | Font-size / Line-height | Weight | Use                          |
| -------- | ----------------------- | ------ | ---------------------------- |
| display  | 44px / 52px             | 600    | Login page title             |
| h1       | 32px / 40px             | 600    | Section headers              |
| h2       | 20px / 28px             | 600    | Card titles                  |
| body     | 14px / 20px             | 400    | Body text                    |
| small    | 12px / 16px             | 400    | Captions, hints              |
| button   | 14px / 20px             | 500    | Button labels                |

---

## Spacing (multiples of 4)

| Token | Value | Typical use                         |
| ----- | ----- | ----------------------------------- |
| 1     | 4px   | Icon-to-text gap                    |
| 2     | 8px   | Form field inner spacing            |
| 3     | 12px  | Stack of small elements             |
| 4     | 16px  | Card padding, section gaps          |
| 6     | 24px  | Section-to-section spacing          |
| 8     | 32px  | Major section break                 |
| 12    | 48px  | Page-level top/bottom               |

---

## Radius

| Token | Value | Use                   |
| ----- | ----- | --------------------- |
| sm    | 12px  | Inputs, buttons       |
| md    | 16px  | Cards, modals         |
| lg    | 20px  | Large sections        |

---

## Components

- **Button / primary** — bg: `primary`, text: `surface-raised`, radius: `sm`, padding: `2 4`
- **Button / secondary** — bg: `surface-raised`, border: `border`, radius: `sm`
- **Button / destructive** — text: `danger`, underline on hover
- **Input** — font: `body`, radius: `sm`, border: `border`, focus ring: `2px primary/20`
- **Product card** — padding: `4`, radius: `md`
- **Category row** — font: `body`, spacing: `3`
- **Modal** — max-width: `560px`, padding: `6`, radius: `md`
- **Toast** — position: bottom-right, auto-dismiss: `3s`, color: `success` / `danger`

---

## Additional Components (Challenge Section)

### Search Input with Icon

| Property | Token/Value | Notes |
|----------|------------|------|
| Container padding | 2 | Extra left space for icon |
| Icon size | 16px | Matches text height |
| Input text | body | Same as normal input |
| Border | border | Consistent with inputs |
| Radius | sm | Same as inputs |
| Icon color | text-muted | Subtle appearance |

**How this differs from plain input:**  
Adds a leading icon with spacing, requiring extra left padding. The icon uses a muted color so it does not compete with user input text.