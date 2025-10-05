"use client";

import React, { useState, useMemo } from 'react';
import { Typography, Button, Alert, Tabs, Modal } from 'antd'; 
import { PlusCircleOutlined } from '@ant-design/icons';
import Navbar from "@/components/NavBar";
import DebtCard from '@/components/DebtCard';
import CreditProposalCard from '@/components/CreditProposalCard';
import CreditRequestModal from '@/components/Modals/CreditRequestModal';

// IMPORTAÇÃO DE TIPOS: Apenas as interfaces
import { CreditProposal } from '@/interfaces/CreditTaker'; 
// IMPORTAÇÃO DE DADOS: Importa os dados do novo arquivo de mocks
import { mockDebts, mockCreditProposals } from './creditMockData'

import * as S from './styles';

const { Title, Paragraph } = Typography;

// Mapeamento de Status para Abas (para filtragem)
const tabKeyToStatusMap: Record<string, CreditProposal['status'][]> = {
    ativas: ['Em Avaliação', 'Financiando'],
    concluidas: ['Completo'],
    rejeitadas: ['Rejeitado'],
};


const CreditPage: React.FC = () => {
    // Estado de controle do Modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<string>('ativas');

    // Funções de controle do Modal
    const handleSuccess = () => {
        // Esta função é chamada PELO MODAL após o envio bem-sucedido.
        Modal.success({
            title: 'Solicitação Enviada!',
            content: 'Sua solicitação de crédito foi enviada para avaliação e será visível aos investidores em breve.',
        });
        // Lógica de recarregar a lista de propostas viria aqui
    };


    // Lógica de Filtragem de Propostas pelo status da aba (usando mockCreditProposals)
    const filteredProposals = useMemo(() => {
        const requiredStatuses = tabKeyToStatusMap[activeTab];
        if (!requiredStatuses) return [];

        // O erro foi resolvido: mockCreditProposals é um array válido
        return mockCreditProposals.filter(proposal => requiredStatuses.includes(proposal.status));
    }, [activeTab]);

    const renderProposalContent = (proposals: CreditProposal[], emptyMessage: string) => {
        if (proposals.length === 0) {
            return <Alert message={emptyMessage} type="info" showIcon />;
        }
        return proposals.map(proposal => (
            <CreditProposalCard key={proposal.id} proposal={proposal} /> 
        ));
    };

    // Definição dos itens para o componente Tabs
    const proposalTabItems = [
        {
            key: 'ativas',
            label: 'Ativas e Financiando',
            children: (
                <S.ProposalsList>
                    {renderProposalContent(filteredProposals, 'Não há solicitações ativas no momento. Que tal iniciar uma nova?')}
                </S.ProposalsList>
            ),
        },
        {
            key: 'concluidas',
            label: 'Concluídas',
            children: (
                <S.ProposalsList>
                    {renderProposalContent(filteredProposals, 'Nenhuma solicitação de financiamento foi concluída ainda.')}
                </S.ProposalsList>
            ),
        },
        {
            key: 'rejeitadas',
            label: 'Rejeitadas',
            children: (
                <S.ProposalsList>
                    {renderProposalContent(filteredProposals, 'Nenhuma solicitação foi rejeitada.')}
                </S.ProposalsList>
            ),
        },
    ];

    return (
        <S.CreditContainer>
            <Navbar /> 

            <S.MainContent>
                {/* Seção de Débitos */}
                <Title level={2}>Meus Débitos</Title>
                <Paragraph>Acompanhe suas responsabilidades financeiras e solicite novos créditos.</Paragraph>
                
                <S.HeaderWrapper>
                    <Title level={4} style={{ margin: 0 }}>Débitos em Aberto ({mockDebts.length})</Title>
                </S.HeaderWrapper>
                <S.DebtsList style={{ marginBottom: '40px' }}>
                    {mockDebts.map(debt => (
                        <DebtCard key={debt.id} debt={debt} />
                    ))}
                    {mockDebts.length === 0 && (
                        <Alert message="Você não possui débitos em aberto." type="info" showIcon />
                    )}
                </S.DebtsList>

                {/* Seção de Solicitações de Crédito (Propostas) */}
                <S.RequestsHeaderWrapper>
                    <Title level={2} style={{ margin: 0 }}>Minhas Solicitações</Title>
                    <Button 
                        type="primary" 
                        icon={<PlusCircleOutlined />} 
                        size="large"
                        onClick={() => setIsModalVisible(true)} // Abre o Modal
                    >
                        Iniciar Solicitação de Crédito
                    </Button>
                </S.RequestsHeaderWrapper>

                <Tabs 
                    activeKey={activeTab} 
                    onChange={setActiveTab} 
                    items={proposalTabItems}
                    size="large"
                    style={{ marginTop: '20px' }}
                />

            </S.MainContent>

            {/* Componente Modal de Solicitação de Crédito REFATORADO */}
            <CreditRequestModal
                open={isModalVisible}
                onClose={() => setIsModalVisible(false)} // Função para fechar o Modal
                onSuccess={handleSuccess} // Função para executar após a submissão (notificação)
            />
        </S.CreditContainer>
    );
};

export default CreditPage;