import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFancingComponent } from './geo-fancing.component';

describe('GeoFancingComponent', () => {
  let component: GeoFancingComponent;
  let fixture: ComponentFixture<GeoFancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoFancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
