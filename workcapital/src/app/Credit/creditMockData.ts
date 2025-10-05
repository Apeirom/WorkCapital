import { Debt, CreditProposal } from '@/interfaces/CreditTaker';

// Mock de débitos (para simulação)
export const mockDebts: Debt[] = [
    {
        id: 'DEB001',
        description: 'Financiamento de Equipamento de TI',
        originalValue: 12000.00,
        remainingBalance: 4500.00,
        dueDate: '15/11/2025',
        status: 'Em Aberto',
        monthlyPayment: 500.00,
    },
    {
        id: 'DEB002',
        description: 'Empréstimo para Capital de Giro',
        originalValue: 5000.00,
        remainingBalance: 800.00,
        dueDate: '01/10/2025',
        status: 'Atrasado',
        monthlyPayment: 200.00,
    },
];

// Mock de Propostas de Crédito em andamento
export const mockCreditProposals: CreditProposal[] = [
    {
        id: 'REQ001',
        title: 'Nova Estação de Trabalho para 4K',
        requestedAmount: 15000.00,
        fundedAmount: 3000.00, // 20% financiado
        fundingGoal: 15000.00,
        status: 'Financiando',
        investorCount: 3,
    },
    {
        id: 'REQ002',
        title: 'Expansão de Cafeteria e E-commerce',
        requestedAmount: 9000.00,
        fundedAmount: 9000.00, // 100% financiado
        fundingGoal: 9000.00,
        status: 'Completo',
        investorCount: 1,
    },
    {
        id: 'REQ003',
        title: 'Capital de Giro Marketing Digital',
        requestedAmount: 5000.00,
        fundedAmount: 0.00,
        fundingGoal: 5000.00,
        status: 'Em Avaliação', // Novo status
        investorCount: 0,
    },
];