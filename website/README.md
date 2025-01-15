Big thanks to the EF's Cryptography Team for letting us copy their website 🙂

This directory holds the codebase to our website, [security.ethereum.org](https://security.ethereum.org).

## Stack

The main stack used in the project includes:

- [Next.js](https://nextjs.org/).
- [TypeScript](https://www.typescriptlang.org/).
- [ChakraUI](https://chakra-ui.com/) as component library.
- [KaTeX](https://katex.org/) to render LaTeX math syntax.

## Local development

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with a custom scaffolding.

### Getting Started

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Project Structure

The following list describes the main elements of the project structure:

- `public`: contains static assets like fonts and images.
- `src`: contains the source code.
  - `components`: React components.
    - components with state are directly located inside `/components`.
    - `layout`: components used to contain and apply different layouts to different pages.
    - `UI`: stateless (functional) components.
  - `pages`: includes components that renders to pages and [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction).
  - `posts`: markdown blog posts.
  - `styles`: css stylesheets.
    - `global.css`: global stylesheet.
  - `theme`: contains the [Chakra UI custom theme](https://chakra-ui.com/docs/styled-system/theming/customize-theme), organized in `foundations` and `components` for better scaling.
  - `utils`: utilitary stuff.
  - `constants.ts`: this is the _global_ constants file, containg URLs and lists of elements we use across the site.
  - `types.ts`: contains the custom defined TypeScript types and interfaces.
