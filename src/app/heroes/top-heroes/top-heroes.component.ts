import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../IHero";

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent {
  @Input() topHeroes?: IHero[];

  constructor() { }
}
