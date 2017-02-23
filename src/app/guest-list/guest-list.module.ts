/**
 * Created by T897060 on 28/12/2016.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GuestListComponent} from "./components/guest-list";
import {CounterComponent} from "../core/counters/components/counter.component";
import {GuestListRoutingModule} from "./guest-list-routing.module";
import {PartyModule} from "../party/party.module";
import {GuestListService} from "./service/guest-list.service";


@NgModule({
  imports: [CommonModule, FormsModule, GuestListRoutingModule, PartyModule],
  declarations: [GuestListComponent, CounterComponent],
  exports: [GuestListComponent, CounterComponent],
  providers: [GuestListService]
})
export class GuestListModule {
}
