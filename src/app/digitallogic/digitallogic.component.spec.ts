import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitallogicComponent } from './digitallogic.component';

describe('DigitallogicComponent', () => {
  let component: DigitallogicComponent;
  let fixture: ComponentFixture<DigitallogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitallogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitallogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
