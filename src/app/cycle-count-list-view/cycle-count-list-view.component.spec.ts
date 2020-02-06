import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleCountListViewComponent } from './cycle-count-list-view.component';

describe('CycleCountListViewComponent', () => {
  let component: CycleCountListViewComponent;
  let fixture: ComponentFixture<CycleCountListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleCountListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleCountListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
