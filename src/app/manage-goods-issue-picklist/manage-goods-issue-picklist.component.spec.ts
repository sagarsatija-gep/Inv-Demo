import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGoodsIssuePicklistComponent } from './manage-goods-issue-picklist.component';

describe('ManageGoodsIssuePicklistComponent', () => {
  let component: ManageGoodsIssuePicklistComponent;
  let fixture: ComponentFixture<ManageGoodsIssuePicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGoodsIssuePicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGoodsIssuePicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
