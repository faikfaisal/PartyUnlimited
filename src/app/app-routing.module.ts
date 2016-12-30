/**
 * Created by T897060 on 03/12/2016.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule}             from '@angular/core';
import {HomescreenComponent} from "./homescreen/homescreen.component";
import {AboutComponent} from "./about/about.component";

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: HomescreenComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
