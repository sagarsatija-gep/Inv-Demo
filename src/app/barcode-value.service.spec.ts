import { TestBed, inject } from '@angular/core/testing';

import { BarcodeValueService } from './barcode-value.service';

describe('BarcodeValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeValueService]
    });
  });

  it('should be created', inject([BarcodeValueService], (service: BarcodeValueService) => {
    expect(service).toBeTruthy();
  }));
});
