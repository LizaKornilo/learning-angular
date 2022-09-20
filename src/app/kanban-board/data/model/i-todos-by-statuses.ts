import {IStatus} from "./i-status";
import {ITodo} from "./i-todo";

export interface ITodosByStatus extends IStatus{
  todos: ITodo[],
}[]
