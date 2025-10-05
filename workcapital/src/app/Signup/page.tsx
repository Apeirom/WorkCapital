"use client";

import React, { useState } from "react";
import { Typography, Input, Select, Button, Avatar, Form, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, UploadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Serviços e Interfaces
import UserService from '@/services/UserService'; 
import { UserRegistrationRequest } from '@/interfaces/User';

import * as S from "./styles";

const { Title } = Typography;
const { Option } = Select;

// Mapeia os campos do formulário para o payload da API
interface SignupFormValues {
    email: string;
    password: string;
    name: string; // Mantido para o input de UX
    cpf: string;
    gender?: string;
    phone?: string;
    city?: string;
    state?: string;
}

const SignupPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const router = useRouter(); 

    const handleFormSubmit = async (values: SignupFormValues) => {
        setIsLoading(true);
        try {
            // 1. Mapeamento do Payload: Converte os dados do form para o formato da API
            const payload: UserRegistrationRequest = {
                email: values.email,
                password: values.password,
                cpf: values.cpf,
                // Mapeia 'phone'
                phone: values.phone || '', 
                // Garante que o gender não seja undefined se for 'Não Informado'
                gender: values.gender || 'Não Informado', 
                city: values.city || '',
                state: values.state || '',
            };
            
            // 2. Chama a API de Registro (Substitui a simulação)
            await UserService.register(payload);

            // 3. Sucesso: Mensagem e Redirecionamento
            message.success("Cadastro realizado com sucesso! Você já pode fazer login.");
            router.push("/Login"); 

        } catch (error) {
            console.error("Erro ao registrar:", error);
            
            // 4. Tratamento de Erros: Mostra a mensagem de falha
            // O Django devolve 400 Bad Request se email/cpf for duplicado
            message.error("Falha no cadastro. Verifique se o e-mail ou CPF já está em uso, ou se os dados estão incorretos.");

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <S.SignupContainer>
            <S.SignupCard>
                <S.TopLeftAction>
                    <Link href="/Login" passHref>
                        <Button type="link" style={{ padding: 0, color: '#777' }}>
                            <ArrowLeftOutlined /> Retornar ao Login
                        </Button>
                    </Link>
                </S.TopLeftAction>

                <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
                    Crie sua Conta
                </Title>
                
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFormSubmit}
                    initialValues={{ gender: 'Não Informado' }}
                    requiredMark={false}
                >
                    {/* Seção de Foto (Opcional) */}
                    <S.AvatarSection>
                        <Avatar size={100} icon={<UserOutlined />} src="/assets/placeholder_user.png" />
                        <Button 
                            type="link" 
                            style={{ border: "solid 1px #ccc", borderRadius: 4, marginTop: 8 }}
                            icon={<UploadOutlined />}
                            onClick={() => message.info("Funcionalidade de upload futura!")}
                        >
                            Editar foto
                        </Button>
                    </S.AvatarSection>

                    <S.FormGrid>
                        {/* Linha 1: Email e Senha */}
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Por favor, insira seu email!' }, { type: 'email', message: 'Email inválido!' }]}
                        >
                            <Input placeholder="seu.email@exemplo.com" prefix={<MailOutlined />} />
                        </Form.Item>
                        
                        <Form.Item
                            name="password"
                            label="Senha"
                            rules={[{ required: true, message: 'Por favor, insira sua senha!' }, { min: 6, message: 'A senha deve ter no mínimo 6 caracteres.' }]}
                        >
                            <Input.Password placeholder="********" prefix={<LockOutlined />} />
                        </Form.Item>
                        
                        {/* Linha 2: Nome e CPF (CRUCIAL) */}
                        <Form.Item
                            name="name"
                            label="Nome Completo"
                            rules={[{ required: true, message: 'Por favor, insira seu nome completo!' }]}
                        >
                            <Input placeholder="Seu nome" prefix={<UserOutlined />} />
                        </Form.Item>
                        
                        <Form.Item
                            name="cpf"
                            label="CPF"
                            rules={[{ required: true, message: 'Por favor, insira seu CPF!' }]}
                        >
                            <Input placeholder="000.000.000-00" />
                        </Form.Item>
                        
                        {/* Linha 3: Contato (Phone) e Gênero */}
                        <Form.Item
                            name="phone"
                            label="Contato (Opcional)"
                        >
                            <Input placeholder="(00) 00000-0000" />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Gênero (Opcional)"
                        >
                            <Select placeholder="Selecione">
                                <Option value="Masculino">Masculino</Option>
                                <Option value="Feminino">Feminino</Option>
                                <Option value="Outro">Outro</Option>
                                <Option value="Não Informado">Prefiro não informar</Option>
                            </Select>
                        </Form.Item>
                        
                        {/* Linha 4: Cidade e Estado */}
                        <Form.Item
                            name="city"
                            label="Cidade (Opcional)"
                        >
                            <Input placeholder="Ex: São Paulo" />
                        </Form.Item>
                        
                        <Form.Item
                            name="state"
                            label="Estado (Opcional)"
                        >
                            <Input placeholder="Ex: SP" />
                        </Form.Item>

                    </S.FormGrid>
                    
                    <Form.Item style={{ marginTop: 20 }}>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={isLoading}
                            size="large"
                            style={{ width: '100%', backgroundColor: "#7ed321", borderColor: "#7ed321" }}
                        >
                            {isLoading ? 'Registrando...' : 'Criar Conta'}
                        </Button>
                    </Form.Item>
                </Form>
            </S.SignupCard>
        </S.SignupContainer>
    );
};

export default SignupPage;