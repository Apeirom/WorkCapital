"use client";

import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  FormWrapper,
  Logo,
  ButtonsWrapper
} from "./styles";
import { useRouter } from "next/navigation";

const { Link } = Typography;

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleLogin = (values: unknown) => {
    console.log("Login realizado:", values);
    router.push("/home"); // futuramente será substituído pelo hook
  };

  const handleRegister = () => {
    router.push("/register"); // pode apontar para a página de cadastro
  };

  return (
    <Container>
      {/* Lado Azul com o Form */}
      <LeftSide>
        <Title>Bem-vindo(a)!</Title>
        <FormWrapper>
          <Form
            name="login"
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
                >
                  Entrar
                </Button>

                <Button
                  type="default"
                  size="large"
                  onClick={handleRegister}
                  block
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
