import { tipoDespesa } from '../types/tipoDespesa';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
export class CriarAtualizarDespesaDto {
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsNumber()
  value: number;
  @IsEnum(tipoDespesa)
  @IsNotEmpty()
  type: tipoDespesa;
  @IsDateString()
  dataDespesa: Date;
}
