import { tipoDespesa } from '../types/tipoDespesa';
import { IsDate, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
export class CriarAtualizarDespesaDto {
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsNumber()
  value: number;
  @IsEnum(tipoDespesa)
  @IsNotEmpty()
  type: tipoDespesa;
  @IsDate()
  dataDespesa: Date;
}
