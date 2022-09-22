import { TestBed } from '@angular/core/testing';

import { HeroResolverService } from './hero-resolver.service';
import {ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap} from "@angular/router";
import {HEROES} from "./mock-heroes";
import {IHero} from "./IHero";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeroResolverService', () => {
  let service: HeroResolverService;
  // let route: ActivatedRoute;
  let mockHero: IHero;

  beforeEach(() => {
    mockHero = HEROES[0];
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroResolverService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: { paramMap: convertToParamMap({id: mockHero.id})}}
        }
        ]
    });
    service = TestBed.inject(HeroResolverService);
    // route = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#resolve should return hero observable', () => {
    expect(service).toBeTruthy();
    service.resolve(new ActivatedRouteSnapshot()).subscribe(
      (res) => {
        expect(res).toEqual(mockHero);
      }
    );
  });

});
