import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import {HEROES} from "../mock-heroes";
import {IHero} from "../IHero";

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  // let heroes: IHero[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('#search should ', () => {
  //   heroes = HEROES;
  //   const testTerm = 'b';
  //   const expectedHeroes = heroes.filter((hero) => {
  //     return hero.name.includes(testTerm)
  //   })
  //
  //   component.search(searchTerms)
  //   expect(component.search(testTerm)).toEqual(expectedHeroes)
  // });

});
