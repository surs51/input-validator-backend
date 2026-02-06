import { Buffer } from "buffer";

function looksLikeBase64(value: string): boolean {
try {
        const decoded = Buffer.from(value, "base64").toString("utf8");
        // re-encode and compare
        return Buffer.from(decoded, "utf8").toString("base64") === value.replace(/\s+/g, '');
    } catch {
        return false;
    }

}

export function decodeOnce(input: string): string {
    let value = input;

    try {
        value=decodeURIComponent(value);
    } catch {}


  if (looksLikeBase64(value)) {
    try {
      const decoded = Buffer.from(value, "base64").toString("utf8");
      if (/^[\x09\x0A\x0D\x20-\x7E\u0080-\uFFFF]*$/.test(decoded)) {
        value = decoded;
      }
    } catch {}
  } return value;
}