import { Module } from '@nestjs/common';
import { DespesasModule } from './despesas/despesas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@despesas.a9ymjxu.mongodb.net/?retryWrites=true&w=majority      ',
    ),
    DespesasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
