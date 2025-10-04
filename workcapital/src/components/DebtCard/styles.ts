import styled from "styled-components";

// Layout de grid para os detalhes do débito
export const DebtGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 colunas para os detalhes */
    gap: 20px;
    align-items: center;

    /* Responsividade */
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Coluna única em mobile */
    }
`;

export const DebtDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;

    .ant-typography-title {
        font-size: 0.9rem !important;
        color: #777;
        font-weight: 500;
    }

    .ant-typography {
        font-size: 1rem;
        color: #333;
    }
`;

export const StatusTag = styled.div`
    /* A tag do antd já faz a maior parte do trabalho, mas podemos customizar aqui se necessário */
`;
