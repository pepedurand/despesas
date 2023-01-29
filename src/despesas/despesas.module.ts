import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.service';
import { DespesaSchema } from './interfaces/despesa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'despesas', schema: DespesaSchema }]),
  ],
  controllers: [DespesasController],
  providers: [DespesasService],
})
export class DespesasModule {}
