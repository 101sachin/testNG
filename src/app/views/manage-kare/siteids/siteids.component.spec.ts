import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteidsComponent } from './siteids.component';

describe('SiteidsComponent', () => {
  let component: SiteidsComponent;
  let fixture: ComponentFixture<SiteidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
