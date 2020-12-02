import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/components/main/dashboard/dashboard.component'
import { AddUserComponent } from '../app/components/user/add-user/add-user.component'

const routes: Routes = [  
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
