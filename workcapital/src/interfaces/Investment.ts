// src/types/Investment.ts (Arquivo de Types - Modificado)

// Tipos possíveis para o status da proposta
export type ProposalStatus = 'DEMANDAS' | 'NEGOCIACAO' | 'EM_ANDAMENTO' | 'ARQUIVADO';

// Representa os dados básicos do freelancer/usuário que fez o pedido
interface UserData {
  name: string;
  whatsapp: string;
  email: string;
}

// Representa a avaliação de crédito e risco
interface CreditScore {
  platformRating: number; 
  projectsCompleted: number; 
  riskScore: 'B+ (Risco Baixo)' | 'C+ (Moderado)' | string;
}

// Representa a proposta completa de investimento
export interface InvestmentProposal {
  id: string;
  motivation: string;
  userData: UserData;
  creditScore: CreditScore;
  paymentCondition: string;
  totalValue: number;
  balance: number;
  // NOVO: Status da proposta
  status: ProposalStatus; 
}