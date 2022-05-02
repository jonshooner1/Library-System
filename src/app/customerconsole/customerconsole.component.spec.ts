import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerconsoleComponent } from './customerconsole.component';

describe('CustomerconsoleComponent', () => {
  let component: CustomerconsoleComponent;
  let fixture: ComponentFixture<CustomerconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerconsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
