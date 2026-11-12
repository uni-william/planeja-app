export interface ValidationErrorResponse {
    timestamp: Date;
    status: Number;
    error: string;
    camposInvalidos: CampoInvalido[]
}

export interface CampoInvalido {
    campo: string;
    erro: string;
}