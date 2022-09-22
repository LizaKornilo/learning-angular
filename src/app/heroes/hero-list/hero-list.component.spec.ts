import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HeroService} from "../hero.service";
// import {HEROES} from "../mock-heroes";

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  // let heroServiceSpy: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListComponent ],
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes', 'deleteHero']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should call getHeroes', fakeAsync(() => {
    component.ngOnInit()
    expect(component.getHeroes).toBeDefined();
    // expect(component.heroes).toEqual(HEROES)
  }));

  // it('#getHeroes should call getHeroes method', () => {
  //   component.getHeroes()
  //   // expect(component.heroes).toEqual(HEROES)
  // });

  // it('#add should call getHeroes method', () => {
  //   const testName = 'test name';
  //   const testPower = 'test power';
  //   component.add(testName,testPower)
  //   // expect(component.heroes).toEqual(HEROES)
  // });

  // it('#delete should call heroService deleteHero method', () => {
  //   const mackHero = HEROES[0];
  //   component.delete(mackHero)
  //   // expect(heroServiceSpy.deleteHero(mackHero.id)).toHaveBeenCalled()
  // });
});
