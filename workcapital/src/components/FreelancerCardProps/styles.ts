import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem auto;
  font-family: "Poppins", sans-serif; /* aplica em todos os filhos */

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

export const ImageWrapper = styled.div`
  width: 220px;
  height: 180px;
  flex-shrink: 0;

  .ant-carousel {
    height: 100%;
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-right: 1px solid #eee;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #333;
  font-family: "Poppins", sans-serif;
`;

export const City = styled.span`
  font-size: 0.9rem;
  color: #1890ff;
  font-family: "Poppins", sans-serif;
`;

export const ProfileType = styled.span`
  font-size: 0.9rem;
  color: #fa8c16;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0.5rem 0 0 0;
  line-height: 1.4rem;
  font-family: "Poppins", sans-serif;
`;
