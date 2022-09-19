import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-name-form',
  templateUrl: './add-name-form.component.html',
  styleUrls: ['./add-name-form.component.css'],
})
export class AddNameFormComponent implements OnInit {
  inputValue: string = '';

  @Output('onAdd')
  onAddEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.onAddEmitter.emit(this.inputValue);
    this.inputValue = '';
  }
}
