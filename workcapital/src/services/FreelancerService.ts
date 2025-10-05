// services/FreelancerService.ts

import api from './api';
import { Freelancer, FreelancerCreateData } from '../interfaces/Marketplace'; // Reutilizando suas interfaces

// Interface para a resposta da rota customizada de Score
interface ScoreResponse {
    status: string;
    score: number;
    data: Freelancer; // Retorna o objeto Freelancer atualizado
}

export default class FreelancerService {
    // Definimos o caminho base da rota para reuso
    private basePath = '/api/freelancers/';

    // =========================================================
    // 1. OPERAÇÕES CRUD BÁSICAS
    // =========================================================

    /**
     * ROTA: GET /api/freelancers/
     * Retorna a lista de todos os perfis de freelancer.
     */
    async getAll(): Promise<Freelancer[]> {
        // Assume que o token JWT já está no header padrão do 'api'
        const response = await api.get<Freelancer[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: GET /api/freelancers/{id}/
     * Retorna o perfil detalhado de um freelancer específico.
     */
    async getById(id: string): Promise<Freelancer> {
        const response = await api.get<Freelancer>(`${this.basePath}${id}/`);
        return response.data;
    }

    /**
     * ROTA: POST /api/freelancers/
     * Cria um novo perfil de freelancer.
     */
    async create(data: FreelancerCreateData): Promise<Freelancer> {
        const response = await api.post<Freelancer>(this.basePath, data);
        return response.data;
    }

    /**
     * ROTA: PATCH /api/freelancers/{id}/
     * Atualiza parcialmente um perfil de freelancer.
     */
    async update(id: string, data: Partial<FreelancerCreateData>): Promise<Freelancer> {
        const response = await api.patch<Freelancer>(`${this.basePath}${id}/`, data);
        return response.data;
    }

    /**
     * ROTA: DELETE /api/freelancers/{id}/
     * Deleta um perfil de freelancer.
     */
    async remove(id: string): Promise<void> {
        await api.delete(`${this.basePath}${id}/`);
    }

    // =========================================================
    // 2. ROTA CUSTOMIZADA (Machine Learning)
    // =========================================================

    /**
     * ROTA CUSTOMIZADA: POST /api/freelancers/{id}/calculate_score/
     * Aciona a lógica de Machine Learning no backend para calcular e salvar o score.
     */
    async calculateScore(freelancerId: string): Promise<ScoreResponse> {
        // O POST não precisa de body, apenas de acionamento
        const response = await api.post<ScoreResponse>(
            `${this.basePath}${freelancerId}/calculate_score/`
        );
        return response.data;
    }
}
