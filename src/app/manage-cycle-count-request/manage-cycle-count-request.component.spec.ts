import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCycleCountRequestComponent } from './manage-cycle-count-request.component';

describe('ManageCycleCountRequestComponent', () => {
  let component: ManageCycleCountRequestComponent;
  let fixture: ComponentFixture<ManageCycleCountRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCycleCountRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCycleCountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
