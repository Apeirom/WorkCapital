// interfaces/User.ts

import { BaseModel } from './Base';

/** Interface para os dados do Contractor. */
export interface Contractor extends BaseModel {
    company_name: string | null;
}

/** Interface para os dados do Investor. */
export interface Investor extends BaseModel {
    risk_tolerance: string;
}

/** Interface para os dados do CreditTaker. */
export interface CreditTaker extends BaseModel {
    contact_details: string;
    wc_score: number | null; // Mapeado de DecimalField (aceita nulo)
}

/** Interface do Perfil Central do Usuário (UserProfile). */
export interface UserProfile extends BaseModel {
    // Dados Pessoais
    user: number; // ID do User padrão do Django (ForeignKey)
    cpf: string;
    phone: string | null;
    gender: string | null;
    city: string | null;
    state: string | null;
    account_balance: string; // Mapeado de DecimalField, tratado como string no TS

    // Perfis Relacionados (Retorno da API, via Serializer)
    contractor_profile: Contractor | null;
    investor_profile: Investor | null;
    credit_taker_profile: CreditTaker | null;
    
    // Perfil Freelancer (Relação Um-para-Muitos - Array)
    freelancer_profiles: Freelancer[];
}

/** Interface para o Payload de Registro (POST /api/register/) */
export interface UserRegistrationRequest {
    email: string;
    password: string;
    cpf: string;
    phone: string;
    gender: string;
    city: string;
    state: string;
    // O backend cria o Contractor automaticamente.
}

export interface UserUpdateData {
    phone?: string;
    gender?: string;
    city?: string;
    state?: string;
    // Não podemos atualizar cpf ou user
}