import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 120px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #1890ff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const IconWrapper = styled.div`
  font-size: 32px;
  color: #722ed1;
`;

export const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #333;
  margin: 0;
`;
