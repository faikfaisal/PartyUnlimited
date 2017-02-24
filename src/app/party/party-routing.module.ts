/**
 * Created by T897060 on 28/12/2016.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PartylistComponent} from "./containers/partylist-card";


@NgModule({
  imports: [RouterModule.forChild([
    {path: 'homescreenState', component: PartylistComponent}
  ])],
  exports: [RouterModule]
})
export class PartyRoutingModule {
}
