import { ValidationResult, FieldName } from "./types";
import { decodeOnce } from "./normalize/decode";
import { normalizeUnicode } from "./normalize/unicode";
import { sanitize } from "./normalize/sanitize";

import { validateName } from "./rules/name";
import { validateEmail } from "./rules/email";
import { validatePhone } from "./rules/phone";
import { validateTelegram } from "./rules/telegram";

const validators: Record<FieldName, (v:string) => boolean> ={
    name:validateName,
    surname:validateName,
    email:validateEmail,
    phone:validatePhone,
    telegram:validateTelegram,
};

export function validateInput(input: unknown): ValidationResult {
    const result:ValidationResult= {
        ok:true,
        data: {},
        errors: {},
    };

    if (typeof input !== "object" || input === null){
        return {ok: false, data:{}, errors:{}}
    }
    
    for (const field of Object.keys(validators) as FieldName[]){
        const raw = (input as any)[field];
        if (typeof raw !== "string") continue;
        
        let value = raw;

        if (value.length > 1024){
            result.ok = false;
            result.errors[field] = "#The input is too long#"
            continue;
        }
       

        value = decodeOnce(value);

        value = normalizeUnicode(value);

        value = sanitize(value);
        if (!validators[field](value)) {
            result.ok;
            result.errors[field]= "#Invalid Format#"
            continue;
        }
        result.data[field] = value;
    }
    return result;
}
