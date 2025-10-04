"use client";

import React from 'react';
import { Card, Typography, Progress, Tag, Button } from 'antd';
import { DollarCircleOutlined, UserOutlined } from '@ant-design/icons';
import { CreditProposal } from '@/interfaces/CreditTaker'; 
import * as S from './styles';

const { Text } = Typography;

interface CreditProposalCardProps {
    proposal: CreditProposal;
}

const getStatusColor = (status: CreditProposal['status']) => {
    switch (status) {
        case 'Completo': return 'success';
        case 'Financiando': return 'processing';
        case 'Em Avaliação': return 'default';
        case 'Rejeitado': return 'error';
        default: return 'default';
    }
};

const CreditProposalCard: React.FC<CreditProposalCardProps> = ({ proposal }) => {
    const fundedPercentage = Math.round((proposal.fundedAmount / proposal.fundingGoal) * 100);

    return (
        <Card title={`Solicitação ${proposal.id}: ${proposal.title}`} style={{ marginBottom: '15px' }}>
            <S.ProposalGrid>
                {/* Status e Valor Requisitado */}
                <S.ProposalDetail>
                    <S.StatusTitle level={5}>Status Atual</S.StatusTitle>
                    <Tag color={getStatusColor(proposal.status)} style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {proposal.status}
                    </Tag>
                </S.ProposalDetail>

                <S.ProposalDetail>
                    <S.StatusTitle level={5}><DollarCircleOutlined /> Valor Requisitado</S.StatusTitle>
                    <Text strong>
                        R$ {proposal.requestedAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </Text>
                </S.ProposalDetail>
                
                {/* Contribuições e Investidores */}
                <S.ProposalDetail>
                    <S.StatusTitle level={5}><UserOutlined /> Contribuições</S.StatusTitle>
                    <Text>
                        {proposal.investorCount} Investidor(es)
                    </Text>
                </S.ProposalDetail>

                {/* Progresso do Financiamento */}
                <S.ProgressSection>
                    <S.StatusTitle level={5}>Progresso do Financiamento</S.StatusTitle>
                    <Progress 
                        percent={fundedPercentage} 
                        status={proposal.status === 'Completo' ? 'success' : 'active'}
                        format={() => (
                            <Text strong style={{ color: S.ACTIVE_COLOR }}>
                                {fundedPercentage}%
                            </Text>
                        )}
                    />
                    <S.FundedText>
                        R$ {proposal.fundedAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} financiado
                    </S.FundedText>
                </S.ProgressSection>
                
                {/* Ações */}
                <S.ActionSection>
                    <Button type="default" size="large" style={{ width: '100%' }}>
                        Ver Detalhes
                    </Button>
                </S.ActionSection>
            </S.ProposalGrid>
        </Card>
    );
};

export default CreditProposalCard;
