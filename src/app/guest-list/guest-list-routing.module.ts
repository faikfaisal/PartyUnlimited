/**
 * Created by T897060 on 28/12/2016.
 */


import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GuestListComponent} from "./components/guest-list";
import {AuthGuard} from "../auth-guard.service";


const guestListRoutes: Routes = [
  {
    path: 'party/:id',
    component: GuestListComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(guestListRoutes)],
  exports: [RouterModule]
})
export class GuestListRoutingModule {
}
