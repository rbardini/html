import { assertEquals } from '@std/assert'
import { html } from './mod.ts'

Deno.test(function arrayTest() {
  const value = [1, 2, 3]
  assertEquals(html`<div>${value}</div>`, `<div>${value.join('')}</div>`)
})

Deno.test(function objectTest() {
  const value = { a: 1 }
  assertEquals(html`<div>${value}</div>`, `<div>${value}</div>`)
})

Deno.test(function stringTest() {
  const value = 'string'
  assertEquals(html`<div>${value}</div>`, `<div>${value}</div>`)
})

Deno.test(function numberTest() {
  const value = 0
  assertEquals(html`<div>${value}</div>`, `<div>${value}</div>`)
})

Deno.test(function nullTest() {
  const value = null
  assertEquals(html`<div>${value}</div>`, `<div></div>`)
})

Deno.test(function undefinedTest() {
  const value = undefined
  assertEquals(html`<div>${value}</div>`, `<div></div>`)
})
