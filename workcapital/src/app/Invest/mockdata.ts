import { InvestmentProposal, ProposalStatus } from '@/interfaces/Investment';

// Função utilitária para mapear as chaves das abas para o Status da Proposta
export const tabKeyToStatusMap: Record<string, ProposalStatus> = {
    demandas: 'DEMANDAS',
    negociacao: 'NEGOCIACAO',
    emandamento: 'EM_ANDAMENTO',
    arquivados: 'ARQUIVADO',
};

// Dados de Propostas Mockadas, com o novo campo 'status'
export const allMockProposals: InvestmentProposal[] = [
    {
        id: '#1234',
        motivation: 'Olá, sou editor de vídeo e motion designer há 5 anos na plataforma. Meu computador atual está apresentando lentidão para renderizar projetos em 4K, o que está começando a impactar meus prazos de entrega. O valor será usado integralmente para adquirir uma nova estação de trabalho de alta performance (orçamento já realizado).',
        userData: {
            name: 'Diego Pereira',
            whatsapp: '(00) 00000-0000',
            email: 'diego.pereira@gmail.com',
        },
        creditScore: {
            platformRating: 4.9,
            projectsCompleted: 28,
            riskScore: 'B+ (Risco Baixo)',
        },
        paymentCondition: 'Boleto 10x',
        totalValue: 15000.00,
        balance: 0.00,
        status: 'DEMANDAS', // Status 1
    },
    {
        id: '#1682',
        motivation: 'Somos uma cafeteria de cafés especiais e queremos expandir nossa marca para o ambiente digital, vendendo nossos grãos para todo o Brasil e criando um blog para engajar nossa comunidade. Este crédito viabilizará a contratação do desenvolvedor Carlos Andrade, um freelancer experiente em e-commerce, por 6 meses.',
        userData: {
            name: 'Rafael Borba',
            whatsapp: '(00) 00000-0000',
            email: 'rafael.borba@gmail.com',
        },
        creditScore: {
            platformRating: 4.9,
            projectsCompleted: 28,
            riskScore: 'C+ (Moderado)',
        },
        paymentCondition: 'Cartão de Crédito 6x',
        totalValue: 9000.00,
        balance: 0.00,
        status: 'DEMANDAS', // Status 1
    },
    {
        id: '#1790',
        motivation: 'Preciso de um aporte para investir em marketing digital e otimização SEO para o meu blog de viagens. O objetivo é aumentar o tráfego orgânico em 40% nos próximos 3 meses, garantindo maior visibilidade para futuros clientes.',
        userData: {
            name: 'Camila Ferraz',
            whatsapp: '(00) 00000-0000',
            email: 'camila.ferraz@gmail.com',
        },
        creditScore: {
            platformRating: 4.5,
            projectsCompleted: 10,
            riskScore: 'C- (Alto)',
        },
        paymentCondition: 'PIX 3x',
        totalValue: 3500.00,
        balance: 1000.00, // Já possui um saldo
        status: 'NEGOCIACAO', // Status 2
    },
    {
        id: '#1811',
        motivation: 'Projeto em fase final de financiamento, aguardando apenas a formalização legal dos termos acordados entre as partes.',
        userData: {
            name: 'Juliano Pires',
            whatsapp: '(00) 00000-0000',
            email: 'juliano.pires@gmail.com',
        },
        creditScore: {
            platformRating: 5.0,
            projectsCompleted: 55,
            riskScore: 'A (Risco Mínimo)',
        },
        paymentCondition: 'Transferência Bancária',
        totalValue: 25000.00,
        balance: 25000.00,
        status: 'EM_ANDAMENTO', // Status 3
    },
    {
        id: '#1001',
        motivation: 'Proposta antiga, já finalizada com sucesso e arquivada.',
        userData: {
            name: 'Antônio Silva',
            whatsapp: '(00) 00000-0000',
            email: 'antonio.silva@gmail.com',
        },
        creditScore: {
            platformRating: 4.0,
            projectsCompleted: 5,
            riskScore: 'D (Muito Alto)',
        },
        paymentCondition: 'Boleto',
        totalValue: 1000.00,
        balance: 1000.00,
        status: 'ARQUIVADO', // Status 4
    },
];
