"use client";

import React from 'react';
import { Card, Typography, Tag } from 'antd';
import { ClockCircleOutlined, DollarCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Debt } from '@/interfaces/CreditTaker'; 
import { DebtGrid, DebtDetail } from './styles';

const { Title, Text } = Typography;

interface DebtCardProps {
    debt: Debt;
}

const getStatusColor = (status: Debt['status']) => {
    switch (status) {
        case 'Em Aberto': return 'processing';
        case 'Atrasado': return 'error';
        case 'Pago': return 'success';
        default: return 'default';
    }
};

const DebtCard: React.FC<DebtCardProps> = ({ debt }) => {
    return (
        <Card title={debt.description} style={{ marginBottom: '20px' }}>
            <DebtGrid>
                {/* Saldo Devedor */}
                <DebtDetail>
                    <Title level={5} style={{ margin: 0 }}>Saldo Devedor</Title>
                    <Text strong style={{ fontSize: '1.2rem', color: '#B30000' }}>
                        R$ {debt.remainingBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </Text>
                </DebtDetail>

                {/* Valor Original */}
                <DebtDetail>
                    <Title level={5} style={{ margin: 0 }}>Valor Original</Title>
                    <Text type="secondary">
                        R$ {debt.originalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </Text>
                </DebtDetail>

                {/* Parcela Mensal */}
                <DebtDetail>
                    <Title level={5} style={{ margin: 0 }}><DollarCircleOutlined /> Parcela Mensal</Title>
                    <Text>
                        R$ {debt.monthlyPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </Text>
                </DebtDetail>
                
                {/* Próximo Vencimento */}
                <DebtDetail>
                    <Title level={5} style={{ margin: 0 }}><CalendarOutlined /> Próximo Vencimento</Title>
                    <Text>{debt.dueDate}</Text>
                </DebtDetail>

                {/* Status */}
                <DebtDetail>
                    <Title level={5} style={{ margin: 0 }}><ClockCircleOutlined /> Status</Title>
                    <Tag color={getStatusColor(debt.status)} style={{ marginTop: '5px', fontWeight: 'bold' }}>
                        {debt.status}
                    </Tag>
                </DebtDetail>
            </DebtGrid>
        </Card>
    );
};

export default DebtCard;
