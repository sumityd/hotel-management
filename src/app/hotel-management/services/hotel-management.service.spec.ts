import { TestBed } from '@angular/core/testing';

import { HotelManagementService } from './hotel-management.service';

describe('HotelManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelManagementService = TestBed.get(HotelManagementService);
    expect(service).toBeTruthy();
  });
});
