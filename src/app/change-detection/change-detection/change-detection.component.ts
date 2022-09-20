import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
  names: string[] = [];

  add(name: string): void {
    if (name) {
      // this.names.push(name);               // don't work with onPush
      this.names = [...this.names, name];     // work with onPush
    }
  }
}
