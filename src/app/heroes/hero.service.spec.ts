import {TestBed} from '@angular/core/testing';

import { HeroService } from './hero.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {IHero} from "./IHero";
import {MessageService} from "../message.service";
import {HEROES} from "./mock-heroes";
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";

describe('HeroService', () => {
  let heroService: HeroService;
  let httpTestingController: HttpTestingController;
  let messageService: MessageService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService],
    });
    httpTestingController = TestBed.get(HttpTestingController);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put', 'post', 'delete']);
    messageService = jasmine.createSpyObj('MessageService', ['add']);
    heroService = new HeroService(httpClientSpy, messageService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it('#getHeroes should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes: IHero[] = HEROES;

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.getHeroes().subscribe({
      next: heroes => {
        expect(heroes)
          .withContext('expected heroes')
          .toEqual(expectedHeroes);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });


  it('#getHero should return expected hero (HttpClient called once)', (done: DoneFn) => {
    const expectedHero: IHero = HEROES[0];

    httpClientSpy.get.and.returnValue(of(expectedHero));

    heroService.getHero(expectedHero.id).subscribe({
      next: hero => {
        expect(hero)
          .withContext('expected hero')
          .toEqual(expectedHero);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('#updateHero should update hero (HttpClient called once)', (done: DoneFn) => {
    const oldHero: IHero = HEROES[0];
    const newHero = { ...oldHero, name: 'new name' };

    httpClientSpy.put.and.returnValue(of(newHero));

    heroService.updateHero(newHero).subscribe({
      next: hero => {
        expect(hero)
          .withContext('updated hero')
          .toEqual(newHero);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.put.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('#addHero should return added hero (HttpClient called once)', (done: DoneFn) => {
    const heroToAdd: IHero = {
      id: 0,
      name: 'hero name',
      power: 'hero power',
    };

    httpClientSpy.post.and.returnValue(of(heroToAdd));

    heroService.addHero(heroToAdd).subscribe({
      next: hero => {
        expect(hero)
          .withContext('added hero')
          .toEqual(heroToAdd);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

   it('#deleteHero should return deleted (by id) hero (HttpClient called once)', (done: DoneFn) => {
    const heroToDelete: IHero = HEROES[0];

    httpClientSpy.delete.and.returnValue(of(heroToDelete));

    heroService.deleteHero(heroToDelete.id).subscribe({
      next: hero => {
        expect(hero)
          .withContext('deleted hero')
          .toEqual(heroToDelete);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.delete.calls.count())
      .withContext('one call')
      .toBe(1);
  });

   it('#searchHeroes should return of([]) if term is empty', (done: DoneFn) => {
     const term = '  ';

     heroService.searchHeroes(term).subscribe({
      next: res => {
        expect(res)
          .withContext('search result')
          .toEqual([]);
        done();
      },
      error: done.fail
    });

     expect(httpClientSpy.delete.calls.count())
       .withContext('is not call')
       .toBe(0);
   });

   it('#searchHeroes should return heroes by term (HttpClient called once)', (done: DoneFn) => {
    const heroes: IHero[] = HEROES;
    const term = ' b ';

    const expectedHeroes = heroes.filter((hero) => {
      return hero.name.includes(term.trim())
    })

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.searchHeroes(term).subscribe({
      next: heroes => {
        expect(heroes)
          .withContext('searched heroes')
          .toEqual(expectedHeroes);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
