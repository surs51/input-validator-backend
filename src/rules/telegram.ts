export function validateTelegram(value: string): boolean {
    return /^@?[A-Za-z0-9_]{5,32}$/.test(value);
}
