import * as mongoose from 'mongoose';
import { tipoDespesa } from '../types/tipoDespesa';

export const DespesaSchema = new mongoose.Schema(
  {
    user_id: { type: String },
    description: { type: String },
    value: { type: Number },
    type: {
      type: String,
      enum: tipoDespesa,
    },
    dataDespesa: { type: Date },
  },
  { timestamps: true },
);
