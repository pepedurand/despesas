import { tipoDespesa } from '../types/tipoDespesa';

export class CriarAtualizarDespesaDto {
  description: string;
  value: number;
  type: tipoDespesa;
  dataDespesa: Date;
}
