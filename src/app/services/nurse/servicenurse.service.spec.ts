import { TestBed } from '@angular/core/testing';

import { ServicenurseService } from './servicenurse.service';

describe('ServicenurseService', () => {
  let service: ServicenurseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicenurseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
