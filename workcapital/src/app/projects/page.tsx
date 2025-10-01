"use client";

import React, { useState, useMemo } from "react";
import { Input, Typography, Button, Space } from "antd";
import { SearchOutlined, LinkOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableProps } from 'antd';

import Navbar from "@/components/NavBar"; // Presume-se que o Navbar seja o componente do cabeçalho

import { ProjectsContainer, Header, SearchWrapper, ContentCard, StyledTable, Wrapper  } from "./styles";
import { mockProjects, Project, getStatusTag } from "./mockdata";

const { Link } = Typography;

const ProjectsManager: React.FC = () => {
  // 1. Estado para armazenar o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 2. Colunas da Tabela
  const columns: TableProps<Project>['columns'] = [
    {
      title: 'Detalhes',
      dataIndex: 'details',
      key: 'details',
      render: (text: string) => (
        <Button 
          type="primary" 
          style={{ backgroundColor: '#5c00a3', borderColor: '#5c00a3' }} // Cor roxa similar à imagem
        >
          {text}
        </Button>
      ),
      width: 120,
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Início',
      dataIndex: 'startDate',
      key: 'startDate',
      width: 100,
    },
    {
      title: 'Previsão',
      dataIndex: 'dueDate',
      key: 'dueDate',
      width: 100,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Project['status']) => getStatusTag(status), // Usa o helper do mockdata
      width: 80,
    },
    {
      title: 'Responsável',
      dataIndex: 'responsible',
      key: 'responsible',
    },
    {
      title: 'Landing Page',
      dataIndex: 'landingPage',
      key: 'landingPage',
      render: (text: string) => (
        <Link href="#" target="_blank">
          {text} <LinkOutlined style={{ marginLeft: 4 }} />
        </Link>
      ),
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} onClick={() => console.log('Deletar', record.key)} />
          <EditOutlined style={{ color: 'orange', cursor: 'pointer' }} onClick={() => console.log('Editar', record.key)} />
        </Space>
      ),
      width: 100,
    },
  ];

  // 3. Lógica de filtragem (igual à sua referência, mas para Projects)
  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) {
      return mockProjects;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    // Filtra pelo 'title' (Título do projeto)
    return mockProjects.filter((project) =>
      project.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  // 4. Função para lidar com a mudança no input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <ProjectsContainer>
      {/* Navbar */}
      <Navbar /> {/* Adapte o componente Navbar para ter a prop activeKey se necessário */}
      <Wrapper>

        <Header>Gerenciar Projetos</Header>

        <ContentCard>
          {/* Barra de pesquisa */}
          <SearchWrapper>
            <Input
              placeholder="Pesquisar"
              prefix={<SearchOutlined />}
              style={{ width: '400px' }} // Define uma largura para o campo de pesquisa
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchWrapper>

          {/* Tabela de Projetos */}
          <StyledTable
            columns={columns}
            dataSource={filteredProjects} // Usa a lista filtrada
            pagination={{ pageSize: 10 }} // Define 10 itens por página
            scroll={{ x: 'max-content' }} // Garante que a tabela é responsiva horizontalmente
          />
        </ContentCard>
      </Wrapper>
      
    </ProjectsContainer>
  );
};

export default ProjectsManager;