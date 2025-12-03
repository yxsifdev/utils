type CaseType = 'camel' | 'pascal' | 'kebab' | 'snake';

const sep = /[^\p{L}\p{N}]+/gu;
const camelRegex = /[^\p{L}\p{N}]+(\p{L}|\p{N})/gu;
const pascalRegex = /(^\p{L}|[^\p{L}\p{N}]+(\p{L}))/gu;

/**
 * Converts a string to the specified case type: camel, pascal, kebab, or snake.
 *
 * @param content - The input string to convert.
 * @param caseType - The case type to convert the string to. One of 'camel', 'pascal', 'kebab', or 'snake'.
 * @returns The converted string in the specified case type. Returns an empty string if input is invalid or caseType is not recognized.
 *
 * @example
 * toCase('hello world', 'camel'); // 'helloWorld'
 * toCase('hello world', 'pascal'); // 'HelloWorld'
 * toCase('hello world', 'kebab'); // 'hello-world'
 * toCase('hello world', 'snake'); // 'hello_world'
 */
export function toCase(content: string, caseType: CaseType): string {
  if (!content || !caseType) return '';
  switch (caseType) {
    case 'camel':
      return content
        .toLowerCase()
        .replace(camelRegex, (_, chr) => chr.toUpperCase());
    case 'pascal':
      return content
        .toLowerCase()
        .replace(pascalRegex, (_, chr) => chr.toUpperCase());
    case 'kebab':
      return content.toLowerCase().replace(sep, '-');
    case 'snake':
      return content.toLowerCase().replace(sep, '_');
    default:
      return '';
  }
}
