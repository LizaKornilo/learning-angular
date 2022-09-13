import {Action} from "@ngrx/store";
import {Crisis} from "../../crisis-center/crisis";

export enum ECrisisActions {
  GetCrises = '[Crisis] Get Crises',
  GetCrisesSuccess = '[Crisis] Get Crises Success',
  GetCrisis = '[Crisis] Get Crisis',
  GetCrisisSuccess = '[Crisis] Get Crisis Success',
}

export class GetCrises implements Action {
  public readonly type = ECrisisActions.GetCrises;
}

export class GetCrisesSuccess implements Action {
  public readonly type = ECrisisActions.GetCrisesSuccess;
  constructor(public payload: Crisis[]) {}
}

export class GetCrisis implements Action {
  public readonly type = ECrisisActions.GetCrisis;
  constructor(public payload: number) {}
}

export class GetCrisisSuccess implements Action {
  public readonly type = ECrisisActions.GetCrisisSuccess;
  constructor(public payload: Crisis) {}
}

export type CrisisAction = GetCrises | GetCrisesSuccess | GetCrisis | GetCrisisSuccess;
