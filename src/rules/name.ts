export function validateName(value:string): boolean {
    return /^[A-Za-z' -]{1,50}$/.test(value);
}
