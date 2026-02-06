export type FieldName =
| "name"
| "surname"
| "email"
| "phone"
| "telegram";

export interface ValidationResult{
    ok: boolean;
    data: Partial<Record<FieldName, string>>;
    errors: Partial<Record<FieldName, string>>;
}


