import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdataComponent } from './mdata.component';

describe('MdataComponent', () => {
  let component: MdataComponent;
  let fixture: ComponentFixture<MdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
