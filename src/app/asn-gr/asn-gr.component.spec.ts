import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnGrComponent } from './asn-gr.component';

describe('AsnGrComponent', () => {
  let component: AsnGrComponent;
  let fixture: ComponentFixture<AsnGrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnGrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
