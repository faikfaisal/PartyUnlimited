/**
 * Created by T897060 on 03/12/2016.
 */
import {RouterModule, Routes} from '@angular/router';
import {PartylistComponent} from "./party/component/partylist.component";
import {PartyDetailComponent} from "./party/component/party-detail-view.component";
import {GuestListComponent} from "./guest-list/guest-list.component";
import {NgModule}             from '@angular/core';
import {HomescreenComponent} from "./homescreen/homescreen.component";
import {AboutComponent} from "./about/about.component";

const appRoutes: Routes = [
  {path: 'parties', component: PartylistComponent},
  {path: 'party/:id', component: GuestListComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomescreenComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
