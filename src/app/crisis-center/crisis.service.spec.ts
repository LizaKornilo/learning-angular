import { TestBed } from '@angular/core/testing';

import {CrisisService} from "./crisis.service";
import {CRISES} from "./mock-crises";

describe('CrisisService', () => {
  let service: CrisisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrisisService],
    });
    service = TestBed.inject(CrisisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCrises should return all crises', () => {
    const expectedCrises = CRISES;
    service.getCrises().subscribe(
      (crises) => {
        expect(crises).toEqual(expectedCrises);
      }
    );
  });

  it('#getCrisis should return crisis by id', () => {
    const testCrisis = CRISES[0];
    service.getCrisis(testCrisis.id).subscribe(
      (crisis) => {
        expect(crisis).toEqual(testCrisis);
      }
    );
  });
});
