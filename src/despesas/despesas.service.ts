import { Injectable } from '@nestjs/common';
import { CriarAtualizarDespesaDto } from './dtos/criar-atualizar-despesa.dto';
import { Despesa } from './interfaces/despesa.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { tipoDespesa } from './types/tipoDespesa';

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
    return await this.despesaModel.find().sort({ dataDespesa: 1 });
  }

  async deletarDespesa(_id: string): Promise<Despesa[]> {
    const despesaEncontrada = this.despesaModel.findOne({ _id });
    return await this.despesaModel.remove(despesaEncontrada);
  }

  async listarDespesasDoMes(month: number): Promise<Despesa[]> {
    const despesasDoMes = this.despesaModel
      .find({
        $expr: { $eq: [{ $month: '$dataDespesa' }, month] },
      })
      .sort({ dataDespesa: 1 });
    return despesasDoMes;
  }

  async listarDebitos(): Promise<Despesa[]> {
    const debitos = this.despesaModel
      .find({
        type: tipoDespesa.EXPENSE,
      })
      .sort({ dataDespesa: 1 });
    return debitos;
  }

  async listarDebitosDoMes(month: number): Promise<Despesa[]> {
    const despesasDoMes = this.despesaModel
      .find({
        type: tipoDespesa.EXPENSE,
        $expr: { $eq: [{ $month: '$dataDespesa' }, month] },
      })
      .sort({ dataDespesa: 1 });
    return despesasDoMes;
  }

  async listarCreditos(): Promise<Despesa[]> {
    const creditos = this.despesaModel
      .find({
        type: tipoDespesa.CREDIT,
      })
      .sort({ dataDespesa: 1 });
    return creditos;
  }

  async listarCreditosDoMes(month: number): Promise<Despesa[]> {
    const creditosDoMes = this.despesaModel
      .find({
        type: tipoDespesa.CREDIT,
        $expr: { $eq: [{ $month: '$dataDespesa' }, month] },
      })
      .sort({ dataDespesa: 1 });
    return creditosDoMes;
  }
}
