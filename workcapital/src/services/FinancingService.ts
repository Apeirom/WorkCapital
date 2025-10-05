// services/FinancingService.ts

import api from './api';
import { Financing, FinancingCreateData } from '../interfaces/Financial'; // Reutilizando a interface

export default class FinancingService {
    private basePath = 'financings/';

    /**
     * ROTA: GET /api/financings/
     * Retorna a lista de todas as solicitações de financiamento.
     */
    async getAll(): Promise<Financing[]> {
        const response = await api.get<Financing[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: POST /api/financings/
     * Cria uma nova solicitação de financiamento.
     */
    async create(data: FinancingCreateData): Promise<Financing> {
        const response = await api.post<Financing>(this.basePath, data);
        return response.data;
    }
    
    /**
     * ROTA: GET /api/financings/{id}/
     * Retorna os detalhes de um financiamento específico.
     */
    async getById(id: string): Promise<Financing> {
        const response = await api.get<Financing>(`${this.basePath}${id}/`);
        return response.data;
    }

    /**
     * ROTA: PATCH /api/financings/{id}/
     * Permite a um investidor adicionar seu ID à lista de 'investors'
     * (A lógica de atualização deve ser tratada com cuidado no backend).
     */
    async update(id: string, data: Partial<FinancingCreateData>): Promise<Financing> {
        const response = await api.patch<Financing>(`${this.basePath}${id}/`, data);
        return response.data;
    }
}