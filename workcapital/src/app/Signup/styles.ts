import styled from "styled-components";

const PAGE_BACKGROUND_COLOR = '#f7f9fc';
const ACTIVE_COLOR = '#0046A1';

export const SignupContainer = styled.div`
    min-height: 100vh;
    background-color: ${PAGE_BACKGROUND_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const SignupCard = styled.div`
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 800px; /* Largura ajustada para acomodar 2 colunas confortavelmente */
`;

export const AvatarSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    .ant-avatar {
        margin-bottom: 10px;
    }
`;

export const FormGrid = styled.div`
    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* Coluna única em telas menores */
    }

    /* Estilos para os rótulos */
    .ant-form-item-label > label {
        font-weight: 500;
        color: #333;
    }
`;

export const TopLeftAction = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    
    .ant-btn-link {
        font-size: 0.9rem;
        padding: 0;
        
        .anticon {
            margin-right: 4px;
        }
    }
`;

