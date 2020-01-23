import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingSlipDetailComponent } from './packing-slip-detail.component';

describe('PackingSlipDetailComponent', () => {
  let component: PackingSlipDetailComponent;
  let fixture: ComponentFixture<PackingSlipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingSlipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingSlipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
