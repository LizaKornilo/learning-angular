import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNameFormComponent } from './add-name-form.component';

describe('AddNameFormComponent', () => {
  let component: AddNameFormComponent;
  let fixture: ComponentFixture<AddNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
