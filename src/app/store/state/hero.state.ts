import {Hero} from "../../heroes/hero";

export interface IHeroState {
  heroes: Hero[] | null;
  currentHero: Hero | null;
}

export const initialHeroState: IHeroState = {
  heroes: null,
  currentHero: null,
}
