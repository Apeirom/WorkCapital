// services/AuthService.ts

import api from './api';
import { ILoginRequest } from '../interfaces/Auth'; // Ajuste o caminho da sua interface

// Interface da Resposta do JWT para facilitar o tratamento
interface JWTResponse {
  refresh: string;
  access: string;
}

interface UserProfile {
    id: string;
    cpf: string;
    phone: string;
    gender: string;
    email: string;
    name: string;
    state: string;
    city: string;
    account_balance: number;
}

interface RegisterRequest {
    email: string;
    password: string;
    cpf: string;
    phone: string;
    gender: string;
    city: string;
    state: string;
}

export default class AuthService {
  // ROTA: POST /api/token/
  async login({ email, password }: ILoginRequest): Promise<JWTResponse> {
    const response = await api.post<JWTResponse>('/api/token/', {
      username: email, // O backend Django usa 'username' (que é o email) e 'password'
      password: password,
    });
    return response.data;
  }

  // ROTA: POST /api/register/
  async register(data: RegisterRequest): Promise<UserProfile> {
    const response = await api.post('/api/register/', data);
    return response.data;
  }
}
