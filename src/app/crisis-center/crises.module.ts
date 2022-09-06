import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CrisesRoutingModule } from './crises-routing.module';
import {FormsModule} from "@angular/forms";
import {CrisisDetailComponent} from "./crisis-detail/crisis-detail.component";
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import {CrisisListComponent} from "./crisis-list/crisis-list.component";


@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisesRoutingModule,
  ]
})
export class CrisesModule { }
