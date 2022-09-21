import { Component, OnInit } from '@angular/core';
import {IHero} from "../IHero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes?: IHero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, power: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, power} as IHero).subscribe(hero => {
      this.heroes?.push(hero)
    });
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes?.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
