import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingsystemComponent } from './operatingsystem.component';

describe('OperatingsystemComponent', () => {
  let component: OperatingsystemComponent;
  let fixture: ComponentFixture<OperatingsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingsystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
