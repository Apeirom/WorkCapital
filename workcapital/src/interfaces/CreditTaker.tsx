import { BaseModel } from './Base';

export interface CreditTaker extends BaseModel {
    // Parâmetros do Modelo CreditTaker:
    contact_details: string; // Mapeado de CharField(max_length=255)
    
    // O score WC é o resultado da IA. Tratado como 'number' no TS, aceita nulo.
    wc_score: number | null; 
}

/** Interface para o Payload de Criação de um CreditTaker (POST /api/credit-takers/). */
export interface CreditTakerCreateData {
    contact_details: string;
    // O wc_score é read_only, então não é enviado no POST.
}