import { Component, OnInit } from '@angular/core';
import { IHero } from '../IHero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  topHeroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.topHeroes = heroes.slice(1, 5));
  }
}
