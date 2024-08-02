/**
 * Interprets a template literal as an HTML template.
 * @param strings The string parts
 * @param values The values to interpolate
 * @returns The concatenated string parts with values interpolated
 */
export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  return strings.reduce((acc, string, i) => {
    const value = values[i]
    if (Array.isArray(value)) return acc + string + value.join('')
    if (value != null && !!value !== value) return acc + string + value
    return acc + string
  }, '')
}
