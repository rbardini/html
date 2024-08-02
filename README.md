# @rbardini/html

[![JSR](https://jsr.io/badges/@rbardini/html)](https://jsr.io/@rbardini/html)
[![JSR Score](https://jsr.io/badges/@rbardini/html/score)](https://jsr.io/@rbardini/html)

Tiny `html` tag function for no-build JSX-like syntax, compatible with all
modern browsers and runtimes.

```ts
import { html } from '@rbardini/html'

const heading = ({ level = 1, children }) =>
  html`<h${level}>${children}</h${level}>`

const list = ({ title, items }) =>
  html`
    ${title && heading(title)}
    <ul>
      ${items.map((item) => html`<li>${item}</li>`)}
    </ul>
  `
```

Inspired by [jimniels/html](https://github.com/jimniels/html).

## Usage

```sh
# Deno
deno add @rbardini/html

# npm (one of the below, depending on your package manager)
npx jsr add @rbardini/html
yarn dlx jsr add @rbardini/html
pnpm dlx jsr add @rbardini/html
bunx jsr add @rbardini/html
```

Or copy-paste the contents of [`mod.ts`](./mod.ts).
