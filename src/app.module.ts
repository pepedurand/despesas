import { Module } from '@nestjs/common';
import { DespesasModule } from './despesas/despesas.module';

@Module({
  imports: [DespesasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
