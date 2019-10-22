import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    { 
      id: 1,
      title: 'faire les courses',
      status: true
    },
    {
      id: 2, 
      title: 'faire le ménage',
      status: false
    },
  ];

  get(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDTO) {
    this.todos = [...this.todos, todo as Todo];
  }

  findOne(id: string) {
    return this.todos.find(todo => todo.id === Number(id))
  }
}
