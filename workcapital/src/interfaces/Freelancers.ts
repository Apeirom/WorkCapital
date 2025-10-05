// interfaces/Marketplace.ts

import { BaseModel } from './Base';

/** Interface do Perfil Detalhado de Freelancer (Retorno do GET/List). */
export interface Freelancer extends BaseModel {
    // Chaves estrangeiras (IDs)
    user_profile: string; // UUID do UserProfile
    
    // Dados para o Frontend (Via Serializer Getters)
    title: string; // Mapeado de prof_title no Serializer
    profileType: 'Perfil Campeão' | 'Perfil Verificado' | 'Novo Talento'; // Gerado via SerializerMethodField
    city: string; // Gerado via SerializerMethodField (cidade, estado)
    images: string[]; // Mock de URLs de imagem
    description: string | null; // Mapeado de TextField

    // Dados do Modelo
    prof_title: string;
    name: string;
    category: string;
    suggest_hourly_rate: string; // Mapeado de DecimalField
    avaliation_score: number; // Mapeado de DecimalField
    freelancer_experiences: string; // JSON String ou Text
}

/** Interface do Payload para Criar/Atualizar um Freelancer (POST/PATCH /api/freelancers/). */
export interface FreelancerCreateData {
    user_profile: string; // ID do UserProfile (UUID)
    prof_title: string;
    name: string;
    description?: string; // Opcional
    category: string;
    suggest_hourly_rate: string;
    freelancer_experiences?: string;
}