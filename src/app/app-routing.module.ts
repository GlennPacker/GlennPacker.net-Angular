import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppRoutes} from "./appRoutes";

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
