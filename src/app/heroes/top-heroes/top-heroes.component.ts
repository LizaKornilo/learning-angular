import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent {
  @Input() topHeroes?: Hero[];

  constructor() { }
}
