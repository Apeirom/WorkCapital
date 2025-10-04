"use client";

import React, { useState } from "react";
import { Typography, Input, Select, Button, Avatar } from "antd";
import { EditOutlined, LogoutOutlined } from "@ant-design/icons";
import Navbar from "@/components/NavBar"; // Seu componente Navbar

import * as S from "./styles"; // Estilos locais

const { Title, Text } = Typography;
const { Option } = Select;

// Estrutura de dados simulada do usuário
interface UserProfile {
    email: string;
    nome: string;
    genero: string;
    contato: string;
    cidade: string;
    estado: string;
    // ... outros campos (como data de nascimento, CPF, etc.)
}

const mockUserProfile: UserProfile = {
    email: "lucasmena@usp.br",
    nome: "Lucas Mena",
    genero: "Masculino",
    contato: "(80) 99999-0000",
    cidade: "São Paulo",
    estado: "SP",
};

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<UserProfile>(mockUserProfile);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentPassword, setCurrentPassword] = useState<string>('********'); // Senha simulada

    // Função genérica para lidar com a mudança nos inputs
    const handleChange = (field: keyof UserProfile, value: string) => {
        setUser(prev => ({ ...prev, [field]: value }));
    };

    // Função para simular o salvamento
    const handleSave = () => {
        console.log("Perfil salvo:", user);
        setIsEditing(false);
        // Lógica real de API iria aqui
    };

    const handleLogout = () => {
        console.log("Usuário deslogado.");
        // Lógica real de logout (limpar token, redirecionar) iria aqui
    };

    // Componente customizado para exibir o campo e o ícone de edição
    const EditableField: React.FC<{ label: string, field: keyof UserProfile, type?: string }> = ({ label, field, type = 'text' }) => (
        <S.FormField>
            <Text strong>{label}</Text>
            <S.InputGroup>
                <Input
                    type={type}
                    value={user[field] as string}
                    onChange={(e) => handleChange(field, e.target.value)}
                    disabled={!isEditing}
                />
                <EditOutlined style={{ color: isEditing ? S.ACTIVE_COLOR : S.INACTIVE_COLOR }} />
            </S.InputGroup>
        </S.FormField>
    );
    
    // Componente customizado para campos de seleção
    const SelectField: React.FC<{ label: string, field: keyof UserProfile, options: string[] }> = ({ label, field, options }) => (
        <S.FormField>
            <Text strong>{label}</Text>
            <S.InputGroup>
                <Select
                    value={user[field] as string}
                    onChange={(value) => handleChange(field, value)}
                    disabled={!isEditing}
                    style={{ width: '100%' }}
                >
                    {options.map(opt => <Option key={opt} value={opt}>{opt}</Option>)}
                </Select>
                <EditOutlined style={{ color: isEditing ? S.ACTIVE_COLOR : S.INACTIVE_COLOR }} />
            </S.InputGroup>
        </S.FormField>
    );

    return (
        <S.ProfileContainer>
            <Navbar />
            <S.MainContent>
                <S.ProfileCard>
                    <S.HeaderSection>
                        <Title level={3}>Editar Perfil</Title>
                        <Button 
                            danger 
                            ghost 
                            icon={<LogoutOutlined />}
                            onClick={handleLogout}
                            style={{ marginLeft: 'auto' }}
                        >
                            Sair
                        </Button>
                    </S.HeaderSection>
                    
                    {/* Seção de Avatar */}
                    <S.AvatarSection>
                        <Avatar size={120} src="/assets/user.png" />
                        <S.EditLink onClick={() => console.log("Abrir modal de upload")}>
                            Editar foto
                        </S.EditLink>
                    </S.AvatarSection>

                    <S.FormGrid>
                        {/* Linha 1: Email e Senha */}
                        <EditableField label="Email" field="email" type="email" />
                        <S.FormField>
                            <Text strong>Senha</Text>
                            <S.InputGroup>
                                <Input 
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    disabled={!isEditing}
                                />
                                <EditOutlined style={{ color: S.INACTIVE_COLOR }} />
                            </S.InputGroup>
                        </S.FormField>
                        
                        {/* Linha 2: Nome e Gênero */}
                        <EditableField label="Nome" field="nome" />
                        <SelectField label="Gênero" field="genero" options={['Masculino', 'Feminino', 'Outro']} />
                        
                        {/* Linha 3: Contato e Cidade */}
                        <EditableField label="Contato" field="contato" type="tel" />
                        <EditableField label="Cidade" field="cidade" />
                        
                        {/* Linha 4: Estado (Simples) */}
                        <EditableField label="Estado" field="estado" />

                    </S.FormGrid>

                    {/* Botões de Ação */}
                    <S.ActionButtons>
                        {!isEditing ? (
                            <Button type="primary" onClick={() => setIsEditing(true)} style={{ width: '150px' }}>
                                Editar
                            </Button>
                        ) : (
                            <>
                                <Button onClick={() => { setIsEditing(false); setUser(mockUserProfile); }} style={{ width: '150px' }}>
                                    Cancelar
                                </Button>
                                <Button type="primary" onClick={handleSave} style={{ width: '150px' }}>
                                    Salvar Alterações
                                </Button>
                            </>
                        )}
                    </S.ActionButtons>
                </S.ProfileCard>
            </S.MainContent>
        </S.ProfileContainer>
    );
};

export default ProfilePage;