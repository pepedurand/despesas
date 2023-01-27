import { Injectable, Logger } from '@nestjs/common';
import { CriarAtualizarDespesaDto } from './dtos/criar-atualizar-despesa.dto';
import { Despesa } from './interfaces/despesa.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DespesasService {
  private despesas: Despesa[] = [
    {
      _id: '2',
      dataDespesa: new Date(),
      description: 'debito',
      type: 'credit',
      user_id: '1',
      value: '20',
    },
  ];

  private readonly logger = new Logger(DespesasService.name);

  async criarDespesa(criarDespesaDto: CriarAtualizarDespesaDto) {
    const despesa: Despesa = {
      _id: uuidv4(),
      dataDespesa: new Date(),
      description: criarDespesaDto.description,
      type: criarDespesaDto.type,
      user_id: '1',
      value: criarDespesaDto.value,
    };
    await this.despesas.push(despesa);
    return this.despesas;
  }

  //   async atualizarDespesa()

  async consultarDespesas(): Promise<Despesa[]> {
    return this.despesas;
  }
}
