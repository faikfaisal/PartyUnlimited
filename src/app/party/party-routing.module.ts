/**
 * Created by T897060 on 28/12/2016.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PartylistComponent} from "./component/partylist.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: 'parties', component: PartylistComponent}
  ])],
  exports: [RouterModule]
})
export class PartyRoutingModule {
}
