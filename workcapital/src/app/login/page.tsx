"use client";

import React, { useState } from "react"; // Adiciona useState
import { Form, Input, Button, Typography, message } from "antd"; // Importa 'message'
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import useAuthContext from "@/hooks/AuthContext"; // Importa o hook

import {
  Container,
  LeftSide,
  RightSide,
  Title,
  FormWrapper,
  Logo,
  ButtonsWrapper
} from "./styles";

const { Link } = Typography;

// Tipagem segura para os dados do formulário
interface LoginFormValues {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const router = useRouter();
    // 1. CHAMA O HOOK E DESESTRUTURA 'login' e 'loading'
    const { login } = useAuthContext();
    // Estado de loading local (para o botão)
    const [loading, setLoading] = useState(false); 

    const handleLogin = async (values: LoginFormValues) => {
        setLoading(true);
        try {
            // 2. CHAMA A FUNÇÃO REAL DE LOGIN
            await login({ email: values.email, password: values.password });
            
            // 3. Sucesso: Mensagem e Redirecionamento
            message.success('Login realizado com sucesso! Redirecionando...');
            router.push("/Home"); 

        } catch (error) {
            // 4. Falha: Exibe Mensagem de Alerta (Ant Design message.error)
            console.error('Erro de Login:', error);
            // Mensagem genérica de falha na autenticação
            message.error('Falha no login. Verifique suas credenciais e tente novamente.'); 

        } finally {
            // 5. Independentemente do resultado, o loading volta a ser false
            setLoading(false);
        }
    };

    const handleRegister = () => {
        router.push("/Signup");
    };
    
    // O loading final é apenas o estado local 'loading'
    const totalLoading = loading;

    return (
        <Container>
            <LeftSide>
                <Title>Bem-vindo(a)!</Title>
                <FormWrapper>
                    <Form
                        name="login"
                        // 3. Conecta a função handleLogin
                        onFinish={handleLogin}
                        layout="vertical"
                    >
                        {/* Email */}
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: "Por favor, insira seu e-mail!" }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="E-mail"
                                size="large"
                            />
                        </Form.Item>

                        {/* Senha */}
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Por favor, insira sua senha!" }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Senha"
                                size="large"
                            />
                        </Form.Item>

                        {/* Esqueceu senha */}
                        <div style={{ textAlign: "right", marginBottom: "16px" }}>
                            <Link href="#" style={{ color: "#7ed321" }}>
                                Esqueceu sua senha?
                            </Link>
                        </div>

                        {/* Botões de Ação */}
                        <Form.Item>
                            <ButtonsWrapper>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    style={{ backgroundColor: "#7ed321", borderColor: "#7ed321" }}
                                    block
                                    loading={totalLoading} // Usa o estado de loading
                                >
                                    Entrar
                                </Button>

                                <Button
                                    type="default"
                                    size="large"
                                    onClick={handleRegister}
                                    block
                                    disabled={totalLoading}
                                >
                                    Cadastrar
                                </Button>
                            </ButtonsWrapper>
                        </Form.Item>
                    </Form>
                </FormWrapper>
            </LeftSide>

            {/* Lado Branco com Logo */}
            <RightSide>
                <Logo src="/assets/loginRightSide.png" alt="Work Capital" />
            </RightSide>
        </Container>
    );
};

export default LoginPage;