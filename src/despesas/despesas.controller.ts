import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CriarAtualizarDespesaDto } from './dtos/criar-atualizar-despesa.dto';
import { Despesa } from './interfaces/despesa.interface';
import { DespesasValidacaoPipe } from './pipes/despesas-validacao.pipe';

@Controller('despesas')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarDespesa(@Body() criarDespesaDto: CriarAtualizarDespesaDto) {
    return await this.despesasService.criarDespesa(criarDespesaDto);
  }

  @Get()
  async consultarDespesas(): Promise<Despesa[]> {
    return await this.despesasService.consultarDespesas();
  }

  @Delete('/:_id')
  async deletarDespesa(
    @Param('_id', DespesasValidacaoPipe) _id: string,
  ): Promise<void> {
    this.despesasService.deletarDespesa(_id);
  }
}
