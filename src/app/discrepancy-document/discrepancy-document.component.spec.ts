import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepancyDocumentComponent } from './discrepancy-document.component';

describe('DiscrepancyDocumentComponent', () => {
  let component: DiscrepancyDocumentComponent;
  let fixture: ComponentFixture<DiscrepancyDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscrepancyDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscrepancyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
