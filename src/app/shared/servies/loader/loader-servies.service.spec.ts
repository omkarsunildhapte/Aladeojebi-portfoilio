import { TestBed } from '@angular/core/testing';

import { LoaderServiesService } from './loader-servies.service';

describe('LoaderServiesService', () => {
  let service: LoaderServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
