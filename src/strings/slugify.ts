/**
 * Converts a string into a URL-friendly slug.
 *
 * @example
 * ```ts
 * slugify("Hello world");
 * // "hello-world"
 * ```
 *
 * @param text - The string to convert.
 * @returns A clean slug.
 */
export function slugify(value: string): string {
  if (!value) return '';
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
