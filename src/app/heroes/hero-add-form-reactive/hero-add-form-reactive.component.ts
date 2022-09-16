
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IHero} from "../IHero";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-add-form-reactive',
  templateUrl: './hero-add-form-reactive.component.html',
  styleUrls: ['./hero-add-form-reactive.component.css']
})
export class HeroAddFormReactiveComponent implements OnInit {
  @Output('onAdd')
  onAddEmitter = new EventEmitter();

  powers: string[] = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  heroAddForm = new FormGroup({
     heroName: new FormControl('', Validators.required),
     heroPower: new FormControl(''),
  })

  constructor() {}

  ngOnInit(): void {
  }

  log(): void {
    console.log('formGroup info: ', this.heroAddForm)
  }

  add(): void {
    const name = this.heroAddForm.value.heroName?.trim();
    const power = this.heroAddForm.value.heroPower?.trim();
    if (!name) { return; }
    this.onAddEmitter.emit({ name, power} as IHero);
  }

  reset(): void {
    this.heroAddForm.reset();
  }

  submit(): void {
    this.add();
    this.reset();
  }
}
