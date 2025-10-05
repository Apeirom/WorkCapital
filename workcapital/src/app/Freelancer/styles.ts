import styled from "styled-components";
import { Typography } from "antd";

const PAGE_BACKGROUND_COLOR = '#f7f9fc';
export const ACTIVE_COLOR = '#0046A1';
const BORDER_COLOR = '#e0e0e0';

export const FreelancerContainer = styled.div`
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

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .ant-typography-title {
        font-weight: 600;
        color: #333;
    }
`;

// --- GRID DE ESTATÍSTICAS (4 colunas) ---
export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 40px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// --- GRID DE GRÁFICO E PREVISÃO (2 colunas) ---
export const ChartAndRecebimentoGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr; /* 2/3 para o gráfico, 1/3 para a previsão */
    gap: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr; /* Coluna única em telas menores */
    }
`;

// --- Estilos para o Card de Faturamento (Gráfico) ---
export const FaturamentoCard = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    .ant-typography-title {
        margin-bottom: 20px;
        font-size: 1.2rem !important;
    }
`;

export const ChartPlaceholder = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    border: 1px dashed ${BORDER_COLOR};
    color: #999;
    font-size: 1rem;
`;

// --- Estilos para o Card de Recebimento ---
export const RecebimentoCard = styled(FaturamentoCard)`
    padding: 20px;
`;

export const CircleProgress = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
`;

export const CirclePlaceholder = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid ${ACTIVE_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${ACTIVE_COLOR};
`;

export const BalanceInfo = styled.div`
    h3 {
        font-size: 1.8rem !important;
        color: ${ACTIVE_COLOR} !important;
    }
    .ant-typography-secondary {
        font-size: 0.9rem;
    }
`;

export const PaymentDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
`;

export const PaymentRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    
    .ant-typography-text {
        font-size: 0.9rem;
    }
`;

export const LastPayment = styled.div`
    font-size: 0.9rem;
    color: #777;
    text-align: center;
    margin-top: 15px;
`;

export const DaysValue = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    display: block;
`;
