"use client";
import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Link from "next/link";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavItem,
  RightSection,
  NotificationButton,
} from "./styles";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // pega o caminho atual

  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo src="/assets/logo.png" alt="Work Capital" />

      {/* Links de Navegação */}
      <NavLinks>
        <NavItem href="/Home" $active={pathname === "/Home"}>
          Home
        </NavItem>
        <NavItem href="/Projects" $active={pathname === "/Projects"}>
          Meus Projetos
        </NavItem>
        <NavItem href="/Freelancer" $active={pathname === "/Freelancer"}>
          Freelancer
        </NavItem>
        <NavItem href="/Invest" $active={pathname === "/Invest"}>
          Investir
        </NavItem>
        <NavItem href="/Credit" $active={pathname === "/Credit"}>
          Crédito
        </NavItem>
      </NavLinks>

      {/* Notificação + Avatar */}
      <RightSection>
        <NotificationButton onClick={() => console.log("Ir para Notificações")}>
          <BellOutlined />
        </NotificationButton>
        <Link href="/Profile">
          <Avatar src="/assets/user.png" size="large" />
        </Link>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
