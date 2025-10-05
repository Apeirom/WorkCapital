export interface Contractor extends BaseModel {
    // Parâmetros do Modelo Contractor:
    company_name: string | null; // Mapeado de CharField (aceita nulo)
    
    // Opcional: Adicionar a relação reversa se for buscada em algum Serializer
    // created_projects?: Project[]; 
}

/** Interface para o Payload de Criação de um Contractor (POST /api/contractors/). */
export interface ContractorCreateData {
    company_name?: string | null;
}
