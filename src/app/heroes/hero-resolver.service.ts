import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {IHero} from "./IHero";
import {Observable} from "rxjs";
import {HeroService} from "./hero.service";

@Injectable({
  providedIn: 'root'
})
export class HeroResolverService implements Resolve<IHero>{

  constructor(private HeroService: HeroService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IHero> {
    return this.HeroService.getHero(Number(route.paramMap.get('id')))
  }

}
