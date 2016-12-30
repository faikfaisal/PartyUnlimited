/**
 * Created by T897060 on 28/12/2016.
 */


import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {GuestListComponent} from "./view/guest-list.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: 'party/:id', component: GuestListComponent}
  ])],
  exports: [RouterModule]
})
export class GuestListRoutingModule {
}
