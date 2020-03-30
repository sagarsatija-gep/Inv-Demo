import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMaterialRequestsComponent } from './manage-material-requests.component';

describe('ManageMaterialRequestsComponent', () => {
  let component: ManageMaterialRequestsComponent;
  let fixture: ComponentFixture<ManageMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
