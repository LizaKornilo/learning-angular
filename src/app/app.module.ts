import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { HeroesModule } from './heroes/heroes.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AuthModule} from "./auth/auth.module";
import {NgxFormlyFormModule} from "./ngx-formly-form/ngx-formly-form.module";
import {ChangeDetectionModule} from "./change-detection/change-detection.module";
import {KanbanBoardModule} from "./kanban-board/kanban-board.module";
import {VirtualScrollerModule} from "./virtual-scroller/virtual-scroller.module";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HeroesModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgxFormlyFormModule,
    ChangeDetectionModule,
    KanbanBoardModule,
    VirtualScrollerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {}
