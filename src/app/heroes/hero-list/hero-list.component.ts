import { Component, OnInit } from '@angular/core';
import {IHero} from "../IHero";
import {HeroService} from "../hero.service";
import { Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {selectHeroList} from "../../store/selectors/hero.selector";
import {AddHero, DeleteHero, GetHeroes} from "../../store/actions/hero.action";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<IHero[] | null> = this._store.pipe(select(selectHeroList))
  subscription?: Subscription;
  heroes?: IHero[];

  constructor(private heroService: HeroService,
              private _store: Store<IAppState>,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._store.dispatch(new GetHeroes())

    this.subscription = new Subscription()
    this.subscription.add(
      this.heroes$
      .subscribe(heroes => this.heroes = heroes ? heroes : [])
    );
  }

  add(hero: IHero): void {
    this._store.dispatch(new AddHero(hero))
  }

  delete(hero: IHero): void {
    this._store.dispatch(new DeleteHero(hero.id))
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
