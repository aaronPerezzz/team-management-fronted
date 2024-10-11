import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import {AdminComponent} from './features/admin/admin.component'
import {AsignacionesComponent } from './features/asignaciones/asignaciones.component';

const routes: Routes = [
  { path: 'profile', component: AdminComponent, canActivate: [MsalGuard] },
  { path: 'asignaciones', component: AsignacionesComponent, canActivate: [MsalGuard] },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }  // Redirige directamente a la ruta protegida
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
