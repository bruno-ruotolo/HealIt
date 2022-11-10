export interface ClinicsInfos {
  id: number;
  nome: string;
  cnpj: string;
  especialidade: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: any;
  bairro: string;
  cidade: string;
  estado: string;
  status: string;
  preco: string;
  atendimento: Atendimento;
}

export interface Atendimento {
  inicio: string;
  fim: string;
}
