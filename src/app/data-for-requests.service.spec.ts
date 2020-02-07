import { TestBed, inject } from '@angular/core/testing';

import { DataForRequestsService } from './data-for-requests.service';

describe('DataForRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataForRequestsService]
    });
  });

  it('should be created', inject([DataForRequestsService], (service: DataForRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
