import {Component, OnInit} from '@angular/core';
import {IHero} from "../IHero";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {UpdateHero} from "../../store/actions/hero.action";
import {selectCurrentHero} from "../../store/selectors/hero.selector";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-hero-detail-smart',
  template: '<app-hero-detail [hero]="hero$ | async" (onSave)="save($event)" (goBack)="goBack()"></app-hero-detail>',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailSmartComponent implements OnInit {
  hero$: Observable<IHero | null>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private _store: Store<IAppState>,
    private location: Location,
  ) {
    this.hero$ = this._store.pipe(
      select(selectCurrentHero),
      map((hero) => {
        return JSON.parse(JSON.stringify(hero))
      })
    );
  }

  ngOnInit(): void {}

  save(hero: IHero): void {
    if (hero) {
      this._store.dispatch(new UpdateHero(hero))
      this.goBack()
    }
  }

  goBack(): void {
    this.location.back();
  }
}
