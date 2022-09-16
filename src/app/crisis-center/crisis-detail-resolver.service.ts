import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Crisis } from './crisis';
import {IAppState} from "../store/state/app.state";
import {select, Store} from "@ngrx/store";
import {GetCrisis} from "../store/actions/crisis.action";
import {selectCurrentCrisis} from "../store/selectors/crisis.selector";

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  crisis$: Observable<Crisis | null> =  this._store.pipe(select(selectCurrentCrisis))

  constructor(private _store: Store<IAppState>, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = Number(route.paramMap.get('id'));

    this._store.dispatch(new GetCrisis(id))

    return this.crisis$.pipe(
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else { // id not found

          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
