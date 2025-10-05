// services/PaymentService.ts

import api from './api';
import { Payment, PaymentCreateData } from '../interfaces/Financial'; // Reutilizando a interface

export default class PaymentService {
    private basePath = 'payments/';

    /**
     * ROTA: GET /api/payments/
     * Retorna a lista de todas as transações de pagamento (protegida por autenticação).
     */
    async getAll(): Promise<Payment[]> {
        const response = await api.get<Payment[]>(this.basePath);
        return response.data;
    }

    /**
     * ROTA: POST /api/payments/
     * Cria um novo pagamento, acionando a lógica de atualização de saldo no backend.
     */
    async create(data: PaymentCreateData): Promise<Payment> {
        // Envia os IDs do pagador/receptor e o valor.
        const response = await api.post<Payment>(this.basePath, data);
        return response.data;
    }
    
    /**
     * ROTA: GET /api/payments/{id}/
     * Retorna os detalhes de um pagamento específico.
     */
    async getById(id: string): Promise<Payment> {
        const response = await api.get<Payment>(`${this.basePath}${id}/`);
        return response.data;
    }
}
