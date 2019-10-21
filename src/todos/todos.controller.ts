import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './models/todo.model';

@Controller('todos')
export class TodosController {

  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.get();
  }

  @Post()
  createTodo(@Body() newTodo) {
    console.log(newTodo);
    this.todosService.create(newTodo);
  }
}
