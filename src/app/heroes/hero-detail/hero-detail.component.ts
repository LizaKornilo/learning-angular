import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IHero} from "../IHero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: IHero | null;

  @Output('onSave')
  onSaveEmitter = new EventEmitter();

  @Output('goBack')
  goBackEmitter = new EventEmitter();

  save(hero: IHero): void {
    this.onSaveEmitter.emit(hero);
  }

  goBack(): void {
    this.goBackEmitter.emit();
  }
}
