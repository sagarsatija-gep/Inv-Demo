import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCycleCountDetailsComponent } from './manage-cycle-count-details.component';

describe('ManageCycleCountDetailsComponent', () => {
  let component: ManageCycleCountDetailsComponent;
  let fixture: ComponentFixture<ManageCycleCountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCycleCountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCycleCountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
