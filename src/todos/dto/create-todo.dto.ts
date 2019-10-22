export class CreateTodoDTO {
  readonly id: number;
  readonly title: string;
  readonly status: boolean;
  readonly description?: string;
}