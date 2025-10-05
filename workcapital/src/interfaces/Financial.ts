// interfaces/Financial.ts

import { BaseModel } from './Base'; // Assumindo que BaseModel está aqui

/** Interface para o objeto Financing (Solicitação de Financiamento). 
 * Corresponde à resposta do GET/POST para /api/financings/
 */
export interface Financing extends BaseModel {
    // Relacionamentos (Chaves Estrangeiras - IDs)
    credit_taker: string; // ID do CreditTaker (Tomador de Crédito)
    
    // Relacionamento M:N (Muitos-para-Muitos) - Retorna uma lista de IDs (UUIDs)
    investors: string[]; // Lista de IDs de Investor que investiram
    
    // Parâmetros do Modelo
    code: string;
    motivation: string;
    amount_request: string; // Mapeado de DecimalField, tratado como string no TS
    installments: number;
    interest_rate: string; // Mapeado de DecimalField, tratado como string no TS
    
    // Campos de Data
    first_installment_date: string; // Mapeado de DateField (formato ISO string)
    
    // Campos Read-Only (Gerados pelo Sistema)
    amount_invested: string; // Mapeado de DecimalField, tratado como string no TS
}

/** Interface para o Payload de Criação de um Financing (POST /api/financings/). */
// Note que 'amount_invested' é read-only e não deve ser enviado.
export interface FinancingCreateData {
    credit_taker: string; // ID do Tomador de Crédito (obrigatório)
    
    code: string;
    motivation: string;
    amount_request: string;
    installments: number;
    first_installment_date: string;
    interest_rate: string;

    // A lista de investidores não é enviada na criação inicial
    investors?: string[]; 
}