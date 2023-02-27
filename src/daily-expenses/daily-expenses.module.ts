import { Module } from '@nestjs/common';
import { DailyExpensesService } from './daily-expenses.service';
import { DailyExpensesController } from './daily-expenses.controller';

@Module({
  providers: [DailyExpensesService],
  controllers: [DailyExpensesController],
})
export class DailyExpensesModule {}
