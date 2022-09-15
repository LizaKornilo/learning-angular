import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";
import {catchError, of} from 'rxjs'
import {EHeroAction, GetCurrentHero, GetCurrentHeroSuccess, GetHeroes, GetHeroesSuccess} from "../actions/hero.action";
import {HeroService} from "../../heroes/hero.service";

@Injectable()
export class HeroEffects {
  getHeroes$ = createEffect((): any => {
    return this._actions$.pipe(
      ofType<GetHeroes>(EHeroAction.GetHeroes),
      switchMap(() => {
        return this._heroService.getHeroes().pipe(
          map(responseData => new GetHeroesSuccess(responseData)),
          catchError(error => of())
        )
      })
    )
  })

  getHero$ = createEffect((): any => {
    return this._actions$.pipe(
      ofType<GetCurrentHero>(EHeroAction.GetCurrentHero),
      switchMap((actionData: any) => {
        return this._heroService.getHero(actionData.payload).pipe(
          map((response) => new GetCurrentHeroSuccess(response)),
          catchError(error => of())
        )
      })
    )
  })

  constructor(
    private _heroService: HeroService,
    private _actions$: Actions,
  ) {}
}
