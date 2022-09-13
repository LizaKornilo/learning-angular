import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {ICrisisState} from "../state/crisis.state";

const selectCrises = (state: IAppState) => state.crises;

export const selectCrisisList = createSelector(
  selectCrises,
  (state: ICrisisState) => state.crises,
)

export const selectCurrentCrisis = createSelector(
  selectCrises,
  (state: ICrisisState) => state.currentCrisis,
)

