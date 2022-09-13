import {ActionReducerMap} from "@ngrx/store";

import {IAppState} from "../state/app.state";
import {heroReducers} from "./hero.reducers";
import {crisisReducers} from "./crisis.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  heroes: heroReducers,
  crises: crisisReducers
}
