import styled from "styled-components";

// Navbar Container
export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 12.5%;
  width: 100%;
  padding: 0 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  font-family: 'Poppins', sans-serif;
`;

// Logo
export const Logo = styled.img`
  height: 70%;
  cursor: pointer;
`;

// Links de navegação
export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  font-size: 1rem;
  color: ${({ active }) => (active ? "#0046A1" : "#949494")};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: ${({ active }) => (active ? "2px solid #0046A1" : "2px solid transparent")};

  &:hover {
    color: #3978c9;
  }
`;

// Seção direita (notificação + avatar)
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

// Botão de notificação
export const NotificationButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  color: #333;
  background: none;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #3978c9;
  }
`;

// Botão do avatar
export const AvatarButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
`;
