// services/UserService.ts

import api from './api';
import { ILoginRequest } from '../interfaces/Auth'; // Ajuste o caminho da sua interface de Login
import { 
    UserProfile, 
    UserRegistrationRequest, 
    UserUpdateData 
} from '../interfaces/User'; // Reutilizando suas interfaces

// Assumindo que JWTResponse é globalmente disponível ou importado de outro local
interface JWTResponse {
    refresh: string;
    access: string;
}

export class UserService {
    private basePath = '/api/profiles/';

    // =========================================================
    // 1. AUTENTICAÇÃO (Login e Registro)
    // =========================================================

    // ROTA: POST /api/token/
    async login({ email, password }: ILoginRequest): Promise<JWTResponse> {
        // O backend Django usa 'username' (que é o email) e 'password'
        const response = await api.post<JWTResponse>('/api/token/', {
            username: email, 
            password: password,
        });
        return response.data;
    }

    // ROTA: POST /api/register/
    async register(data: UserRegistrationRequest): Promise<UserProfile> {
        const response = await api.post<UserProfile>('/api/register/', data);
        return response.data;
    }

    // =========================================================
    // 2. OPERAÇÕES DE PERFIL (CRUD)
    // =========================================================

    // ROTA CUSTOMIZADA IDEAL: GET /api/profiles/me/
    // Se o backend não tiver a rota 'me/', esta função simula a busca do perfil logado.
    // NOTA: Para um sistema real, você buscará o ID do usuário (user_id) a partir do token
    // e fará um GET para /api/profiles/{user_id}/.
    async getProfile(userId: string): Promise<UserProfile> {
        // O DRF usa o ID do UserProfile para a rota de detalhe
        const response = await api.get<UserProfile>(`${this.basePath}${userId}/`);
        return response.data;
    }

    // ROTA: PATCH /api/profiles/{id}/
    async updateProfile(userId: string, data: UserUpdateData): Promise<UserProfile> {
        // Envia apenas os campos mutáveis
        const response = await api.patch<UserProfile>(`${this.basePath}${userId}/`, data);
        return response.data;
    }
}