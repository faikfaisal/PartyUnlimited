import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PartylistComponent} from './party/component/partylist.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PartyDetailComponent} from './party/component/party-detail-view.component';
import {GuestListComponent} from './guest-list/guest-list.component';

import {CounterComponent} from './ui-items/counter/counter.component';
import {AppRoutingModule} from "./app-routing.module";
import {SearchCardComponent} from './ui-items/search-card/search-card.component';
import {HomescreenComponent} from './homescreen/homescreen.component';
import {NavigationBarComponent} from './ui-items/navigation-bar/navigation-bar.component';
import {PartySearchService} from "./ui-items/search-card/party-search.service";
import {PartyService} from "./party/service/party.service";
import {AboutComponent} from "./about/about.component";


@NgModule({
  declarations: [
    AppComponent,
    PartylistComponent,
    PartyDetailComponent,
    GuestListComponent,
    CounterComponent,
    SearchCardComponent,
    HomescreenComponent,
    NavigationBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule],
  providers: [PartySearchService, PartyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
