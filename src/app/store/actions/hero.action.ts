import {Action} from "@ngrx/store";
import {Hero} from "../../heroes/hero";

export enum EHeroAction {
  GetHeroes = '[Hero] Get Heroes',
  GetHeroesSuccess = '[Hero]  Get Heroes Success',
  GetCurrentHero = '[Hero] Get Current Hero',
  GetCurrentHeroSuccess = '[Hero] Get Current Hero Success',
}

export class GetHeroes implements Action {
  public readonly type = EHeroAction.GetHeroes;
}

export class GetHeroesSuccess implements Action {
  public readonly type = EHeroAction.GetHeroesSuccess;
  constructor(public payload: Hero[]) {}
}

export class GetCurrentHero implements Action {
  public readonly type = EHeroAction.GetCurrentHero;
  constructor(public payload: number) {}
}

export class GetCurrentHeroSuccess implements Action {
  public readonly type = EHeroAction.GetCurrentHeroSuccess;
  constructor(public payload: Hero) {}
}

export type HeroActions = GetHeroes | GetHeroesSuccess | GetCurrentHero | GetCurrentHeroSuccess;
