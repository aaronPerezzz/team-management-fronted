import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import {AdminComponent} from './features/admin/admin/admin.component';
import {UserListComponent} from './features/admin/user-list/user-list.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [MsalGuard] },
  { path: 'user-lits',component: UserListComponent,canActivate: [MsalGuard]},
  { path: '', redirectTo: '/admin', pathMatch: 'full' }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
