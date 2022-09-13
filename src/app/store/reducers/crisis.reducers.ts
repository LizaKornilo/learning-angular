import {initialCrisisState} from "../state/crisis.state";
import {CrisisAction, ECrisisActions} from "../actions/crisis.action";

export const crisisReducers = (
  state = initialCrisisState,
  action: CrisisAction,
) => {
  switch (action.type) {
    case ECrisisActions.GetCrisesSuccess: {
      return {
        ...state,
        crises: action.payload
      };
    }
    case ECrisisActions.GetCrisisSuccess: {
      return {
        ...state,
        currentCrisis: action.payload
      };
    }

    default:
      return state;
  }
}
