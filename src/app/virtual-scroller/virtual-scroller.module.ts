import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerComponent } from './virtual-scroller/virtual-scroller.component';
import {MatCardModule} from "@angular/material/card";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    VirtualScrollerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
  ]
})
export class VirtualScrollerModule { }
