import { Document } from 'mongoose';
import { tipoDespesa } from '../types/tipoDespesa';

export interface Despesa extends Document {
  readonly _id: string;
  readonly user_id: '1';
  description: string;
  value: number;
  type: tipoDespesa;
  dataDespesa: Date;
}
