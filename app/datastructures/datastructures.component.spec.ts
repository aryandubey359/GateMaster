import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructuresComponent } from './datastructures.component';

describe('DatastructuresComponent', () => {
  let component: DatastructuresComponent;
  let fixture: ComponentFixture<DatastructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatastructuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
