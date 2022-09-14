import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAddFormReactiveComponent } from './hero-add-form-reactive.component';

describe('HeroAddFormComponent', () => {
  let component: HeroAddFormReactiveComponent;
  let fixture: ComponentFixture<HeroAddFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAddFormReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAddFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
