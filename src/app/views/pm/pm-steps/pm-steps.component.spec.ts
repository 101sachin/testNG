import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmStepsComponent } from './pm-steps.component';

describe('PmStepsComponent', () => {
  let component: PmStepsComponent;
  let fixture: ComponentFixture<PmStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
