import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {AppRoutingModule} from "./app-routing.module";
import {HomescreenComponent} from './homescreen/homescreen.component';
import {NavigationBarComponent} from './ui-items/navigation-bar/navigation-bar.component';

import {AboutComponent} from "./about/about.component";
import {PartyModule} from "./party/party.module";
import {GuestListModule} from "./guest-list/guest-list.module";


@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    NavigationBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    PartyModule,
    GuestListModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
