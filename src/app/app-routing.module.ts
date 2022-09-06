import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./heroes/dashboard/dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeroResolverService} from "./heroes/hero-resolver.service";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    )
  ],
  exports: [RouterModule],
  providers: [HeroResolverService]
})
export class AppRoutingModule { }
