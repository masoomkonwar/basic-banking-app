import { TestBed } from '@angular/core/testing';

import { FatchServService } from './fatch-serv.service';

describe('FatchServService', () => {
  let service: FatchServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatchServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
