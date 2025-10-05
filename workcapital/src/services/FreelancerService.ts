// services/FreelancerService.ts

import { AxiosResponse } from 'axios'; // Importa AxiosResponse
import api from './api';
import { Freelancer, FreelancerCreateData } from '../interfaces/Marketplace'; // Reutilizando suas interfaces

// Interface para a resposta da rota customizada de Score
interface ScoreResponse {
    status: string;
    score: number;
    data: Freelancer; // Retorna o objeto Freelancer atualizado
}

// O serviço agora é exportado como uma classe estática, sem 'export default class'
export default class FreelancerService {
    // Definimos o caminho base (URL RESTful do DRF)
    private static basePath = 'freelancers/';

    // =========================================================
    // 1. OPERAÇÕES CRUD BÁSICAS (Estáticas)
    // =========================================================

    /**
     * ROTA: GET /api/freelancers/
     * Retorna a lista de todos os perfis de freelancer.
     */
    static async getAll(): Promise<Freelancer[]> {
        // Rotas DRF RESTful são limpas: /api/freelancers/
        const response: AxiosResponse<Freelancer[]> = await api.get(this.basePath);
        return response.data;
    }

    /**
     * ROTA: GET /api/freelancers/{id}/
     * Retorna o perfil detalhado de um freelancer específico.
     */
    static async getById(id: string): Promise<Freelancer> {
        const response: AxiosResponse<Freelancer> = await api.get(`${this.basePath}${id}/`);
        return response.data;
    }

    /**
     * ROTA: POST /api/freelancers/
     * Cria um novo perfil de freelancer.
     */
    static async create(data: FreelancerCreateData): Promise<Freelancer> {
        // Envia o payload como JSON
        const response: AxiosResponse<Freelancer> = await api.post(this.basePath, data);
        return response.data;
    }

    /**
     * ROTA: PATCH /api/freelancers/{id}/
     * Atualiza parcialmente um perfil de freelancer.
     */
    static async update(id: string, data: Partial<FreelancerCreateData>): Promise<Freelancer> {
        // DRF usa PATCH para atualização parcial
        const response: AxiosResponse<Freelancer> = await api.patch(`${this.basePath}${id}/`, data);
        return response.data;
    }

    /**
     * ROTA: DELETE /api/freelancers/{id}/
     * Deleta um perfil de freelancer.
     */
    static async remove(id: string): Promise<void> {
        // DELETE retorna 204 No Content, Promise<void> é apropriado
        await api.delete(`${this.basePath}${id}/`);
    }

    // =========================================================
    // 2. ROTA CUSTOMIZADA (Machine Learning)
    // =========================================================

    /**
     * ROTA CUSTOMIZADA: POST /api/freelancers/{id}/calculate_score/
     * Aciona a lógica de Machine Learning no backend.
     */
    static async calculateScore(freelancerId: string): Promise<ScoreResponse> {
        // O POST é enviado para a rota customizada (@action no Django)
        const response: AxiosResponse<ScoreResponse> = await api.post(
            `${this.basePath}${freelancerId}/calculate_score/`
            // Não enviamos Body aqui, a lógica está no backend
        );
        return response.data;
    }
}