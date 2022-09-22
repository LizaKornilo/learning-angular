import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Crisis> {
    const id = Number(route.paramMap.get('id'));

    return this.cs.getCrisis(id).pipe(
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else { // id not found

          // this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
