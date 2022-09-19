import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
})
export class NameListComponent implements OnInit {
  @Input() names?: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
