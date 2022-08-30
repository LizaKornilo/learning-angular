import { TestBed } from '@angular/core/testing';

import { HeroResolverService } from './hero-resolver.service';

describe('HeroResolverService', () => {
  let service: HeroResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
