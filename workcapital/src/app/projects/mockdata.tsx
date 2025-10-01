import { Tag } from "antd";

export interface Project {
  key: string;
  details: string; // Coluna de "Detalhes" (pode ser o ID ou um link)
  category: string;
  title: string;
  startDate: string; // Data de Início
  dueDate: string; // Data de Previsão
  status: 'active' | 'completed' | 'pending'; // Status
  responsible: string;
  landingPage: string; // URL do Link
}

// Helper para renderizar o Status na tabela (como a bolinha verde/círculo na imagem)
export const getStatusTag = (status: Project['status']) => {
  let color;
  let text;
  switch (status) {
    case 'active':
      color = 'green';
      text = 'C'; // Usado 'C' de Concluído/Em Curso na imagem, mas vamos usar um Tag mais realista
      return <Tag color={color} style={{ borderRadius: '50%', width: '20px', height: '20px', padding: 0, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />;
    case 'completed':
      color = 'blue';
      text = 'C';
      return <Tag color={color}>{text}</Tag>;
    case 'pending':
    default:
      color = 'gold';
      text = 'P';
      return <Tag color={color}>{text}</Tag>;
  }
};

export const mockProjects: Project[] = [
  {
    key: '1',
    details: 'Visualizar',
    category: 'Desenvolvimento Web',
    title: 'Construção de site',
    startDate: '30/09/25',
    dueDate: '24/11/25',
    status: 'active',
    responsible: 'Carlos V.',
    landingPage: 'url.link',
  },
  {
    key: '2',
    details: 'Visualizar',
    category: 'Desenvolvimento Web',
    title: 'Landing Page de Produto',
    startDate: '01/10/25',
    dueDate: '15/11/25',
    status: 'active',
    responsible: 'Carlos V.',
    landingPage: 'url.link',
  },
  {
    key: '3',
    details: 'Visualizar',
    category: 'UI/UX Design',
    title: 'Wireframes e Prototipagem',
    startDate: '15/09/25',
    dueDate: '30/10/25',
    status: 'completed',
    responsible: 'Ana L.',
    landingPage: 'url.link',
  },
  {
    key: '4',
    details: 'Visualizar',
    category: 'Marketing Digital',
    title: 'Campanha de E-mail Marketing',
    startDate: '05/10/25',
    dueDate: '20/12/25',
    status: 'pending',
    responsible: 'João M.',
    landingPage: 'url.link',
  },
  {
    key: '5',
    details: 'Visualizar',
    category: 'Desenvolvimento Web',
    title: 'Otimização de Performance',
    startDate: '10/10/25',
    dueDate: '10/11/25',
    status: 'active',
    responsible: 'Carlos V.',
    landingPage: 'url.link',
  },
];