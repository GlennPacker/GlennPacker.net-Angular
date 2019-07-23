import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.Component";

export const AppRoutes: Routes = [
  // {
  //   path: 'clients',
  //   component: ClientComponent,
  // },{
  //   path: 'spa',
  //   component: SpaComponent,
  // },{
  //   path: 'front-end',
  //   component: FrontEndComponent,
  // },{
  //   path: 'back-end',
  //   component: FrontEndComponent,
  // },{
  //   path: 'front-end',
  //   component: ContactComponent,
  // },
  // {
  //   path: '404',
  //   component: Error404Component
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
