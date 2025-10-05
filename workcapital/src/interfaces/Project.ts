// interfaces/Project.ts

import { BaseModel } from './Base'; // Assumindo que BaseModel está aqui

/** Interface para o objeto Project (Projeto).
 * Corresponde à resposta do GET/POST para /api/projects/
 */
export interface Project extends BaseModel {
    // Relacionamentos (Foreign Keys) - são strings UUIDs no JSON
    freelancer: string | null; // ID do Freelancer que trabalhou (pode ser nulo)
    contractor: string;      // ID do Contratante que publicou (obrigatório)

    // Parâmetros do Modelo
    title: string;
    category: string;
    status: 'Open' | 'In Progress' | 'Completed' | string; // Use um enum ou string
    responsible: string;
    url: string | null;

    // Datas (enviadas como strings no formato ISO)
    project_start: string; // DateField
    project_forecast: string; // DateField
}

/** Interface para o Payload de Criação de um Project (POST /api/projects/). */
export interface ProjectCreateData {
    // Estes campos são obrigatórios para a criação:
    contractor: string;
    title: string;
    category: string;
    status: string;
    responsible: string;
    project_start: string;
    project_forecast: string;
    
    // Estes campos são opcionais ou podem ser nulos:
    freelancer?: string | null;
    url?: string | null;
}