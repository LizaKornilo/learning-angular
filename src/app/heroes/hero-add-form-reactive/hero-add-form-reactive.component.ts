
import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../IHero";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {AddHero} from "../../store/actions/hero.action";

@Component({
  selector: 'app-hero-add-form-reactive',
  templateUrl: './hero-add-form-reactive.component.html',
  styleUrls: ['./hero-add-form-reactive.component.css']
})
export class HeroAddFormReactiveComponent implements OnInit {
  @Input() heroes?: IHero[];
  powers: string[] = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  heroAddForm = new FormGroup({
     heroName: new FormControl('', Validators.required),
     heroPower: new FormControl(''),
  })

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
  }

  log(): void {
    console.log('formGroup info: ', this.heroAddForm)
  }

  add(): void {
    const name = this.heroAddForm.value.heroName?.trim();
    const power = this.heroAddForm.value.heroPower?.trim();
    if (!name) { return; }
    this._store.dispatch(new AddHero({ name, power} as IHero))
  }

  reset(): void {
    this.heroAddForm.reset();
  }

  submit(): void {
    this.add();
    this.reset();
  }
}
