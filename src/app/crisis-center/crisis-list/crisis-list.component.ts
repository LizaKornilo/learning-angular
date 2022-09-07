import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[] = [];

  selectedId?: number
  crises$?: Observable<Crisis[]>

  constructor( private route: ActivatedRoute,
               private crisisService: CrisisService) { }

  ngOnInit(): void {
    // this.selectedId  = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    // this.getCrises();
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.crisisService.getCrises();
      })
    );
    this.crises$.subscribe(crises => this.crises = crises)
  }

  // getCrises(): void {
  //   this.crisisService.getCrises()
  //       .subscribe(crises => this.crises = crises);
  // }
}
