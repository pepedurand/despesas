import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CriarAtualizarDespesaDto } from './dtos/criar-atualizar-despesa.dto';
import { Despesa } from './interfaces/despesa.interface';

@Controller('despesas')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  async criarDespesa(@Body() criarDespesaDto: CriarAtualizarDespesaDto) {
    return await this.despesasService.criarDespesa(criarDespesaDto);
  }

  @Get()
  async consultarDespesas(): Promise<Despesa[]> {
    return await this.despesasService.consultarDespesas();
  }

  @Delete('/:_id')
  async deletarDespesa(@Param('_id') _id: string): Promise<void> {
    this.despesasService.deletarDespesa(_id);
  }
}
