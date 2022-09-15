import {IHero} from "../../heroes/IHero";

export interface IHeroState {
  heroes: IHero[] | null;
  currentHero: IHero | null;
}

export const initialHeroState: IHeroState = {
  heroes: null,
  currentHero: null,
}
