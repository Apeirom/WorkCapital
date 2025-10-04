import styled from "styled-components";
import { Button } from "antd";

// Definição de cores para fácil manutenção
const PAGE_BACKGROUND_COLOR = '#f7f9fc';
const ACTIVE_BUTTON_COLOR = '#0046A1';
const INACTIVE_BUTTON_BACKGROUND = '#e9e9e9'; // Cinza claro para abas não ativas
const INACTIVE_TEXT_COLOR = '#555';

export const InvestContainer = styled.div`
  min-height: 100vh;
  background-color: ${PAGE_BACKGROUND_COLOR};
`;

export const MainContent = styled.div`
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

// NOVO CONTAINER: Alinha Tabs e Botão de Filtro
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; /* Centraliza verticalmente o botão com as abas */
    gap: 20px;
    padding: 0 20px; 
    margin-bottom: 20px; 

    @media (max-width: 900px) {
        align-items: stretch; /* Estica os itens (Tabs e Botão) para largura total */
    }
`;

// NOVO COMPONENTE: Botão de Filtro Estilizado (Aprimorado)
export const FilterButton = styled(Button)`
    /* Estilos base */
    min-width: 180px;
    height: 40px;
    border-radius: 6px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    
    /* Efeito visual aprimorado */
    /* Sombra projetada para dar sensação de profundidade e destaque */
    box-shadow: 0 4px 8px rgba(0, 70, 161, 0.3); 
    transition: all 0.3s ease-in-out;
    
    &:hover {
        /* Move ligeiramente para cima e aumenta a sombra no hover */
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(0, 70, 161, 0.4);
    }

    /* Estilo para garantir largura total em mobile */
    @media (max-width: 900px) {
        width: 100%;
        margin-top: 10px; /* Adiciona um espaço no mobile */
    }
`;


export const TabsWrapper = styled.div`
  flex-grow: 1;

  .ant-tabs-nav {
    margin-bottom: 0; 
    background: transparent;
    width: 100%;
  }

  .ant-tabs-nav-list {
    background-color: ${PAGE_BACKGROUND_COLOR};
    padding: 10px;
    border-radius: 8px;

    width: 100%;
    justify-content: center;
  }

  .ant-tabs-nav-wrap {
    justify-content: center;
  }

  /* Estilo dos botões/abas individuais (Inativo) */
  .ant-tabs-tab {
    margin: 0 5px;
    border-radius: 4px;
    background: ${INACTIVE_BUTTON_BACKGROUND} !important; 
    border: none !important;
    transition: all 0.3s ease;
    font-weight: 500;
    cursor: pointer;

    .ant-tabs-tab-btn {
        color: ${INACTIVE_TEXT_COLOR};
    }

    &:hover {
        background: #ddd !important; 
    }
  }

  /* Estilo do botão/aba individual (Ativo/Selecionado) */
  .ant-tabs-tab-active {
    background: ${ACTIVE_BUTTON_COLOR} !important;
    
    .ant-tabs-tab-btn {
      color: #fff !important; 
    }
  }

  /* Remove o sublinhado padrão do Antd para o modo 'card' */
  .ant-tabs-ink-bar {
      display: none !important;
  }
`;

// Container para envolver os InvestmentCards e permitir o scroll
export const CardsScrollContainer = styled.div`
    height: calc(100vh - 300px); 
    max-height: 70vh;
    overflow-y: auto;
    padding-right: 10px;
    
    /* Estilização da barra de scroll para navegadores webkit (Chrome/Edge/Safari) */
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;
