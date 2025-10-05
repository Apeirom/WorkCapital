"use client";

import React, { useState } from "react";
import { Typography, Input, Select, Button, Avatar, Form, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, UploadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link"; // Importado Link do Next.js

import * as S from "./styles";

const { Title } = Typography;
const { Option } = Select;

// Interface simplificada para o formulário
interface SignupFormValues {
    email: string;
    password: string;
    name: string;
    gender?: string;
    contact?: string;
    city?: string;
    state?: string;
}

const SignupPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();

    const handleFormSubmit = async (values: SignupFormValues) => {
        setIsLoading(true);
        console.log("Dados de Cadastro:", values);
        
        // Simulação de chamada de API
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        setIsLoading(false);
        message.success("Cadastro realizado com sucesso! Bem-vindo ao WorkCapital.");
        
        // Aqui você faria o redirecionamento para a página inicial
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
                        {/* Linha 1: Email (Obrigatório) e Senha (Obrigatória) */}
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
                        
                        {/* Linha 2: Nome (Obrigatório) e Gênero (Opcional) */}
                        <Form.Item
                            name="name"
                            label="Nome"
                            rules={[{ required: true, message: 'Por favor, insira seu nome completo!' }]}
                        >
                            <Input placeholder="Seu nome" prefix={<UserOutlined />} />
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
                        
                        {/* Linha 3: Contato (Opcional) e Cidade (Opcional) */}
                        <Form.Item
                            name="contact"
                            label="Contato (Opcional)"
                        >
                            <Input placeholder="(00) 00000-0000" />
                        </Form.Item>
                        
                        <Form.Item
                            name="city"
                            label="Cidade (Opcional)"
                        >
                            <Input placeholder="Ex: São Paulo" />
                        </Form.Item>
                        
                        {/* Linha 4: Estado (Opcional) */}
                        <Form.Item
                            name="state"
                            label="Estado (Opcional)"
                        >
                            <Input placeholder="Ex: SP" style={{ maxWidth: 150 }} />
                        </Form.Item>

                        {/* Coluna vazia para alinhar o grid, ou usar um wrapper de 1 coluna */}
                        <div /> 

                    </S.FormGrid>
                    
                    <Form.Item style={{ marginTop: 20 }}>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={isLoading}
                            size="large"
                            style={{ width: '100%' }}
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
