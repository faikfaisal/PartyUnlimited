import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomescreenComponent} from "./homescreen/container/homescreen";
import {NavigationBarComponent} from "./core/navigation-bar/navigation-bar.component";
import {AboutComponent} from "./about/about.component";
import {PartyModule} from "./party/party.module";
import {GuestListModule} from "./guest-list/guest-list.module";
import {AuthGuard} from "./auth-guard.service";
import {LoginModule} from "./login/login.module";
import {StoreModule} from "@ngrx/store";

import {EffectsModule} from '@ngrx/effects';
import {PartyEffects} from "./party/effects/party";
import {reducer} from "./app.reducers";
import {GuestListEffects} from "./guest-list/effects/guest-list";


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
    GuestListModule,
    LoginModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(PartyEffects),
    EffectsModule.run(GuestListEffects)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
