import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryofcomputationComponent } from './theoryofcomputation.component';

describe('TheoryofcomputationComponent', () => {
  let component: TheoryofcomputationComponent;
  let fixture: ComponentFixture<TheoryofcomputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryofcomputationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryofcomputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
