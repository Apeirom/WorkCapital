// services/ContractorService.ts

import api from './api';
import { Contractor, ContractorCreateData } from '../interfaces/User'; // Interfaces Contractor
import { Project } from '../interfaces/Project'; // Interface Project

export default class ContractorService {
    private basePath = 'contractors/';

    // =========================================================
    // 1. OPERAÇÕES CRUD BÁSICAS
    // =========================================================

    /**
     * ROTA: GET /api/contractors/
     * Retorna a lista de todos os perfis de contratante.
     */
    async getAll(): Promise<Contractor[]> {
        const response = await api.get<Contractor[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: POST /api/contractors/
     * Cria um novo perfil de contratante.
     */
    async create(data: ContractorCreateData): Promise<Contractor> {
        const response = await api.post<Contractor>(this.basePath, data);
        return response.data;
    }

    // =========================================================
    // 2. ROTA CUSTOMIZADA (Projetos do Contratante)
    // =========================================================

    /**
     * ROTA CUSTOMIZADA: GET /api/contractors/{id}/projects/
     * Retorna todos os projetos criados por este contratante.
     */
    async getProjects(contractorId: string): Promise<Project[]> {
        // Usa a rota aninhada que você definiu no ContractorViewSet
        const response = await api.get<Project[]>(`${this.basePath}${contractorId}/projects/`);
        return response.data;
    }
}