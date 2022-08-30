import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Hero} from "./hero";
import {Observable} from "rxjs";
import {HeroService} from "./hero.service";

@Injectable({
  providedIn: 'root'
})
export class HeroResolverService implements Resolve<Hero>{

  constructor(private HeroService: HeroService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> | Promise<Hero> | Hero {
    return this.HeroService.getHero(Number(route.paramMap.get('id')))
  }

}
