"use client";

import React from 'react';
import { Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, FileTextOutlined, ToolOutlined, CheckCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { StatMetric } from '@/interfaces/Freelancer'; 
import * as S from './styles';

const { Title, Text } = Typography;

interface StatCardProps {
    metric: StatMetric;
}

// Mapeamento dos nomes de ícones (strings) para os componentes React
const IconMap: { [key: string]: React.FC<any> } = {
    FileTextOutlined,
    ToolOutlined,
    CheckCircleOutlined,
    DollarCircleOutlined,
};

const StatCard: React.FC<StatCardProps> = ({ metric }) => {
    // Busca o componente de ícone através do mapa
    const AntdIcon = IconMap[metric.icon as string];
    
    // Formatação do valor (ajustada para números e strings)
    const formattedValue = typeof metric.value === 'number' 
        ? `R$ ${metric.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
        : metric.value;
        
    // Lógica e cor da mudança percentual
    const isIncrease = metric.changeType === 'increase';
    const changeColor = isIncrease ? '#52c41a' : '#f5222d';
    const ChangeIcon = isIncrease ? ArrowUpOutlined : ArrowDownOutlined;

    return (
        <S.StatCardWrapper>
            <S.IconWrapper style={{ background: S.ACTIVE_COLOR }}>
                {/* Renderização CORRIGIDA */}
                {AntdIcon && <AntdIcon style={{ fontSize: '20px', color: '#fff' }} />} 
            </S.IconWrapper>
            
            <S.Content>
                <Title level={5} style={{ margin: 0 }}>{metric.title}</Title>
                <S.ValueText>
                    {formattedValue}
                </S.ValueText>
                
                <S.ChangeIndicator>
                    <ChangeIcon style={{ color: changeColor, marginRight: '4px' }} />
                    <Text style={{ color: changeColor, fontWeight: 500 }}>
                        {metric.change}%
                    </Text>
                    <Text type="secondary" style={{ marginLeft: '4px' }}>
                        em relação ao último mês
                    </Text>
                </S.ChangeIndicator>
            </S.Content>
        </S.StatCardWrapper>
    );
};

export default StatCard;
