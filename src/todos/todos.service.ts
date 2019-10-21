import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

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

  create(todo: Todo) {
    this.todos = [...this.todos, todo];
  }
}
