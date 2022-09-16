import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IHeroState} from "../state/hero.state";

const selectHeroes = (state: IAppState) => state.heroes;

export const selectHeroList = createSelector(
  selectHeroes,
  (state: IHeroState) => state.heroes
);

export const selectCurrentHero = createSelector(
  selectHeroes,
  (state: IHeroState) => state.currentHero
)
