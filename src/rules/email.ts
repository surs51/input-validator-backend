export function validateEmail(value:string): boolean {
    if (value.length > 254) return false; 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
