import {Component, Input} from '@angular/core';

import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent {

  @Input() crises?: Crisis[];
  @Input() selectedId?: number;

  constructor() {}
}
