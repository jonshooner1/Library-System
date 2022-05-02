import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckincComponent } from './checkinc.component';

describe('CheckincComponent', () => {
  let component: CheckincComponent;
  let fixture: ComponentFixture<CheckincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
