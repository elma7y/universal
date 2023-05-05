import { TestBed } from '@angular/core/testing';

import { DivsService } from './divs.service';

describe('DivsService', () => {
  let service: DivsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
