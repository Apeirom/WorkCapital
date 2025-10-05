export interface BaseModel {
    id: string; // Mapeado do UUIDField do Django
    created_at: string; // ISO Date String (DateTimeField)
    updated_at: string; // ISO Date String (DateTimeField)
}