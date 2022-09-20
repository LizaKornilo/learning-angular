import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.css']
})
export class VirtualScrollerComponent {
  list: number[]

  constructor() {
    this.list = Array(1000)
      .fill('')
      .map((i, index) => index)
  }
}
