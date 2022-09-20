import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameListComponent {
  @Input() names?: string[]
}
