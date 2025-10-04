import styled from "styled-components";
import { Typography } from "antd";

// Cores
export const INACTIVE_COLOR = '#949494';
export const ACTIVE_COLOR = '#0046A1';
const BORDER_COLOR = '#e0e0e0';

export const ProfileContainer = styled.div`
    min-height: 100vh;
    background-color: #f7f9fc; /* Fundo levemente cinza */
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 20px;
`;

export const ProfileCard = styled.div`
    background: #fff;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 900px;
`;

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h3 {
        margin: 0;
        font-weight: 600;
        color: #333;
    }
`;

export const AvatarSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinha à esquerda, como na imagem */
    margin-bottom: 40px;
`;

export const EditLink = styled(Typography.Link)`
    margin-top: 10px;
    font-size: 0.9rem;
    color: ${ACTIVE_COLOR};
    cursor: pointer;
`;

// Layout de Grade para campos (2 colunas)
export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px 50px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Coluna única em telas menores */
    }
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;

    > .ant-typography {
        margin-bottom: 5px;
        color: #333;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid ${BORDER_COLOR};
    padding-bottom: 4px;
    
    .ant-input, .ant-select-selector {
        /* Garante que o input pareça um campo simples sem borda padrão */
        border: none !important;
        box-shadow: none !important;
        padding: 0;
        font-size: 1rem;
        color: #333;
    }

    /* Remove a borda inferior do Select para alinhamento */
    .ant-select {
        border-bottom: none !important;
    }
    
    /* Estiliza o ícone de edição (lápis) */
    .anticon-edit {
        font-size: 1rem;
        cursor: pointer;
        transition: color 0.2s;
        
        &:hover {
            color: ${ACTIVE_COLOR};
        }
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 15px;
    justify-content: flex-start; /* Alinha os botões à esquerda */
    margin-top: 20px;
`;
