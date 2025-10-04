"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Tabs, Spin, Alert, Button, Modal } from 'antd'; // Adicionado Modal (Mantido)
import { FilterOutlined } from '@ant-design/icons'; // Ícone de filtro (Mantido)
import { ProposalStatus, InvestmentProposal } from '@/interfaces/Investment'; 
import Navbar from "@/components/NavBar"; 
import InvestmentCard from '@/components/InvestmentCard'; 
import { allMockProposals, tabKeyToStatusMap } from './mockdata'; 

import * as S from './styles';

// Simula a busca de dados em uma API (Mantida)
const fetchProposalsFromAPI = (): Promise<InvestmentProposal[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(allMockProposals);
        }, 500);
    });
};

const InvestPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('demandas');
    const [proposals, setProposals] = useState<InvestmentProposal[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // Estado para controlar a visibilidade do modal de filtro (Mantido)
    const [isFilterModalVisible, setIsFilterModalVisible] = useState<boolean>(false);

    // Lógica de Carregamento de Dados (Mantida)
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchProposalsFromAPI();
                setProposals(data);
            } catch (error) {
                console.error("Erro ao carregar propostas:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []); 

    // Lógica de Filtragem (Mantida)
    const filteredProposals = useMemo(() => {
        if (!proposals.length) return [];
        
        const requiredStatus = tabKeyToStatusMap[activeTab] as ProposalStatus | undefined;

        if (!requiredStatus) {
            return []; 
        }

        return proposals.filter(proposal => proposal.status === requiredStatus);
    }, [activeTab, proposals]);

    
    // 1. Definição do conteúdo das abas (Mapeamento de TabKey para Status)
    const renderTabContent = (key: string) => {
        const currentStatus = tabKeyToStatusMap[key];
        const itemsToDisplay = proposals.filter(p => p.status === currentStatus);
        
        const emptyMessageMap: Record<string, string> = {
            'demandas': 'Não há novas demandas disponíveis no momento.',
            'negociacao': 'Nenhuma negociação em andamento.',
            'emandamento': 'Nenhum investimento em execução.',
            'arquivados': 'Não há propostas arquivadas.',
        };
        
        if (itemsToDisplay.length === 0) {
             return <Alert message={emptyMessageMap[key]} type="info" showIcon />;
        }

        return (
            <S.CardsScrollContainer>
                {itemsToDisplay.map((proposal) => (
                    <InvestmentCard key={proposal.id} proposal={proposal} />
                ))}
            </S.CardsScrollContainer>
        );
    };

    // 2. Array de itens para a prop 'items' do Tabs
    const tabItems = [
        {
            key: 'demandas',
            label: 'Demandas',
            children: renderTabContent('demandas'),
        },
        {
            key: 'negociacao',
            label: 'Negociação',
            children: renderTabContent('negociacao'),
        },
        {
            key: 'emandamento',
            label: 'Em andamento',
            children: renderTabContent('emandamento'),
        },
        {
            key: 'arquivados',
            label: 'Arquivados',
            children: renderTabContent('arquivados'),
        },
    ];


    // Exibição de carregamento
    if (loading) {
        return (
            <Spin fullscreen size="large" tip="Carregando propostas de investimento..." />
        );
    }
    
    return (
        <S.InvestContainer>
            <Navbar /> 

            <S.MainContent>
                <S.FilterContainer>
                    <S.TabsWrapper>
                        <S.FilterButton
                            type="primary" 
                            icon={<FilterOutlined />} 
                            onClick={() => setIsFilterModalVisible(true)}
                        >
                            Configurar Filtros
                        </S.FilterButton>
                        <Tabs 
                            activeKey={activeTab} 
                            onChange={setActiveTab} 
                            centered 
                            size="large"
                            type="card"
                            items={tabItems}
                        />
                    </S.TabsWrapper>
                    
                    {/* Botão de Filtro - Usando o componente estilizado S.FilterButton */}
                </S.FilterContainer>
            </S.MainContent>
            
            {/* Modal de Configuração de Filtros (Esqueleto) */}
            <Modal
                title="Configuração de Filtros de Propostas"
                open={isFilterModalVisible}
                onOk={() => setIsFilterModalVisible(false)}
                onCancel={() => setIsFilterModalVisible(false)}
                footer={[
                    <Button key="back" onClick={() => setIsFilterModalVisible(false)}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => setIsFilterModalVisible(false)}>
                        Aplicar Filtros
                    </Button>,
                ]}
            >
                <p>Aqui entrarão os campos de filtro, como Score de Risco Mínimo, Valor Máximo, etc.</p>
            </Modal>
        </S.InvestContainer>
    );
};

export default InvestPage;
