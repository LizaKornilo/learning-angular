import { Component } from '@angular/core';
import {ITodosByStatus} from "../data/model/i-todos-by-statuses";
import {TODOS_BY_STATUSES} from "../data/data";

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
  todos: ITodosByStatus[];

  constructor() {
    this.todos = TODOS_BY_STATUSES;
  }
}
