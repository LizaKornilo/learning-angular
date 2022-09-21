import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAddFormReactiveComponent } from './hero-add-form-reactive.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeroesModule} from "../heroes.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('HeroAddFormComponent', () => {
  let component: HeroAddFormReactiveComponent;
  let fixture: ComponentFixture<HeroAddFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAddFormReactiveComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HeroesModule,
        BrowserAnimationsModule,
      ],
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
