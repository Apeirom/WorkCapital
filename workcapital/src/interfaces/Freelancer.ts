
// --- Tipos de Projetos (Mantidos) ---
export interface Project {
  key: string;
  details: string; 
  category: string;
  title: string;
  startDate: string; // Data de Início
  dueDate: string; // Data de Previsão
  status: 'active' | 'completed' | 'pending'; // Status
  responsible: string;
  landingPage: string; // URL do Link
}


// --- Tipos de Estatísticas (NOVOS) ---
export interface StatMetric {
    id: number;
    title: string;
    icon: React.ReactNode; // Ícone da antd
    value: string | number;
    change: number; // Mudança percentual
    changeType: 'increase' | 'decrease';
}

export interface RecebimentDetail {
    date: string;
    description: string;
    value: number;
}

export interface RecebimentoPreview {
    remainingBalance: number;
    details: RecebimentDetail[];
    lastPaymentDays: number;
}
