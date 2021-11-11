import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputernetworksComponent } from './computernetworks.component';

describe('ComputernetworksComponent', () => {
  let component: ComputernetworksComponent;
  let fixture: ComponentFixture<ComputernetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputernetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputernetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
