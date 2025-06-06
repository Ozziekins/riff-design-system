# Riff Design System

Riff is the official design system for [Fender Play](https://www.fender.com/play). It provides a cohesive, accessible, and flexible foundation for building user interfaces across Fender Play’s web products.

Inspired by leading systems like IBM Carbon, Google Material, and Twilio Paste, Riff is tailored to support a modern learning platform with an authentic Fender tone.

<div align="center">

[![React badge](https://img.shields.io/badge/made%20with-react-red?style=plastic\&logo=react)](https://react.dev/)
[![TypeScript badge](https://img.shields.io/badge/built%20with-typescript-blue?style=plastic\&logo=typescript)](https://www.typescriptlang.org/)
[![Storybook badge](https://img.shields.io/badge/documented%20with-storybook-orange?style=plastic\&logo=storybook)](https://storybook.js.org/)

</div>

---

### [🚀 Live Storybook (to be linked when deployed)]()

---

## 👑 Table of Contents

* [Principles](#principles)
* [Tech Stack](#tech-stack)
* [Structure](#structure)
* [Component Status](#component-status)
* [Tokens](#tokens)
* [Running Locally](#running-locally)
* [Build & Deployment](#build--deployment)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Credits](#credits)

---

## Principles

1. **Expressive**
   Friendly, clear tone of voice, musical personality.

2. **Authentic**
   Reflects the heritage and spirit of Fender as a music brand.

3. **Diverse & Inclusive**
   Accessible to all users, including those with visual and audio impairments.

4. **Clarity**
   Simple, clean, and easy to navigate.

5. **Empowering**
   Makes users feel confident and in control of their learning experience.

---

## Tech Stack

* **React + TypeScript**
* **Storybook** for documentation
* **Emotion** for styling (CSS-in-JS)
* **Design Tokens** for consistent theming
* **Vite** for build & development
* **GitHub Actions** for CI/CD

---

## Structure

```text
src/
  components/
    Accordion/
    Callout/
    Display/
      Alert/
      Avatar/
      Badge/
      Card/
    Form/
      Button/
      CheckboxGroup/
      HelpText/
      RadioGroup/
      Select/
      TextArea/
      TextInput/
    Navigation/
      Anchor/
      Pagination/
      Tabs/
    Skeleton/
      Skeleton/
    Typography/
      Heading/
      List/
      Paragraph/
    layout/
      Flex/
      Stack/
    primitives/
      Box/
      Text/
  pages/                # PoC pages (CareersLandingPage, JobSpecPage, LoginPage)
  tokens/
    colors.ts
    spacing.ts
    typography.ts
    radii.ts
index.ts                # Design system exports
main.tsx                # App entry for PoC pages
App.tsx                 # App router for PoC pages
index.html              # App entrypoint
```

---

## Component Status

### Primitives

✅ Box
✅ Text

### Typography

✅ Heading
✅ Paragraph
✅ List

### Layout

✅ Stack
✅ Flex

### Display

✅ Alert
✅ Badge
✅ Card
✅ Avatar

### Navigation

✅ Anchor
✅ Pagination
✅ Tabs

### Skeleton

✅ Skeleton

### Feedback

✅ Callout

### Form

✅ Button
✅ TextInput
✅ TextArea
✅ HelpText
✅ Select
✅ RadioGroup
✅ CheckboxGroup

### Interactive

✅ Accordion

---

## Tokens

Design tokens are centrally defined in:

* `src/tokens/colors.ts`
* `src/tokens/typography.ts`
* `src/tokens/spacing.ts`
* `src/tokens/radii.ts`

Tokens are used consistently across all components to ensure visual consistency between Figma and production.

---

## Running Locally

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run the PoC app (Pages with router)
npm run dev
```

---

## Build & Deployment

### Dual Build System

| Command                   | Purpose                                                   |
| ------------------------- | --------------------------------------------------------- |
| `npm run build:lib`       | Build component library for packaging (npm, internal use) |
| `npm run build`           | Build the PoC app (for GitHub Pages or Netlify deploy)    |
| `npm run build-storybook` | Build Storybook static site (for GitHub Pages deploy)     |

---

### GitHub Actions

* CI is configured in `.github/workflows/ci.yml`
* On every push to `main`:

  * Library is built and tested
  * App is built and tested
  * Storybook is built
  * Storybook is deployed to GitHub Pages

---

## Usage

The Riff Design System can be consumed in Fender Play apps as a React component library.

Library exports are defined in `src/index.ts`:

```tsx
import { Button, Heading, Stack } from '@fender/riff';
```

Planned packaging:

* Internal NPM package: `@fender/riff`
* Available for direct import in React apps

---

## Contributing

Contributions are welcome! Please fork the repo and submit a PR.

Before submitting:

```bash
# Storybook check
npm run storybook
```

---

## License

MIT License © Fender Play Design System Team

---

## Credits

Built with ❤️ by Ozzie and Divya for the Fender Play Design System team.

**Let’s riff!** 🎸✨
