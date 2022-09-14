import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import { TopHeroesComponent } from './top-heroes/top-heroes.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
    TopHeroesComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
