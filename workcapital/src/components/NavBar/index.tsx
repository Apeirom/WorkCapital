"use client";
import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavItem,
  RightSection,
  NotificationButton,
  AvatarButton,
} from "./styles";
import { usePathname } from "next/navigation"; // Para detectar a página atual

const Navbar: React.FC = () => {
  const pathname = usePathname(); // pega o caminho atual

  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo src="/assets/logo.png" alt="Work Capital" />

      {/* Links de Navegação */}
      <NavLinks>
        <NavItem href="/home" active={pathname === "/home"}>
          Home
        </NavItem>
        <NavItem href="/projects" active={pathname === "/projects"}>
          Meus Projetos
        </NavItem>
        <NavItem href="/freelancer" active={pathname === "/freelancer"}>
          Freelancer
        </NavItem>
        <NavItem href="/invest" active={pathname === "/invest"}>
          Investir
        </NavItem>
        <NavItem href="/credit" active={pathname === "/credit"}>
          Crédito
        </NavItem>
      </NavLinks>

      {/* Notificação + Avatar */}
      <RightSection>
        <NotificationButton onClick={() => console.log("Ir para Notificações")}>
          <BellOutlined />
        </NotificationButton>
        <AvatarButton onClick={() => console.log("Ir para Perfil")}>
          <Avatar src="/assets/user.png" size="large" />
        </AvatarButton>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
