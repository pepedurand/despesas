import { Injectable } from '@nestjs/common';
import { CriarAtualizarDespesaDto } from './dtos/criar-atualizar-despesa.dto';
import { Despesa } from './interfaces/despesa.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DespesasService {
  constructor(
    @InjectModel('despesas') private readonly despesaModel: Model<Despesa>,
  ) {}

  async criarDespesa(
    criarDespesaDto: CriarAtualizarDespesaDto,
  ): Promise<Despesa> {
    const despesaAdicionada = new this.despesaModel(criarDespesaDto);
    return await despesaAdicionada.save();
  }

  async consultarDespesas(): Promise<Despesa[]> {
    return await this.despesaModel.find();
  }

  async deletarDespesa(_id: string): Promise<Despesa[]> {
    const despesaEncontrada = this.despesaModel.findOne({ _id });
    return await this.despesaModel.remove(despesaEncontrada);
  }
}
