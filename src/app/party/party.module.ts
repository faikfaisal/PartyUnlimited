import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PartylistComponent} from "./component/partylist.component";
import {PartySearchService} from "../ui-items/search-card/party-search.service";
import {PartyService} from "./service/party.service";
import {PartyRoutingModule} from "./party-routing.module";
import {SearchCardComponent} from "../ui-items/search-card/search-card.component";

import {PartyDetailComponent} from "./component/party-detail-view.component";
/**
 * Created by T897060 on 28/12/2016.
 */

@NgModule({
  imports: [CommonModule, FormsModule, PartyRoutingModule],
  declarations: [PartylistComponent, SearchCardComponent, PartyDetailComponent],
  exports: [PartylistComponent, SearchCardComponent, PartyDetailComponent],
  providers: [PartySearchService, PartyService]
})
export class PartyModule {
}

