import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannedDocumentViewComponent } from './scanned-document-view.component';

describe('ScannedDocumentViewComponent', () => {
  let component: ScannedDocumentViewComponent;
  let fixture: ComponentFixture<ScannedDocumentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannedDocumentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannedDocumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
