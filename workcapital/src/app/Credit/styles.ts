import styled from "styled-components";

const PAGE_BACKGROUND_COLOR = '#f7f9fc';

export const CreditContainer = styled.div`
    min-height: 100vh;
    background-color: ${PAGE_BACKGROUND_COLOR};
`;

export const MainContent = styled.div`
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;

    .ant-typography-title {
        color: #333;
    }
`;

// Wrapper para a seção de Débitos em Aberto
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;

    .ant-typography-title {
        font-weight: 600;
        color: #0046A1; /* Título Débitos em Aberto em azul */
    }
`;

// Wrapper para a seção de Minhas Solicitações (com o botão de Iniciar Solicitação)
export const RequestsHeaderWrapper = styled(HeaderWrapper)`
    margin-top: 40px;
    margin-bottom: 0px;
    border-bottom: none; /* Remove a linha de separação */
    
    .ant-typography-title {
        color: #333; /* Título Minhas Solicitações em preto */
    }
`;

export const DebtsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

// Lista de Propostas de Crédito (usada dentro das abas)
export const ProposalsList = styled(DebtsList)`
    padding-top: 15px;
    /* Adicione rolagem se necessário, similar ao CardsScrollContainer */
    max-height: 55vh; 
    overflow-y: auto;
    padding-right: 10px;
`;
