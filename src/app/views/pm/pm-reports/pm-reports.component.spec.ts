import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmReportsComponent } from './pm-reports.component';

describe('PmReportsComponent', () => {
  let component: PmReportsComponent;
  let fixture: ComponentFixture<PmReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
