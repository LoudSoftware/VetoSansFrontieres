import { TestBed, inject } from '@angular/core/testing';

import { SmartTableService } from './smart-table.service';

describe('SmartTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartTableService],
    });
  });

  it('should be created', inject([SmartTableService], (service: SmartTableService) => {
    expect(service).toBeTruthy();
  }));
});
