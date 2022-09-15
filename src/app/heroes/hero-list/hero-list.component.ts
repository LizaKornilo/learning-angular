import { Component, OnInit } from '@angular/core';
import {IHero} from "../IHero";
import {HeroService} from "../hero.service";
import { Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {selectHeroList} from "../../store/selectors/hero.selector";
import {GetHeroes} from "../../store/actions/hero.action";

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

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
