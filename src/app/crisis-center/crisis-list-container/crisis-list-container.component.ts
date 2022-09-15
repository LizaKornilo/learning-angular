import { Component, OnInit } from '@angular/core';
import {Crisis} from "../crisis";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectCrisisList} from "../../store/selectors/crisis.selector";
import {ActivatedRoute} from "@angular/router";
import {CrisisService} from "../crisis.service";
import {IAppState} from "../../store/state/app.state";
import {GetCrises} from "../../store/actions/crisis.action";

@Component({
  selector: 'app-crisis-list-container',
  templateUrl: './crisis-list-container.component.html',
  styleUrls: ['./crisis-list-container.component.css']
})
export class CrisisListContainerComponent implements OnInit {
  crises$?: Observable<Crisis[] | any> = this._store.pipe(select(selectCrisisList))
  selectedId?: number

  constructor(private route: ActivatedRoute,
              private crisisService: CrisisService,
              private _store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this._store.dispatch(new GetCrises())
    this.route.paramMap.subscribe(e => this.selectedId = parseInt(e.get('id')!, 10));
  }
}
