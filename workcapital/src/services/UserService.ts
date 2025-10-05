// services/UserService.ts

import { AxiosResponse } from 'axios';
import api from './api';
import { setCookie } from 'nookies'; 
import { 
    UserProfile, 
    UserRegistrationRequest, 
    UserUpdateData 
} from '../interfaces/User'; 

// Assumindo que ILoginRequest e JWTResponse estão disponíveis globalmente
interface ILoginRequest {
    email: string;
    password: string;
}

interface JWTResponse {
    refresh: string;
    access: string;
    user: UserProfile;
}

// A classe original, agora sem o 'export' e sem a palavra-chave 'static' nos métodos
class UserServiceClass {
    private basePath = 'profiles/';

    // =========================================================
    // 1. AUTENTICAÇÃO (Métodos de Instância)
    // =========================================================

    // ROTA: POST /api/token/ (Login) - MÉTODO DE INSTÂNCIA
    async login({ email, password }: ILoginRequest): Promise<JWTResponse> {
        const response: AxiosResponse<JWTResponse> = await api.post(
            'token/',
            { username: email, password: password }
        );
        
        const token = response.data.access;
        setCookie(undefined, '@app:token', token); 
        
        return response.data;
    }

    // ROTA: POST /api/register/
    async register(data: UserRegistrationRequest): Promise<UserProfile> {
        const response: AxiosResponse<UserProfile> = await api.post('/api/register/', data);
        return response.data;
    }


    // =========================================================
    // 2. OPERAÇÕES DE PERFIL (CRUD RESTful)
    // =========================================================

    // ROTA: GET /api/profiles/{userId}/ - MÉTODO DE INSTÂNCIA
    async getProfile(userId: string): Promise<UserProfile> {
        const response: AxiosResponse<UserProfile> = await api.get(
            `${this.basePath}${userId}/`
        );
        return response.data;
    }
    
    // ROTA: PATCH /api/profiles/{userId}/ - MÉTODO DE INSTÂNCIA
    async updateProfile(userId: string, data: UserUpdateData): Promise<UserProfile> {
        const response: AxiosResponse<UserProfile> = await api.patch(
            `${this.basePath}${userId}/`,
            data
        );
        return response.data;
    }
}

// Criamos e exportamos a instância única do serviço (o objeto real)
const UserService = new UserServiceClass();
export default UserService;