export function validatePhone(value:string): boolean{
    return /^[+0-9 ()-]{7,20}$/.test(value);
}