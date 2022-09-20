import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-name-form',
  templateUrl: './add-name-form.component.html',
  styleUrls: ['./add-name-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNameFormComponent {
  @Output('onAdd')
  onAddEmitter = new EventEmitter();

  inputValue: string = '';

  onAdd() {
    this.onAddEmitter.emit(this.inputValue);
    this.inputValue = '';
  }
}
