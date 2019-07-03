import { TestBed } from '@angular/core/testing';

import { RandomizrService } from './randomizr.service';

describe('RandomizrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomizrService = TestBed.get(RandomizrService);
    expect(service).toBeTruthy();
  });
});
