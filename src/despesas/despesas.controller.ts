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
  @Get('/mes/:month')
  async listarDespesasDoMes(
    @Param('month', DespesasValidacaoPipe) month: number,
  ): Promise<Despesa[]> {
    return await this.despesasService.listarDespesasDoMes(month);
  }

  @Get('/debitos')
  async listarDebitos(): Promise<Despesa[]> {
    return await this.despesasService.listarDebitos();
  }

  @Get('/debitos/mes/:month')
  async listarDebitosDoMes(
    @Param('month', DespesasValidacaoPipe) month: number,
  ): Promise<Despesa[]> {
    return await this.despesasService.listarDebitosDoMes(month);
  }

  @Get('/creditos')
  async listarCreditos(): Promise<Despesa[]> {
    return await this.despesasService.listarCreditos();
  }
  @Get('/debitos/:month')
  async listarCreditosDoMes(
    @Param('month', DespesasValidacaoPipe) month: number,
  ): Promise<Despesa[]> {
    return await this.despesasService.listarCreditosDoMes(month);
  }

  @Delete('/:_id')
  async deletarDespesa(
    @Param('_id', DespesasValidacaoPipe) _id: string,
  ): Promise<void> {
    this.despesasService.deletarDespesa(_id);
  }
}
