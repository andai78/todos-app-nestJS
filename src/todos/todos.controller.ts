import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './models/todo.model';

@Controller('todos')
export class TodosController {

  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.get();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.todosService.findOne(id)
  }

  @Post()
  createTodo(@Body() newTodo) {
    console.log(newTodo);
    this.todosService.create(newTodo);
  }
}
