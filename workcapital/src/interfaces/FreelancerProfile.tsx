// Estrutura base para um perfil editável
export interface FreelancerProfile {
    id: string; // ID único do perfil de serviço/freelancer
    name: string; // Nome (pode ser o nome real ou nome da marca)
    title: string; // Ex: Desenvolvedor Web Full Stack
    serviceDescription: string; // Descrição longa do serviço/bio
    category: string; // Categoria principal (Ex: Desenvolvimento Web, Design UI/UX)
    hourlyRate: number; // Valor/hora sugerido
    rating: number; // Nota de avaliação (Ex: 4.8)
    experienceYears: number; // Anos de experiência
    isPublic: boolean; // Se o perfil está visível
}

// Mocks para simular múltiplos perfis de edição (se for o caso)
export const mockProfiles: FreelancerProfile[] = [
    {
        id: 'dev_001',
        name: 'Carlos V.',
        title: 'Desenvolvedor Web Full Stack',
        serviceDescription: 'Desenvolvimento de aplicações web modernas com foco em performance e experiência do usuário (UX). Especialista em Next.js e TypeScript.',
        category: 'Desenvolvimento Web',
        hourlyRate: 75.00,
        rating: 4.8,
        experienceYears: 5,
        isPublic: true,
    },
    {
        id: 'ui_001',
        name: 'Carlos V. (Design)',
        title: 'Design UI/UX & Branding',
        serviceDescription: 'Criação de wireframes, protótipos de alta fidelidade e identidade visual. Foco em conversão e acessibilidade.',
        category: 'Design UI/UX',
        hourlyRate: 60.00,
        rating: 4.5,
        experienceYears: 3,
        isPublic: false,
    },
];

// Mocks para opções de seleção
export const mockCategories = [
    'Desenvolvimento Web',
    'Design UI/UX',
    'Marketing Digital',
    'Escrita e Tradução',
    'Consultoria Financeira',
];
