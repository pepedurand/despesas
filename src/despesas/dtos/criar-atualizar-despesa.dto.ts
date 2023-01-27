export class CriarAtualizarDespesaDto {
  description: string;
  value: string;
  type: 'credit' | 'expense';
  dataDespesa: Date;
}
