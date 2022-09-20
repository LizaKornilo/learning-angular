import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./heroes/dashboard/dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeroResolverService} from "./heroes/hero-resolver.service";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {AuthGuard} from "./auth/auth.guard";
import {SelectivePreloadingStrategyService} from "./selective-preloading-strategy.service";
import {ChangeDetectionComponent} from "./change-detection/change-detection/change-detection.component";
import {NgxFormlyFormComponent} from "./ngx-formly-form/ngx-formly-form.component";
import {KanbanBoardComponent} from "./kanban-board/kanban-board/kanban-board.component";

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard]},
  { path: 'crisis-center', loadChildren: () => import('./crisis-center/crises.module').then(m => m.CrisesModule), data: { preload: true } },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'formly-form', component: NgxFormlyFormComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'kanban-board', component: KanbanBoardComponent },
  // { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule],
  providers: [HeroResolverService]
})
export class AppRoutingModule { }
