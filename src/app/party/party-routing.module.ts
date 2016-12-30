/**
 * Created by T897060 on 28/12/2016.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PartylistComponent} from "./component/partylist.component";
import {GuestListComponent} from "../guest-list/view/guest-list.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: 'parties', component: PartylistComponent},
    {path: 'party/:id', component: GuestListComponent}
  ])],
  exports: [RouterModule]
})
export class PartyRoutingModule {
}
