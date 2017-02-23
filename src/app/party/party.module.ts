import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PartylistComponent} from "./containers/partylist-card";

import {PartyService} from "./service/party.service";
import {PartyRoutingModule} from "./party-routing.module";
import {SearchCardComponent} from "../core/search-card/search-card.component";

import {PartyDetailComponent} from "./containers/party-detail-view";

@NgModule({
  imports: [CommonModule, FormsModule, PartyRoutingModule],
  declarations: [PartylistComponent, SearchCardComponent, PartyDetailComponent],
  exports: [PartylistComponent, SearchCardComponent, PartyDetailComponent],
  providers: [PartyService]
})
export class PartyModule {
}

