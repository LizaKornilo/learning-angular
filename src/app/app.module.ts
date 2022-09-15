import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
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

import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";
import {CrisisEffects} from "./store/effects/crisis.effects";

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

    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(([CrisisEffects])),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    NgxFormlyFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {}
