import { TestBed } from '@angular/core/testing';

import { Http1Service } from './http1.service';

describe('Http1Service', () => {
  let service: Http1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Http1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
