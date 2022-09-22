import { TestBed } from '@angular/core/testing';

import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import {ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap} from "@angular/router";
import {CRISES} from "./mock-crises";
import {Crisis} from "./crisis";
import {CrisisService} from "./crisis.service";
import {CrisesModule} from "./crises.module";

describe('CrisisDetailResolverService', () => {
  let service: CrisisDetailResolverService;
  let mockCrisis: Crisis;
  let cs: CrisisService;

  beforeEach(() => {
    mockCrisis = CRISES[0];
    TestBed.configureTestingModule({
      providers: [
        // CrisisService,
        // CrisesModule,
        // RouterTestingModule.withRoutes([
        //   { path: 'crisis-center', component: CrisisCenterHomeComponent}
        // ]),
        CrisisDetailResolverService,
        CrisisService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: { paramMap: convertToParamMap({id: mockCrisis.id})}}
        }
        ],
    });
    cs = jasmine.createSpyObj('CrisisService', ['getCrisis']);
    service = TestBed.inject(CrisisDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#resolve should return crisis observable', () => {
    service.resolve(new ActivatedRouteSnapshot()).subscribe(
      (res) => {
        expect(res)
          .toEqual(mockCrisis);
      }
    );
  });


});
