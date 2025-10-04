// src/components/InvestmentCard/styles.ts
import styled from "styled-components";
import { Typography } from "antd";

// Layout de 3 colunas para o conteúdo do Card
export const ProposalGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr; /* Ajuste as proporções conforme a imagem */
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Em telas menores, exibe em coluna */
  }
`;

export const SectionTitle = styled(Typography.Text)`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #777;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const MotivationText = styled(Typography.Paragraph)`
  font-size: 0.9rem;
  color: #333;
`;

export const ScoreRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
`;

export const ScoreText = styled(Typography.Text)`
  font-size: 0.9rem;
  color: #555;
`;

export const BalanceText = styled(Typography.Title).attrs({
    level: 4,
})`
  && { /* Usando && para aumentar a especificidade e garantir a aplicação */
    margin: 0;
    color: #0046A1;
    font-size: 1.2rem;
  }
`;