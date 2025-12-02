/**
 * Capitalizes the first letter of a string and lowercases the rest.
 *
 * @example
 * ```ts
 * capitalize("heLLo World");
 * // "Hello world"
 * ```
 *
 * @param text - The string to capitalize.
 * @returns The formatted string.
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
