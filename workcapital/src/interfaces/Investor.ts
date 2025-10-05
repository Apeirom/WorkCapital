// interfaces/Investor.ts (ou dentro de interfaces/User.ts)

import { BaseModel } from './Base'; // Assumindo que BaseModel está aqui

/** Interface para os dados do Investor (Investidor).
 * Corresponde exatamente à resposta do GET/POST para /api/investors/
 */
export interface Investor extends BaseModel {
    // Parâmetros do Modelo Investor:
    risk_tolerance: string; // Mapeado de CharField(max_length=50)

    // O campo 'user_profile' (a ligação OneToOne com UserProfile) será o ID UUID
    // Opcional: Adicionar a Foreign Key se o serializer a incluir explicitamente
    // user_profile?: string; 
}

/** Interface para o Payload de Criação de um Investor (POST /api/investors/). */
// Geralmente, para perfis criados separadamente, você envia apenas os dados específicos.
export interface InvestorCreateData {
    risk_tolerance: string;
}