import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameListComponent } from './name-list.component';

describe('NamesListComponent', () => {
  let component: NameListComponent;
  let fixture: ComponentFixture<NameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
