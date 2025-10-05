// services/ProjectService.ts

import api from './api';
import { Project, ProjectCreateData } from '../interfaces/Project'; 

export default class ProjectService {
    private basePath = 'projects/';

    /**
     * ROTA: GET /api/projects/
     * Retorna a lista de todos os projetos (protegida por autenticação).
     */
    async getAll(): Promise<Project[]> {
        const response = await api.get<Project[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: GET /api/projects/{id}/
     * Retorna os detalhes de um projeto específico.
     */
    async getById(id: string): Promise<Project> {
        const response = await api.get<Project>(`${this.basePath}${id}/`);
        return response.data;
    }

    /**
     * ROTA: POST /api/projects/
     * Cria um novo projeto (publicado por um contratante).
     */
    async create(data: ProjectCreateData): Promise<Project> {
        const response = await api.post<Project>(this.basePath, data);
        return response.data;
    }

    /**
     * ROTA: PATCH /api/projects/{id}/
     * Atualiza o status ou detalhes do projeto (ex: atribuir um freelancer).
     */
    async update(id: string, data: Partial<ProjectCreateData>): Promise<Project> {
        const response = await api.patch<Project>(`${this.basePath}${id}/`, data);
        return response.data;
    }
}
