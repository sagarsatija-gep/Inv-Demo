import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCycleCountDetails2Component } from './manage-cycle-count-details2.component';

describe('ManageCycleCountDetails2Component', () => {
  let component: ManageCycleCountDetails2Component;
  let fixture: ComponentFixture<ManageCycleCountDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCycleCountDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCycleCountDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
