import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IHero} from "./IHero";
import {Observable} from "rxjs";
import {IAppState} from "../store/state/app.state";
import {select, Store} from "@ngrx/store";
import {selectCurrentHero} from "../store/selectors/hero.selector";
import {GetCurrentHero} from "../store/actions/hero.action";

@Injectable({
  providedIn: 'root'
})
export class HeroResolverService implements Resolve<IHero | null>{
  hero$: Observable<IHero | null>

  constructor(private _store: Store<IAppState>) {
    this.hero$ = this._store.pipe(select(selectCurrentHero))
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHero | null> | Promise<IHero> | IHero {
    const id = Number(route.paramMap.get('id'));
    this._store.dispatch(new GetCurrentHero(id))
    return this.hero$;
  }
}
