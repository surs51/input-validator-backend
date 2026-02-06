export function sanitize(input: string): string {
  return input
    .replace(/[\x00-\x1F\x7F]/g, "") 
    .replace(/<[^>]*>/g, "")         
    .replace(/\s+/g, " ")
    .trim();
}
