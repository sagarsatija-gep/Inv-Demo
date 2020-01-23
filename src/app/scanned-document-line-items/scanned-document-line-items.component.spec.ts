import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannedDocumentLineItemsComponent } from './scanned-document-line-items.component';

describe('ScannedDocumentLineItemsComponent', () => {
  let component: ScannedDocumentLineItemsComponent;
  let fixture: ComponentFixture<ScannedDocumentLineItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannedDocumentLineItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannedDocumentLineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
