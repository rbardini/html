# @rbardini/html

![JSR](https://img.shields.io/jsr/v/@rbardini/html)
![npm](https://img.shields.io/npm/v/@rbardini/html)

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

# npm
npm install @rbardini/html
```

Or copy-paste the contents of [`mod.ts`](./mod.ts).
