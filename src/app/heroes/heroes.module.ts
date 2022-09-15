import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeroesRoutingModule } from './heroes-routing.module';

import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { HeroAddFormReactiveComponent } from './hero-add-form-reactive/hero-add-form-reactive.component';
import {MatCardModule} from "@angular/material/card";
import { TopHeroesComponent } from './top-heroes/top-heroes.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
    HeroAddFormReactiveComponent,
    TopHeroesComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // material:
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class HeroesModule { }
