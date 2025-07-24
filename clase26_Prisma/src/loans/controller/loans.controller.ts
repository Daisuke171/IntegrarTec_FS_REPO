import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { LoansService } from '../use-cases/loans.service';
import { Loan } from '../domain/entities/loans.entity';

@Controller('loans')
export class LoansController {
  constructor(private readonly loanService: LoansService) {}

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanService.findOne(id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.loanService.findByUser(userId);
  }

  @Post()
  create(@Body() data: Omit<Loan, 'id'>) {
    return this.loanService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Loan>) {
    return this.loanService.update(id, data);
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return this.loanService.delete(id);
  }
}
