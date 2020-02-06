import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCycleCountRequestsComponent } from './manage-cycle-count-requests.component';

describe('ManageCycleCountRequestsComponent', () => {
  let component: ManageCycleCountRequestsComponent;
  let fixture: ComponentFixture<ManageCycleCountRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCycleCountRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCycleCountRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
