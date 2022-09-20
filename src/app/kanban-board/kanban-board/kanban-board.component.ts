import { Component } from '@angular/core';
import {ITodosByStatus} from "../data/model/i-todos-by-statuses";
import {TODOS_BY_STATUSES} from "../data/data";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITodo} from "../data/model/i-todo";

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

  drop(event: CdkDragDrop<ITodo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
