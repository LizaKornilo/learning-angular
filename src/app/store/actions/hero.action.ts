import {Action} from "@ngrx/store";
import {IHero} from "../../heroes/IHero";

export enum EHeroAction {
  GetHeroes = '[Hero] Get Heroes',
  GetHeroesSuccess = '[Hero]  Get Heroes Success',
  GetCurrentHero = '[Hero] Get Current Hero',
  GetCurrentHeroSuccess = '[Hero] Get Current Hero Success',
  UpdateHero = '[Hero] Update Hero',
  UpdateHeroSuccess = '[Hero] Update Hero Success',
  AddHero = '[Hero] Add Hero',
  AddHeroSuccess = '[Hero] Add Hero Success',
  DeleteHero = '[Hero] Delete Hero',
  DeleteHeroSuccess = '[Hero] Delete Hero Success',
}

export class GetHeroes implements Action {
  public readonly type = EHeroAction.GetHeroes;
}

export class GetHeroesSuccess implements Action {
  public readonly type = EHeroAction.GetHeroesSuccess;
  constructor(public payload: IHero[]) {}
}

export class GetCurrentHero implements Action {
  public readonly type = EHeroAction.GetCurrentHero;
  constructor(public payload: number) {}
}

export class GetCurrentHeroSuccess implements Action {
  public readonly type = EHeroAction.GetCurrentHeroSuccess;
  constructor(public payload: IHero) {}
}

export class UpdateHero implements Action {
  public readonly type = EHeroAction.UpdateHero;
  constructor(public payload: IHero) {}
}

export class UpdateHeroSuccess implements Action {
  public readonly type = EHeroAction.UpdateHeroSuccess;
  constructor(public payload: IHero) {}
}

export class AddHero implements Action {
  public readonly type = EHeroAction.AddHero;
  constructor(public payload: IHero) {}
}

export class AddHeroSuccess implements Action {
  public readonly type = EHeroAction.AddHeroSuccess;
  constructor(public payload: IHero) {}
}

export class DeleteHero implements Action {
  public readonly type = EHeroAction.DeleteHero;
  constructor(public payload: number) {}
}

export class DeleteHeroSuccess implements Action {
  public readonly type = EHeroAction.DeleteHeroSuccess;
  constructor(public payload: number) {}
}

export type HeroActions = GetHeroes | GetHeroesSuccess
  | GetCurrentHero | GetCurrentHeroSuccess
  | UpdateHero | UpdateHeroSuccess
  | AddHero | AddHeroSuccess
  | DeleteHero | DeleteHeroSuccess;
