import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 80%; 
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;

  input {
    border-radius: 6px;
  }

  button {
    border-radius: 6px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
`;

export const FreelancersList = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  overflow-y: auto;

  /* Scroll bonito */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
