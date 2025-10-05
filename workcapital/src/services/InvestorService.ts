// services/InvestorService.ts

import api from './api';
import { Investor, InvestorCreateData } from '../interfaces/User'; // Reutilizando a interface

export default class InvestorService {
    private basePath = 'investors/';

    /**
     * ROTA: GET /api/investors/
     * Retorna a lista de todos os perfis de investidor.
     */
    async getAll(): Promise<Investor[]> {
        // Rota protegida: usa o token do header
        const response = await api.get<Investor[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: POST /api/investors/
     * Cria um novo perfil de investidor.
     */
    async create(data: InvestorCreateData): Promise<Investor> {
        const response = await api.post<Investor>(this.basePath, data);
        return response.data;
    }
    
}