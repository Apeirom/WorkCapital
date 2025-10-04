// src/components/InvestmentCard/InvestmentCard.tsx
"use client";

import React from 'react';
import { Card, Button, Typography, Tag } from 'antd';
import { StarFilled, CheckCircleFilled } from '@ant-design/icons';
import { InvestmentProposal } from '@/interfaces/Credit';
import {
  ProposalGrid,
  SectionTitle,
  ScoreRating,
  ScoreText,
  MotivationText,
  BalanceText,
} from './styles'; // Importa os estilos locais

const { Title, Text } = Typography;

interface InvestmentCardProps {
  proposal: InvestmentProposal;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ proposal }) => {
  const { id, motivation, userData, creditScore, paymentCondition, totalValue, balance } = proposal;

  // Lógica para determinar a cor do risco
  const getRiskColor = (score: string) => {
    if (score.includes('Baixo')) return 'success';
    if (score.includes('Moderado')) return 'warning';
    return 'error';
  };

  return (
    <Card title={`Pedido ${id}`} style={{ marginBottom: '20px' }}>
      <ProposalGrid>
        {/* COLUNA 1: Motivação e Valor */}
        <div>
          <SectionTitle>Motivação para o Pedido</SectionTitle>
          <MotivationText ellipsis={{ rows: 5, expandable: true, symbol: 'ler mais' }}>
            {motivation}
          </MotivationText>
        </div>

        {/* COLUNA 2: Dados do Usuário e Condições */}
        <div>
          <SectionTitle>Dados do Usuário</SectionTitle>
          <Text strong>Nome:</Text> <Text>{userData.name}</Text><br />
          <Text strong>Whatsapp:</Text> <Text>{userData.whatsapp}</Text><br />
          <Text strong>Email:</Text> <Text>{userData.email}</Text>
          
          <SectionTitle style={{ marginTop: '20px' }}>Condição de Pagamento</SectionTitle>
          <Tag color="blue">{paymentCondition}</Tag>
          
          <SectionTitle style={{ marginTop: '20px' }}>Valor Total</SectionTitle>
          <Title level={4} style={{ margin: 0 }}>
            R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Title>
        </div>

        {/* COLUNA 3: Score de Crédito e Ações */}
        <div style={{ borderLeft: '1px solid #f0f0f0', paddingLeft: '20px' }}>
          <SectionTitle>Score de Crédito</SectionTitle>
          <ScoreRating>
            <StarFilled style={{ color: '#FFB800' }} />
            Avaliação na Plataforma: <ScoreText strong>{creditScore.platformRating.toFixed(1)}</ScoreText>
          </ScoreRating>
          <ScoreText>
            <CheckCircleFilled style={{ color: '#52c41a' }} />
            Projetos concluídos: <Text strong>{creditScore.projectsCompleted}</Text>
          </ScoreText>
          
          <Tag color={getRiskColor(creditScore.riskScore)} style={{ marginTop: '5px' }}>
            Score de Risco WorkCapital: {creditScore.riskScore}
          </Tag>
          
          <SectionTitle style={{ marginTop: '20px' }}>Balanço</SectionTitle>
          <BalanceText>
            R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </BalanceText>

          {/* Botões de Ação */}
          <div style={{ marginTop: '20px' }}>
            <Button type="primary" style={{ width: '100%', marginBottom: '10px' }}>
              Fazer Proposta
            </Button>
            <Button danger style={{ width: '100%' }} ghost>
              Entrar em Contato
            </Button>
          </div>
        </div>
      </ProposalGrid>
    </Card>
  );
};

export default InvestmentCard;