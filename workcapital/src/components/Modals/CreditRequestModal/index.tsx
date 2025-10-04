"use client";

import React, { useState } from 'react';
import { Typography, Button, Modal, Form, Input, InputNumber, Select } from 'antd';
import { CreditRequest } from '@/interfaces/CreditTaker';
import * as S from './styles';

const { Title } = Typography;
const { Option } = Select;

// Inicialização dos valores do formulário
const initialCreditRequest: CreditRequest = {
    title: '',
    motivation: '',
    contact: '',
    email: '',
    requestedAmount: 0,
    paymentFrequency: 'Mensal',
    paymentDeadlineMonths: 12,
    gracePeriodMonths: 0,
};

interface CreditRequestModalProps {
    open: boolean;
    onClose: () => void;
    // Função que será chamada na página principal após o envio bem-sucedido
    onSuccess: () => void; 
}

const CreditRequestModal: React.FC<CreditRequestModalProps> = ({ open, onClose, onSuccess }) => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (values: CreditRequest) => {
        setIsLoading(true);
        console.log('Solicitação de Crédito Enviada:', values);
        
        // Simulação de envio para a API
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        setIsLoading(false);
        
        // Se for sucesso, fecha o modal e notifica a página principal
        onClose();
        form.resetFields();
        onSuccess(); 
        
        Modal.success({
            title: 'Solicitação Enviada!',
            content: 'Sua solicitação de crédito foi enviada para avaliação e será visível aos investidores em breve.',
        });
    };
    
    // Função para lidar com o cancelamento e limpar o formulário
    const handleCancel = () => {
        onClose();
        form.resetFields();
    };

    return (
        <Modal
            title={<Title level={3} style={{ margin: 0 }}>Nova Solicitação de Crédito</Title>}
            open={open}
            onCancel={handleCancel}
            footer={null} // Remove o footer padrão
            width={800}
            destroyOnHidden={true} // Garante que o estado interno do Form seja resetado
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFormSubmit}
                initialValues={initialCreditRequest}
            >
                <Title level={4} style={{ marginTop: '20px' }}>Detalhes do Pedido</Title>
                <Form.Item
                    name="title"
                    label="Título da Solicitação"
                    rules={[{ required: true, message: 'Por favor, insira um título!' }]}
                >
                    <Input placeholder="Ex: Investimento em Equipamento de Fotografia" />
                </Form.Item>

                <Form.Item
                    name="motivation"
                    label="Motivação Detalhada do Pedido (Visto pelo Investidor)"
                    rules={[{ required: true, message: 'A motivação é obrigatória!' }]}
                >
                    <Input.TextArea rows={4} placeholder="Descreva o que será feito com o valor e o seu impacto no seu negócio/serviço." />
                </Form.Item>

                <S.FormGrid>
                    {/* Detalhes Financeiros */}
                    <Form.Item
                        name="requestedAmount"
                        label="Valor Total Requisitado (R$)"
                        rules={[{ required: true, message: 'Insira o valor requisitado!' }]}
                    >
                        <InputNumber 
                            min={100} 
                            style={{ width: '100%' }} 
                            formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        />
                    </Form.Item>

                    <Form.Item
                        name="paymentDeadlineMonths"
                        label="Prazo Total de Pagamento (meses)"
                        rules={[{ required: true, message: 'Insira o prazo!' }]}
                    >
                        <InputNumber min={3} max={60} style={{ width: '100%' }} />
                    </Form.Item>
                    
                    {/* Condições */}
                    <Form.Item
                        name="paymentFrequency"
                        label="Frequência de Pagamento"
                        rules={[{ required: true, message: 'Selecione a frequência!' }]}
                    >
                        <Select placeholder="Selecione a frequência">
                            <Option value="Mensal">Mensal</Option>
                            <Option value="Bimestral">Bimestral</Option>
                            <Option value="Trimestral">Trimestral</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="gracePeriodMonths"
                        label="Tempo de Carência (meses)"
                        rules={[{ required: true, message: 'Insira a carência!' }]}
                    >
                        <InputNumber min={0} max={12} style={{ width: '100%' }} />
                    </Form.Item>

                </S.FormGrid>
                
                <Title level={4} style={{ marginTop: '20px' }}>Seus Contatos</Title>
                <S.FormGrid>
                    {/* Contato e Email */}
                    <Form.Item
                        name="contact"
                        label="Whatsapp / Telefone"
                        rules={[{ required: true, message: 'Insira seu contato!' }]}
                    >
                        <Input placeholder="(00) 00000-0000" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email para Contato"
                        rules={[{ required: true, type: 'email', message: 'Insira um email válido!' }]}
                    >
                        <Input placeholder="seu.email@exemplo.com" />
                    </Form.Item>
                </S.FormGrid>

                <S.ModalFooter>
                    <Button key="back" onClick={handleCancel} disabled={isLoading}>
                        Cancelar
                    </Button>
                    <Button 
                        key="submit" 
                        type="primary" 
                        htmlType="submit"
                        loading={isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Enviar Solicitação'}
                    </Button>
                </S.ModalFooter>
            </Form>
        </Modal>
    );
};

export default CreditRequestModal;
