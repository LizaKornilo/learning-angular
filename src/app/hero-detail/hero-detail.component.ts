import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private heroService: HeroService,
    private location: Location
  ) { }

 ngOnInit(): void {
    // this.getHero();
   this.route.data.subscribe(data  => this.hero = data['hero'])
  }

  // getHero(): void {
  //   // console.log(this.route)
  //   // this.route.params.subscribe(params => console.log(params))
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
