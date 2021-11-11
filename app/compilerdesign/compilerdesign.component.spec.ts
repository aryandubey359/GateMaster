import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerdesignComponent } from './compilerdesign.component';

describe('CompilerdesignComponent', () => {
  let component: CompilerdesignComponent;
  let fixture: ComponentFixture<CompilerdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
