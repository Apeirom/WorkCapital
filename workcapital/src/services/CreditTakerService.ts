// services/CreditTakerService.ts

import api from './api';
import { CreditTaker, CreditTakerCreateData } from '../interfaces/User'; // Interfaces CreditTaker

export default class CreditTakerService {
    private basePath = 'credit-takers/';

    /**
     * ROTA: GET /api/credit-takers/
     * Retorna a lista de todos os perfis de tomador de crédito.
     */
    async getAll(): Promise<CreditTaker[]> {
        // Rota protegida por JWT
        const response = await api.get<CreditTaker[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: POST /api/credit-takers/
     * Cria um novo perfil de tomador de crédito.
     */
    async create(data: CreditTakerCreateData): Promise<CreditTaker> {
        const response = await api.post<CreditTaker>(this.basePath, data);
        return response.data;
    }
    
    // Você pode adicionar métodos para PATCH/Update, que é onde o frontend 
    // poderia atualizar os detalhes de contato, se necessário.
}