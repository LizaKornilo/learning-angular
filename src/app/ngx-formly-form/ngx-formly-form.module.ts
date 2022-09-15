import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormlyModule} from "@ngx-formly/core";
import {FormlyMaterialModule} from "@ngx-formly/material";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from "@angular/material/core";
import {FormlyMatDatepickerModule} from "@ngx-formly/material/datepicker";
import {FormlyMatToggleModule} from "@ngx-formly/material/toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxFormlyFormComponent} from "./ngx-formly-form.component";

@NgModule({
  declarations: [
    NgxFormlyFormComponent,
  ],
  exports: [
    NgxFormlyFormComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,

    MatNativeDateModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,

    FormlyModule.forRoot(),
    FormlyMaterialModule,
  ]
})
export class NgxFormlyFormModule { }
