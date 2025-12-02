/**
 * Removes accents and diacritical marks from a string.
 *
 * @example
 * removeAccents("Canción");
 * // "Cancion"
 *
 * @param text - The text to normalize.
 * @returns A string without accents.
 */
export function removeAccents(text: string): string {
  if (!text) return '';
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
