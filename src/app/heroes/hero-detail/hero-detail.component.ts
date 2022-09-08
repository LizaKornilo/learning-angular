import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../IHero";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';
import {filter, Observable, switchMap} from "rxjs";

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
    private router: Router,
    private heroService: HeroService,
    private location: Location
  ) {}

 ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(Number(params.get('id'))))
    )
   this.hero$.subscribe(hero => this.hero = hero)

   // this.getHero();
   // this.route.data.subscribe(data  => this.hero = data['hero'])
  }

  // getHero(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero
  //     // .subscribe(hero => hero
  //     //   ? this.hero = hero
  //     //   : this.router.navigateByUrl('/404')
  //     );
  // }

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
