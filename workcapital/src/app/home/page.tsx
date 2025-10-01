"use client";

import React, { useState, useMemo } from "react";
import { Input, Button } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

import Navbar from "@/components/NavBar";
import CategoryCard from "@/components/CategoryCard";
import FreelancerCard from "@/components/FreelancerCardProps";

import { mockCategories, mockFreelancers } from "./mockdata";

import {
  HomeContainer,
  SearchWrapper,
  CategoriesWrapper,
  FreelancersList
} from "./styles";

const Home: React.FC = () => {
  // 1. Estado para armazenar o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 2. Lógica de filtragem
  const filteredFreelancers = useMemo(() => {
    if (!searchTerm.trim()) {
      return mockFreelancers;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    return mockFreelancers.filter((freelancer) =>
      freelancer.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  // 3. Função para lidar com a mudança no input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <HomeContainer>
      {/* Navbar */}
      <Navbar />

      {/* Barra de pesquisa */}
      <SearchWrapper>
        <Input
          placeholder="Profissões, serviços e categorias"
          prefix={<SearchOutlined />}
          style={{ flex: 1 }}
          // 4. Conecta o valor do Input ao estado
          value={searchTerm}
          // 5. Adiciona o manipulador de eventos
          onChange={handleSearchChange}
        />
        <Button icon={<FilterOutlined />} type="default">
          Filtrar
        </Button>
      </SearchWrapper>

      {/* Categorias */}
      {/* Mantenha a exibição das categorias como está */}
      <CategoriesWrapper>
        {mockCategories.map((cat, index) => (
          <CategoryCard key={index} name={cat.name} icon={<cat.icon />} />
        ))}
      </CategoriesWrapper>

      {/* Lista de Freelancers */}
      <FreelancersList>
        {/* 6. Mapeia a lista FILTRADA, e não a lista mockada diretamente */}
        {filteredFreelancers.map((freelancer, index) => (
          <FreelancerCard
            key={index}
            title={freelancer.title}
            profileType={freelancer.profileType}
            description={freelancer.description}
            city={freelancer.city}
            images={freelancer.images}
            onClick={() => alert(`Clicou no freelancer: ${freelancer.title}`)}
          />
        ))}
      </FreelancersList>
      {/* Opcional: Mostrar uma mensagem se não houver resultados */}
      {filteredFreelancers.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>
          Nenhum freelancer encontrado com o título &quot;{searchTerm}&quot;. 😔
        </p>
      )}
    </HomeContainer>
  );
};

export default Home;