import { Project, RecebimentoPreview, StatMetric } from "@/interfaces/Freelancer";
import { Tag } from "antd";

// --- Mock Data (Mantido) ---
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

// Mocks para as métricas superiores
export const mockStats: StatMetric[] = [
    {
        id: 1,
        title: "Pedidos de orçamento",
        icon: 'FileTextOutlined', // Será convertido para componente React
        value: 30,
        change: 20,
        changeType: 'increase',
    },
    {
        id: 2,
        title: "Serviços contratados",
        icon: 'ToolOutlined',
        value: 25,
        change: 10,
        changeType: 'decrease',
    },
    {
        id: 3,
        title: "Serviços concluídos",
        icon: 'CheckCircleOutlined',
        value: 3,
        change: 20,
        changeType: 'increase',
    },
    {
        id: 4,
        title: "Total faturado",
        icon: 'DollarCircleOutlined',
        value: 12000.00,
        change: 20,
        changeType: 'increase',
    },
];

// Mock para Previsão de Recebimento
export const mockRecebimento: RecebimentoPreview = {
    remainingBalance: 12000.00,
    lastPaymentDays: 10,
    details: [
        { date: '30 de outubro', description: 'Depósito', value: 3000.00 },
        { date: '30 de Novembro', description: 'Depósito', value: 3000.00 },
        { date: '30 de Dezembro', description: 'Depósito', value: 3000.00 },
    ]
};

// Helper para renderizar o Status na tabela (como a bolinha verde/círculo na imagem)
// CORREÇÃO: Removendo o comentário problemático antes do return
export const getStatusTag = (status: Project['status']) => {
  let color;
  let text;
  switch (status) {
    case 'active':
      color = 'green';
      text = 'C'; 
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