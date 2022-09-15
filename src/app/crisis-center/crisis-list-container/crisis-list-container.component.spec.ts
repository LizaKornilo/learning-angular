import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisListContainerComponent } from './crisis-list-container.component';

describe('CrisisListContainerComponent', () => {
  let component: CrisisListContainerComponent;
  let fixture: ComponentFixture<CrisisListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisisListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
