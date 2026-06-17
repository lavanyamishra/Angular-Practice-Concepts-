import { TestBed } from '@angular/core/testing';

import { ServicePractice } from './service-practice';

describe('ServicePractice', () => {
  let service: ServicePractice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePractice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
