import {initialHeroState} from "../state/hero.state";
import {EHeroAction, HeroActions} from "../actions/hero.action";

export const heroReducers = (
  state = initialHeroState,
  action: HeroActions
) => {
  switch (action.type) {
    case EHeroAction.GetHeroesSuccess: {
      return {
        ...state,
        heroes: action.payload
      };
    }
    case EHeroAction.GetCurrentHeroSuccess: {
      return {
        ...state,
        currentHero: action.payload
      };
    }

    default:
      return state;
  }
}
