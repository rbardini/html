import { build, emptyDir } from '@deno/dnt'
import denoJSON from './deno.json' with { type: 'json' }

await emptyDir('./npm')

await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {},
  package: {
    name: denoJSON.name,
    version: denoJSON.version,
    description:
      'Tiny html tag function for no-build JSX-like syntax, compatible with all modern browsers and runtimes.',
    keywords: ['html', 'tagged', 'template', 'string', 'literal', 'jsx'],
    homepage: 'https://github.com/rbardini/html',
    bugs: {
      url: 'https://github.com/rbardini/html/issues',
    },
    repository: {
      type: 'git',
      url: 'git+https://github.com/rbardini/html.git',
    },
    license: 'MIT',
    author: {
      name: 'Rafael Bardini',
      email: 'rafael@rbardini.com',
      url: 'https://rbardini.com/',
    },
    engines: {
      node: '>=20',
    },
  },
  scriptModule: false,
  test: false,
  postBuild() {
    Deno.copyFileSync('LICENSE', 'npm/LICENSE')
    Deno.copyFileSync('README.md', 'npm/README.md')
  },
})
