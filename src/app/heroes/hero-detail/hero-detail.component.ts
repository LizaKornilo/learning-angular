import {Component, OnInit} from '@angular/core';
import {IHero} from "../IHero";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: IHero
  hero$?: Observable<IHero>

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

 ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(Number(params.get('id'))))
    )
   this.hero$.subscribe(hero => this.hero = hero)
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
