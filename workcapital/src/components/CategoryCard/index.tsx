"use client";

import React from "react";
import { CardContainer, IconWrapper, CardTitle } from "./styles";

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <CardContainer>
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
};

export default CategoryCard;
