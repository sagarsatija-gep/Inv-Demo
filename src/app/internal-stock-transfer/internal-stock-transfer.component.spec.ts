import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalStockTransferComponent } from './internal-stock-transfer.component';

describe('InternalStockTransferComponent', () => {
  let component: InternalStockTransferComponent;
  let fixture: ComponentFixture<InternalStockTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalStockTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalStockTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
