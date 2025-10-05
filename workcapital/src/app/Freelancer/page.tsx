"use client";

import React, { useState } from 'react';
import { Typography, Button, Table, Tabs, Modal } from 'antd'; // Adicionado Modal para notificações
import { EditOutlined, ReloadOutlined } from '@ant-design/icons';
import Navbar from "@/components/NavBar"; 
import StatCard from '@/components/StatCard';
// Importação do novo Modal (assumindo a estrutura de pastas)
import ProfileEditModal from '@/components/Modals/ProfileEditModal';
import { mockStats, mockProjects, mockRecebimento, getStatusTag } from './mockdata';
// Importação dos tipos de perfil para o handleSave
import { FreelancerProfile } from '@/interfaces/FreelancerProfile'; 

import * as S from './styles';

const { Title, Text } = Typography;

const FreelancerPage: React.FC = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('ativos');
    
    // Função para lidar com o salvamento do perfil que vem do modal
    const handleProfileSave = (updatedProfile: FreelancerProfile) => {
        console.log("Dados do perfil recebidos e prontos para salvar na API:", updatedProfile);
        
        // Em uma aplicação real, aqui você faria a chamada PATCH/PUT para a API
        
        Modal.success({
            title: 'Perfil Atualizado',
            content: `O perfil de serviço "${updatedProfile.title}" foi salvo com sucesso.`,
        });
        
        // Fechamento do modal é controlado internamente pelo modal, mas chamamos para segurança.
        setIsEditModalVisible(false);
    };

    // Colunas da Tabela de Projetos (Mantidas)
    const projectColumns = [
        {
            title: 'Detalhes',
            dataIndex: 'details',
            key: 'details',
            render: (text: string) => <a href="#">{text}</a>, // Simula um link
        },
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Categoria',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Início',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Previsão',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title: 'Responsável',
            dataIndex: 'responsible',
            key: 'responsible',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: getStatusTag, // Usa o helper
        },
        {
            title: 'Link',
            dataIndex: 'landingPage',
            key: 'landingPage',
            render: (text: string) => <a href={text} target="_blank" rel="noopener noreferrer">Acessar</a>,
        },
    ];

    // Lógica para filtrar projetos ativos e concluídos (simulação de abas)
    const filteredProjects = mockProjects.filter(p => {
        if (activeTab === 'ativos') return p.status === 'active' || p.status === 'pending';
        if (activeTab === 'concluidos') return p.status === 'completed';
        return true;
    });
    
    // Simulação do Gráfico de Faturamento (Mantida)
    const renderFaturamentoChart = () => (
        <S.FaturamentoCard>
            <Title level={4}>Total faturado</Title>
            {/* Placeholder para o gráfico */}
            <S.ChartPlaceholder>
                [Gráfico de Linhas: R$ 5.000 a R$ 25.000 - Jan a Dez]
            </S.ChartPlaceholder>
            <Text type="secondary">Dados mockados, utilize D3 ou Recharts para renderizar.</Text>
        </S.FaturamentoCard>
    );
    
    // Simulação da Previsão de Recebimento
    const renderPrevisaoRecebimento = () => (
        <S.RecebimentoCard>
            <Title level={4}><ReloadOutlined /> Previsão de Recebimento</Title>
            <S.CircleProgress>
                {/* Placeholder para o círculo de progresso */}
                <S.CirclePlaceholder>75%</S.CirclePlaceholder>
                
                <S.BalanceInfo>
                    <Text type="secondary" style={{ display: 'block' }}>Saldo restante:</Text>
                    <Title level={3} style={{ margin: 0 }}>R$ {mockRecebimento.remainingBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Title>
                    {/* Exibe o texto '10 dias' abaixo, como na imagem */}
                    <S.LastPayment style={{ marginTop: '10px' }}>
                        Último pagamento há: <S.DaysValue>{mockRecebimento.lastPaymentDays} dias</S.DaysValue>
                    </S.LastPayment>
                </S.BalanceInfo>
            </S.CircleProgress>
            
            <S.PaymentDetails>
                {mockRecebimento.details.map((item, index) => (
                    <S.PaymentRow key={index}>
                        <Text style={{ fontSize: '0.85rem' }}>{item.date} {item.description}</Text>
                        <Text style={{ color: '#52c41a', fontWeight: 600 }}>+ R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
                    </S.PaymentRow>
                ))}
            </S.PaymentDetails>
            
            {/* O bloco LastPayment com DaysValue foi movido para dentro de BalanceInfo acima,
                mas mantemos a estrutura abaixo para consistência se houver outros estilos aplicados
            */}
            
            <Button type="primary" size="large" style={{ width: '100%', marginTop: '15px' }}>
                Investir
            </Button>
        </S.RecebimentoCard>
    );

    return (
        <S.FreelancerContainer>
            <Navbar /> 

            <S.MainContent>
                <S.HeaderWrapper>
                    <Title level={2}>Seu Perfil Profissional</Title>
                    <Button 
                        type="primary" 
                        icon={<EditOutlined />} 
                        size="large"
                        onClick={() => setIsEditModalVisible(true)} // Abre o modal
                    >
                        Editar Perfil
                    </Button>
                </S.HeaderWrapper>
                
                {/* 1. Dashboard de Estatísticas */}
                <S.StatsGrid>
                    {mockStats.map(metric => (
                        <StatCard key={metric.id} metric={metric} />
                    ))}
                </S.StatsGrid>

                {/* 2. Seção de Gráficos e Previsão de Recebimento */}
                <S.ChartAndRecebimentoGrid>
                    {renderFaturamentoChart()}
                    {renderPrevisaoRecebimento()}
                </S.ChartAndRecebimentoGrid>

                {/* 3. Tabela de Projetos */}
                <Title level={3} style={{ marginTop: '40px', marginBottom: '20px' }}>
                    Meus Projetos
                </Title>
                
                <Tabs 
                    defaultActiveKey="ativos" 
                    onChange={setActiveTab} 
                    items={[
                        {
                            key: 'ativos',
                            label: 'Em Andamento',
                            children: (
                                <Table 
                                    columns={projectColumns} 
                                    dataSource={filteredProjects} 
                                    pagination={false}
                                    rowKey="key"
                                />
                            )
                        },
                        {
                            key: 'concluidos',
                            label: 'Concluídos',
                            children: (
                                <Table 
                                    columns={projectColumns} 
                                    dataSource={filteredProjects} 
                                    pagination={false}
                                    rowKey="key"
                                />
                            )
                        },
                    ]}
                />
            </S.MainContent>
            
            {/* Componente Modal de Edição de Perfil */}
            <ProfileEditModal 
                open={isEditModalVisible} 
                onClose={() => setIsEditModalVisible(false)} 
                onSave={handleProfileSave}
            />

        </S.FreelancerContainer>
    );
};

export default FreelancerPage;
