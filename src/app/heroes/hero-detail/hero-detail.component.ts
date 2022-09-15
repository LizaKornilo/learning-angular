import {Component, OnInit} from '@angular/core';
import {IHero} from "../IHero";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';
import { Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {selectCurrentHero} from "../../store/selectors/hero.selector";
import {GetCurrentHero} from "../../store/actions/hero.action";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$?: Observable<IHero | null> = this._store.pipe(select(selectCurrentHero))
  subscription?: Subscription;
  hero?: IHero | null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private _store: Store<IAppState>,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.subscription = new Subscription()
    this.subscription.add(
      this.route.paramMap.subscribe((params: ParamMap) => this._store.dispatch(new GetCurrentHero(Number(params.get('id')))))
    );
    this.subscription.add(
      this.hero$?.subscribe(hero => this.hero = hero)
    );
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
