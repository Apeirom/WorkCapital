"use client";

import React, { useState, useEffect } from 'react';
import { Typography, Button, Modal, Form, Input, Select, Rate, InputNumber, Switch } from 'antd';
import { FreelancerProfile, mockProfiles, mockCategories } from '@/interfaces/FreelancerProfile'; 
import * as S from './styles';

const { Title, Text } = Typography;
const { Option } = Select;

interface ProfileEditModalProps {
    open: boolean;
    onClose: () => void;
    // Em uma app real, passaria uma função para salvar
    onSave: (profileData: FreelancerProfile) => void; 
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ open, onClose, onSave }) => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProfileId, setSelectedProfileId] = useState<string | undefined>(mockProfiles[0]?.id);
    const [currentProfile, setCurrentProfile] = useState<FreelancerProfile | undefined>(mockProfiles[0]);

    // 1. Efeito para carregar o perfil selecionado no formulário
    useEffect(() => {
        if (selectedProfileId) {
            const profile = mockProfiles.find(p => p.id === selectedProfileId);
            setCurrentProfile(profile);
            if (profile) {
                form.setFieldsValue(profile);
            }
        }
    }, [selectedProfileId, form, open]); // Atualiza o form quando o modal abre ou o ID muda

    const handleProfileSelect = (id: string) => {
        setSelectedProfileId(id);
    };

    const handleSave = async (values: FreelancerProfile) => {
        if (!currentProfile) return;
        
        setIsLoading(true);
        // Simulação de delay da API
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        const updatedProfile = { ...currentProfile, ...values };
        console.log("Perfil atualizado e salvo:", updatedProfile);
        
        onSave(updatedProfile); 
        setIsLoading(false);
        onClose();
    };

    return (
        <Modal
            title={<Title level={3} style={{ margin: 0 }}>Editar Perfil Profissional</Title>}
            open={open}
            onCancel={onClose}
            footer={null} 
            width={850}
            destroyOnHidden={true} // Força a remontagem para garantir que o useEffect de seleção rode
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSave}
            >
                {/* Seção de Seleção de Perfil */}
                <S.SelectProfileSection>
                    <Form.Item label="Selecione o Perfil para Edição" name="profileSelector" initialValue={selectedProfileId}>
                        <Select onChange={handleProfileSelect} style={{ width: '100%' }}>
                            {mockProfiles.map(profile => (
                                <Option key={profile.id} value={profile.id}>
                                    {profile.title} ({profile.id})
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </S.SelectProfileSection>

                {currentProfile && (
                    <>
                        <S.FormGrid>
                            {/* Nome e Título (Card do Projeto) */}
                            <Form.Item name="name" label="Nome/Marca Exibido" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            
                            <Form.Item name="title" label="Título Profissional" rules={[{ required: true }]}>
                                <Input placeholder="Ex: Desenvolvedor Web Full Stack" />
                            </Form.Item>

                            {/* Categoria e Taxa/Hora */}
                            <Form.Item name="category" label="Categoria Principal" rules={[{ required: true }]}>
                                <Select placeholder="Selecione a categoria">
                                    {mockCategories.map(cat => <Option key={cat} value={cat}>{cat}</Option>)}
                                </Select>
                            </Form.Item>
                            
                            <Form.Item name="hourlyRate" label="Taxa Horária Sugerida (R$)" rules={[{ required: true }]}>
                                <InputNumber 
                                    min={10} 
                                    formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>
                        </S.FormGrid>
                        
                        <Form.Item name="serviceDescription" label="Descrição Detalhada do Serviço/Bio" rules={[{ required: true }]}>
                            <Input.TextArea rows={4} placeholder="Descreva suas experiências, habilidades e o valor que você entrega." />
                        </Form.Item>

                        <S.MetadataGrid>
                            {/* Metadados para visualização (não editáveis, apenas exibição) */}
                            <div>
                                <Text strong>Avaliação Média:</Text>
                                <Rate disabled allowHalf value={currentProfile.rating} style={{ display: 'block', fontSize: 16 }} />
                                <Text type="secondary">({currentProfile.rating.toFixed(1)} estrelas)</Text>
                            </div>
                            <div>
                                <Text strong>Anos de Experiência:</Text>
                                <Title level={4} style={{ margin: 0 }}>{currentProfile.experienceYears} anos</Title>
                            </div>
                            
                            {/* Switch de Publicação */}
                            <Form.Item name="isPublic" valuePropName="checked" label="Publicar Perfil">
                                <Switch checkedChildren="Público" unCheckedChildren="Rascunho" />
                            </Form.Item>
                        </S.MetadataGrid>
                    </>
                )}

                <S.ModalFooter>
                    <Button key="back" onClick={onClose} disabled={isLoading}>
                        Cancelar
                    </Button>
                    <Button 
                        key="submit" 
                        type="primary" 
                        htmlType="submit"
                        loading={isLoading}
                    >
                        {isLoading ? 'Salvando...' : 'Salvar Alterações'}
                    </Button>
                </S.ModalFooter>
            </Form>
        </Modal>
    );
};

export default ProfileEditModal;
