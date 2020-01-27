import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrGrCreationComponent } from './ocr-gr-creation.component';

describe('OcrGrCreationComponent', () => {
  let component: OcrGrCreationComponent;
  let fixture: ComponentFixture<OcrGrCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrGrCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrGrCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
