import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisListComponent } from './crisis-list.component';

import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('CrisisListComponent', () => {
  let component: CrisisListComponent;
  let fixture: ComponentFixture<CrisisListComponent>;
  let router;
  let route;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisListComponent ],
      imports: [RouterTestingModule.withRoutes([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
