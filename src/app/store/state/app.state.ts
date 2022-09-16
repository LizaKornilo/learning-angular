import {RouterReducerState} from "@ngrx/router-store";
import {IHeroState, initialHeroState} from "./hero.state";
import {ICrisisState, initialCrisisState} from "./crisis.state";

export interface IAppState {
  router?: RouterReducerState;
  heroes: IHeroState;
  crises: ICrisisState,
}

export const  initialAppState: IAppState = {
  heroes: initialHeroState,
  crises: initialCrisisState,
}

export function getInitialState(): IAppState {
  return initialAppState;
}
