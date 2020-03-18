import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDiscrepancyComponent } from './material-discrepancy.component';

describe('MaterialDiscrepancyComponent', () => {
  let component: MaterialDiscrepancyComponent;
  let fixture: ComponentFixture<MaterialDiscrepancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDiscrepancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDiscrepancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
