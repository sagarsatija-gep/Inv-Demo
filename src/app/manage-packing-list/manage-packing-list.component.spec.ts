import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePackingListComponent } from './manage-packing-list.component';

describe('ManagePackingListComponent', () => {
  let component: ManagePackingListComponent;
  let fixture: ComponentFixture<ManagePackingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePackingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
