import { Component, OnInit } from '@angular/core';
import { IHero } from '../IHero';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {GetHeroes} from "../../store/actions/hero.action";
import {Observable, Subscription} from "rxjs";
import {selectHeroList} from "../../store/selectors/hero.selector";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<IHero[] | null> = this._store.pipe(select(selectHeroList))
  subscription?: Subscription;
  topHeroes: IHero[] = [];

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this._store.dispatch(new GetHeroes())

    this.subscription = new Subscription()
    this.subscription.add(
      this.heroes$
      .subscribe(heroes => this.topHeroes = heroes ? heroes.slice(1, 5) : [])
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
