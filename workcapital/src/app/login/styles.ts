import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #001f54;
`;

export const LeftSide = styled.div`
  flex: 1;
  background-color: #001f54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 360px;
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    flex: 1; /* os dois botões ficam com o mesmo tamanho */
  }
`;
