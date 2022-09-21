import { TestBed } from '@angular/core/testing';

import { HeroResolverService } from './hero-resolver.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeroResolverService', () => {
  let service: HeroResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeroResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
