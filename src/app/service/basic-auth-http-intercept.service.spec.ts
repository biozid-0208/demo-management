import { TestBed, inject } from '@angular/core/testing';

import { BasicAuthHttpInterceptService } from './basic-auth-http-intercept.service';

describe('BasicAuthHttpInterceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicAuthHttpInterceptService]
    });
  });

  it('should be created', inject([BasicAuthHttpInterceptService], (service: BasicAuthHttpInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
