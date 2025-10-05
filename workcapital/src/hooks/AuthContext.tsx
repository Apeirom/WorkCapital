"use client"

import { destroyCookie, setCookie, parseCookies } from 'nookies';
import React, { useState, useContext, createContext, useEffect } from 'react';
import api from '@/services/api';
import UserService from '@/services/UserService'; // Importa a instância padrão

import { UserUpdateData, UserProfile } from '@/interfaces/User';

interface ILoginRequest {
    email: string;
    password: string;
}

interface AuthContextData {
    user: UserProfile | null;
    userType: string | null;
    userId: string | null;
    login: (data: ILoginRequest) => Promise<void>; // Retorna Promise<void>
    logout: () => void;
    updateUser: (data: UserUpdateData) => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// 1. SIMPLIFICAÇÃO: Retorna à tipagem simples do componente React
export const AuthProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => { 
    const [user, setUser] = useState<UserProfile | null>(null);
    const [userType, setUserType] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const setAuthHeader = (token: string) => {
        api.defaults.headers.common = {
            Authorization: `Bearer ${token}`
        };
    };

    // =========================================================
    // EFEITO: Carregar Sessão
    // =========================================================
    useEffect(() => {
        const cookies = parseCookies(null);
        const token = cookies['@app:token'];
        const userIdCookie = cookies['@app:userId'];
        const userTypeCookie = cookies['@app:userType'];

        if (token && userIdCookie) {
            setAuthHeader(token);
            setUserType(userTypeCookie);
            setUserId(userIdCookie);
            
            // Reutiliza a lógica de buscar o perfil para re-hidratar o estado
            UserService.getProfile(userIdCookie)
                .then(setUser) // Usa o shorthand para setUser(profile)
                .catch(logout) // Desloga se o perfil não puder ser carregado
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    // =========================================================
    // FUNÇÕES DO CONTEXTO
    // =========================================================

    const login = async (data: ILoginRequest) => {
    try {
        // 1. Obter Tokens JWT (que agora inclui o objeto 'user')
        const jwtResponse = await UserService.login(data);
        const token = jwtResponse.access;
        // O objeto profile é extraído da resposta do JWT
        const profile = jwtResponse.user; 

        // 2. Configurar e Salvar Cookies (sem mock)
        setAuthHeader(token); 
        setCookie(undefined, '@app:token', token);
        
        const profileType = profile.contractor_profile ? 'contractor' : 'user';
        
        setCookie(undefined, '@app:userId', profile.id);
        setCookie(undefined, '@app:userType', profileType);
        
        // 3. Atualizar Estado
        setUser(profile);
        setUserId(profile.id);
        setUserType(profileType);

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};


    const logout = () => {
        destroyCookie(undefined, '@app:token');
        destroyCookie(undefined, '@app:userId');
        destroyCookie(undefined, '@app:userType');
        setUser(null);
        setUserType(null);
        setUserId(null);
        delete api.defaults.headers.common.Authorization;
    };
    
    const updateUser = async (data: UserUpdateData) => {
        if (!userId) return; // Retorna silenciosamente se não houver userId
        
        try {
            const updatedProfile = await UserService.updateProfile(userId, data);
            setUser(updatedProfile);
            alert("Perfil atualizado com sucesso!");

        } catch (error) {
            console.error("Erro ao atualizar perfil:", error);
            throw error;
        }
    };


    return (
        <AuthContext.Provider 
            value={{ user, userType, userId, login, logout, updateUser, loading }}
        >
            {loading ? <div>Carregando autenticação...</div> : children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);
export default useAuthContext;