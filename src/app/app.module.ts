import {NgModule} from '@angular/core';
import { InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { HeroesModule } from './heroes/heroes.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AuthModule} from "./auth/auth.module";
import {NgxFormlyFormModule} from "./ngx-formly-form/ngx-formly-form.module";
import {HeroService} from "./heroes/hero.service";
import {MessageService} from "./message.service";
import {EmptyService} from "./heroes/empty.service";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

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
  ],
  providers: [
    { provide: API_BASE_URL, useValue: 'api' },
    { provide: HeroService,
      useFactory: function (api_base_url: string, httpClient: HttpClient, messageService: MessageService) {
      if(true)
        return new HeroService(api_base_url, httpClient, messageService)
      return new EmptyService();
      },
      deps: [API_BASE_URL, HttpClient, MessageService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule  {}
