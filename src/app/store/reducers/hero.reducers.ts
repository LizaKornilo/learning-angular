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
    case EHeroAction.UpdateHeroSuccess: {
      const heroes = state.heroes!.map((h) => {
        if (h.id === action.payload.id) {
          return action.payload;
        }
        return h;
      })
      return {
        ...state,
        heroes: heroes,
        currentHero: action.payload
      };
    }
    case EHeroAction.AddHeroSuccess: {
      return {
        ...state,
        heroes: state.heroes
          ? [...state.heroes, { ...action.payload, id: state.heroes[state.heroes.length - 1].id + 1}]
          : [{...action.payload, id: 1}],
      };
    }

    default:
      return state;
  }
}
