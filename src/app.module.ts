import { Module } from '@nestjs/common';
import { DespesasModule } from './despesas/despesas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyExpensesModule } from './daily-expenses/daily-expenses.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@despesas.a9ymjxu.mongodb.net/?retryWrites=true&w=majority      ',
    ),
    DespesasModule,
    DailyExpensesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
