import { Component, OnInit, Input } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute } from '@angular/router';
import {CrisisService} from "../crisis.service";
import {Observable} from "rxjs";
import {Location} from "@angular/common";
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
    private service: CrisisService,
    private location: Location,
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
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    // this.location.back()
  }

  ngOnInit() {
    // const id: number = Number(this.route.snapshot.paramMap.get('id'));
    // this.service.getCrisis(id)
    //   .subscribe(crisis => this.crisis = crisis
    //   // .subscribe(crisis => crisis
    //   //   ? this.crisis = crisis
    //   //   : this.router.navigateByUrl('/404')
    //   );

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
