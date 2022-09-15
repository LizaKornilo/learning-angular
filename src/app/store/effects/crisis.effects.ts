import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ECrisisActions, GetCrises, GetCrisesSuccess, GetCrisis, GetCrisisSuccess} from "../actions/crisis.action";
import {map, switchMap} from "rxjs/operators";
import {CrisisService} from "../../crisis-center/crisis.service";
import {catchError, of} from 'rxjs'

@Injectable()
export class CrisisEffects {
  getCrises$ = createEffect((): any => {
    return this._actions$.pipe(
      ofType<GetCrises>(ECrisisActions.GetCrises),
      switchMap(() => {
        return this._crisisService.getCrises().pipe(
          map(responseData => new GetCrisesSuccess(responseData)),
          catchError(error => of())
        )
      })
    )
  })

  getCrisis$ = createEffect((): any => {
    return this._actions$.pipe(
      ofType<GetCrisis>(ECrisisActions.GetCrisis),
      switchMap((actionData: any) => {
        return this._crisisService.getCrisis(actionData.payload).pipe(
          map((response) => new GetCrisisSuccess(response)),
          catchError(error => of())
        )
      })
    )
  })

  constructor(
    private _crisisService: CrisisService,
    private _actions$: Actions,
  ) {}
}
