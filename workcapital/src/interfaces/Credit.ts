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
  riskScore: string;
}

// Representa a proposta completa de investimento
export interface InvestmentProposal {
  id: string; // Ex: #1234
  motivation: string; // Texto longo de motivação
  userData: UserData;
  creditScore: CreditScore;
  paymentCondition: string;
  totalValue: number;
  balance: number;
}