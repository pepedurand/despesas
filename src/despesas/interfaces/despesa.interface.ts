export interface Despesa {
  readonly _id: string;
  readonly user_id: '1';
  description: string;
  value: string;
  type: 'credit' | 'expense';
  dataDespesa: Date;
}
