import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./heroes/dashboard/dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeroResolverService} from "./heroes/hero-resolver.service";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard]},
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
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
