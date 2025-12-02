/**
 * Removes extra spaces in a string, leaving only one space between words.
 *
 * @example
 * ```ts
 * trimAll("  hello   world  ");
 * // "hello world"
 * ```
 *
 * @param text - The string to normalize.
 * @returns A cleaned-up string with single spacing.
 */
export function trimAll(text: string): string {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}
