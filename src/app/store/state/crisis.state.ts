import {Crisis} from "../../crisis-center/crisis";

export interface ICrisisState {
  crises: Crisis[] | null;
  currentCrisis: Crisis | null;
}

export const initialCrisisState: ICrisisState = {
  crises: null,
  currentCrisis: null,
}
