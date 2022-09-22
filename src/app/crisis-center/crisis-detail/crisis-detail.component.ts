import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
import {DialogService} from "../../dialog.service";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
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
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data['crisis'];
        this.editName = crisis.name;
        this.crisis = crisis;
      });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}
