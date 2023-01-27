import { Module } from '@nestjs/common';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.service';

@Module({
  controllers: [DespesasController],
  providers: [DespesasService],
})
export class DespesasModule {}
