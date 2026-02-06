export function normalizeUnicode(input: string): string {
  return input.normalize("NFKC");
}
