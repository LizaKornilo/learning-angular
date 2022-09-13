import {IHeroState, initialHeroState} from "./hero.state";
import {ICrisisState, initialCrisisState} from "./crisis.state";

export interface IAppState {
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
