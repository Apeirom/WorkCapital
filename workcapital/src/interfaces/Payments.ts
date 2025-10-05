import { BaseModel } from './Base'; // Assumindo que BaseModel está aqui

/** Interface para o objeto Payment (Transação de Pagamento). 
 * Corresponde à resposta do GET/POST para /api/payments/
 */
export interface Payment extends BaseModel {
    // Relacionamentos (Foreign Keys) - são IDs (UUIDs) do UserProfile no JSON
    payer: string | null;     // ID do UserProfile que enviou o pagamento (pode ser nulo)
    recipient: string | null; // ID do UserProfile que recebeu o pagamento (pode ser nulo)
    
    // Parâmetros do Modelo
    amount: string; // Mapeado de DecimalField, tratado como string no TS
    category: string;
}

/** Interface para o Payload de Criação de um Payment (POST /api/payments/). */
// Estes são os campos que o frontend deve enviar para acionar a transação.
export interface PaymentCreateData {
    payer: string;
    recipient: string;
    amount: string;
    category?: string; // Opcional, pois tem default
}