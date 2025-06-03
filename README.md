# Riff Design System

Riff is the official design system for [Fender Play](https://www.fender.com/play). It provides a cohesive, accessible, and flexible foundation for building user interfaces across Fender Play's web products.

Inspired by leading systems like IBM Carbon, Google Material, and Twilio Paste, Riff is tailored to support a modern learning platform with an authentic Fender tone.

<div align="center">

[![React badge](https://img.shields.io/badge/made%20with-react-red?style=plastic\&logo=react)](https://react.dev/)
[![TypeScript badge](https://img.shields.io/badge/built%20with-typescript-blue?style=plastic\&logo=typescript)](https://www.typescriptlang.org/)
[![Storybook badge](https://img.shields.io/badge/documented%20with-storybook-orange?style=plastic\&logo=storybook)](https://storybook.js.org/)

</div>

---

### [🚀 Live Storybook (to be linked when deployed)]()

---

## 📑 Table of Contents

* [Principles](#principles)
* [Tech Stack](#tech-stack)
* [Structure](#structure)
* [Component Status](#component-status)
* [Tokens](#tokens)
* [Running Locally](#running-locally)
* [Deployment](#deployment)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Credits](#credits)

---

## Principles

1. **Expressive**

   * Clear tone of voice, friendly and engaging.
2. **Authentic**

   * Reflects the heritage and spirit of Fender as a music brand.
3. **Diverse and Inclusive**

   * Accessible for all users, including those with audio or visual impairments.
4. **Clarity**

   * Clean, precise, easy to navigate.
5. **Empowering**

   * Makes users feel confident and in control of their learning.

---

## Tech Stack

* **React + TypeScript**
* **Storybook** for documentation and component catalog
* **Emotion** for styling (CSS-in-JS)
* **Tokens** defined in `src/tokens` (colors, typography, spacing, radii)

---

## Structure

```
src/
  components/
    primitives/
      Box/
      Text/
    Typography/
      Heading/
      Paragraph/
      List/
    Layout/
      Stack/
      Flex/
    Feedback/
      Skeleton/
      Callout/
    Navigation/
      Anchor/
      Pagination/
      Tabs/
    Form/
      Button/
      TextInput/
      TextArea/
      HelpText/
      Select/
      RadioGroup/
    Display/
      Card/
      Badge/
      Alert/
      Avatar/
  tokens/
    colors.ts
    typography.ts
    spacing.ts
    radii.ts
```

---

## Component Status

### Primitives

* [x] Box
* [x] Text

### Typography

* [x] Heading
* [x] Paragraph
* [x] List

### Layout

* [x] Stack
* [x] Flex

### Feedback

* [x] Skeleton
* [x] Callout

### Navigation

* [x] Anchor
* [x] Pagination
* [x] Tabs

### Form

* [x] Button
* [x] TextInput
* [x] TextArea
* [x] HelpText
* [x] Select
* [x] RadioGroup

### Display

* [x] Card
* [x] Badge
* [x] Alert
* [ ] Avatar (Planned)

---

## Tokens

Design tokens are centrally defined in `src/tokens/`:

* **colors.ts**
* **typography.ts**
* **spacing.ts**
* **radii.ts**

Tokens are used consistently across all components to ensure alignment between Figma designs and implementation.

---

## Running Locally

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook
```

Storybook will be available at `http://localhost:6006`

---

## Deployment

Planned deployment:

* GitHub repo (public)
* Storybook deployed (Chromatic / Vercel / Netlify)

---

## Usage

The Riff Design System will be consumed by Fender Play's apps as a component library.

Planned packaging:

* Export components via `index.ts`
* Option to publish to NPM as `@fender/riff` package

---

## Contributing

Pull requests and improvements are welcome! Please fork the repo and create a pull request with your suggested changes.

We follow a standard workflow:

```bash
npm run lint
npm run format
npm run test
```

---

## License

MIT License © Fender Play Design System Team

---

## Credits

Built by the Fender Play Design System team.

**Let's riff!** 🎸
