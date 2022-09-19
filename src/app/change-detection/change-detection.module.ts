import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import {FormsModule} from "@angular/forms";
import { AddNameFormComponent } from './add-name-form/add-name-form.component';
import { NameListComponent } from './names-list/name-list.component';

@NgModule({
  declarations: [
    ChangeDetectionComponent,
    AddNameFormComponent,
    NameListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChangeDetectionModule { }
