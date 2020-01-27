import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoGoodsReceiptComponent } from './po-goods-receipt.component';

describe('PoGoodsReceiptComponent', () => {
  let component: PoGoodsReceiptComponent;
  let fixture: ComponentFixture<PoGoodsReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoGoodsReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoGoodsReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
