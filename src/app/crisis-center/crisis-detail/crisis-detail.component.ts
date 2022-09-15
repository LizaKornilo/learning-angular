import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute } from '@angular/router';
import {CrisisService} from "../crisis.service";
import {Observable, Subscription, tap} from "rxjs";
import {DialogService} from "../../dialog.service";
import {IAppState} from "../../store/state/app.state";
import {select, Store} from "@ngrx/store";
import {selectCurrentCrisis} from "../../store/selectors/crisis.selector";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$ = this._store.pipe(select(selectCurrentCrisis))
  subscription?: Subscription = new Subscription();
  crisis!: Crisis | null;
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    private dialogService: DialogService,
    private _store: Store<IAppState>
  ) { }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis!.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  ngOnInit() {
    this.subscription!.add(
      this.crisis$.subscribe((crisis) => {
        this.crisis = crisis;
        this.editName = crisis!.name;
      })
    )
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }

  ngOnDestroy() {
     this.subscription?.unsubscribe()
  }
}
