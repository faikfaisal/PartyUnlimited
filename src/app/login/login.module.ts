import {NgModule} from "@angular/core";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../auth-guard.service";
import {AuthService} from "../auth.service";

@NgModule({
  imports: [CommonModule, FormsModule, LoginRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService
  ]

})
export class LoginModule {
}
