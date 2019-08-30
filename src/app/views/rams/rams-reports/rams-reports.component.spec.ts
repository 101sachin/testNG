import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsReportsComponent } from './rams-reports.component';

describe('RamsReportsComponent', () => {
  let component: RamsReportsComponent;
  let fixture: ComponentFixture<RamsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
