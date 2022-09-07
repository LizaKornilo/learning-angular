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
import {CrisesModule} from "./crisis-center/crises.module";
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AdminModule} from "./admin/admin.module";
import { LoginComponent } from './auth/login/login.component';
import {AuthRoutingModule} from "./auth/auth-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NotFoundComponent,
    ComposeMessageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HeroesModule,
    CrisesModule,
    AdminModule,
    AuthRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
