import { TestBed } from '@angular/core/testing';

import { ShowInfoService } from './show-info.service';

describe('ShowInfoService', () => {
  let service: ShowInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
