import styled from "styled-components";
import { Typography } from "antd";

export const ACTIVE_COLOR = '#0046A1';

export const ProposalGrid = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 2fr 1fr; /* Definição de 5 colunas */
    gap: 20px;
    align-items: center;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); /* 3 colunas em telas médias */
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Coluna única em mobile */
    }
`;

export const ProposalDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
`;

export const StatusTitle = styled(Typography.Title).attrs({
    level: 5,
})`
    && {
        font-size: 0.9rem !important;
        color: #777;
        font-weight: 500;
        margin-bottom: 5px;
    }
`;

export const ProgressSection = styled.div`
    padding: 5px 0;
`;

export const FundedText = styled(Typography.Text)`
    display: block;
    font-size: 0.85rem;
    color: #555;
    margin-top: 5px;
`;

export const ActionSection = styled.div`
    display: flex;
    align-self: center;
    justify-content: flex-end;
    
    @media (max-width: 768px) {
        justify-content: flex-start;
        margin-top: 10px;
    }
`;
