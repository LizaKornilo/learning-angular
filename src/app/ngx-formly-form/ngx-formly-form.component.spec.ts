import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormlyFormComponent } from './ngx-formly-form.component';

describe('NgxFormlyFormComponent', () => {
  let component: NgxFormlyFormComponent;
  let fixture: ComponentFixture<NgxFormlyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormlyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
