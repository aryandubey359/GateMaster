import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutgateComponent } from './aboutgate.component';

describe('AboutgateComponent', () => {
  let component: AboutgateComponent;
  let fixture: ComponentFixture<AboutgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
