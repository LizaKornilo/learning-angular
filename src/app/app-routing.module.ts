import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeroResolverService} from "./hero-resolver.service";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent, resolve: { hero: HeroResolverService } },
  { path: 'heroes', component: HeroesComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroResolverService]
})
export class AppRoutingModule { }
