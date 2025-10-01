import styled from 'styled-components';
import { Table } from 'antd';

export const ProjectsContainer = styled.div`
  background-color: #f0f2f5; // Cor de fundo da página
  min-height: 100vh;
`;

export const Header = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const Wrapper = styled.div`
  padding: 20px 5%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 30px;
`;

// Estilo para o contêiner principal do conteúdo (o "card" grande)
export const ContentCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
`;

// Sobrescrevendo estilos da tabela do Ant Design
export const StyledTable = styled(Table)<TableProps<object>>`
  .ant-table-thead > tr > th {
    background-color: #f7f7f7; // Fundo do cabeçalho
    color: #666;
    font-weight: 600;
    border-bottom: 1px solid #eee;
  }
  
  .ant-table-row:hover {
    background-color: #fafafa !important;
  }
  
  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #eee;
    padding: 12px 16px;
  }
`;