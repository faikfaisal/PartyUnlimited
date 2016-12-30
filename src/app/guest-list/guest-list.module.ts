/**
 * Created by T897060 on 28/12/2016.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GuestListComponent} from "./view/guest-list.component";
import {CounterComponent} from "../ui-items/counter/counter.component";
import {GuestListRoutingModule} from "./guest-list-routing.module";
import {PartyModule} from "../party/party.module";


@NgModule({
  imports: [CommonModule, FormsModule, GuestListRoutingModule, PartyModule],
  declarations: [GuestListComponent, CounterComponent],
  exports: [GuestListComponent, CounterComponent]
})
export class GuestListModule {
}
