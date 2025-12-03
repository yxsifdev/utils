type CaseType = 'camel' | 'pascal' | 'kebab' | 'snake';

const sep = /[^\p{L}\p{N}]+/gu;
const camelRegex = /[^\p{L}\p{N}]+(\p{L}|\p{N})/gu;
const pascalRegex = /(^\p{L}|[^\p{L}\p{N}]+(\p{L}))/gu;

export function toCase(content: string, caseType: CaseType): string {
  if (!content && !caseType) return '';
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
