import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,

    DragDropModule,
    MatCardModule,
  ]
})
export class KanbanBoardModule { }
