/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Carousel } from "antd";
import {
  CardContainer,
  ImageWrapper,
  InfoWrapper,
  TitleRow,
  Title,
  City,
  ProfileType,
  Description
} from "./styles";

interface FreelancerCardProps {
  title: string;
  profileType: string;
  description: string;
  city?: string;
  images: string[];
  onClick?: () => void;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({
  title,
  profileType,
  description,
  city,
  images,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageWrapper>
        <Carousel autoplay dots={true}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`${title}-${index}`} />
            </div>
          ))}
        </Carousel>
      </ImageWrapper>

      <InfoWrapper>
        <Title>{title}</Title>
        <TitleRow>
          {city && <City>📍 {city}</City>}
          <ProfileType>{profileType}</ProfileType>
        </TitleRow>
        <Description>{description}</Description>
      </InfoWrapper>
    </CardContainer>
  );
};

export default FreelancerCard;
