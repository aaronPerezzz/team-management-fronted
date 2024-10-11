import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';  
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './features/admin/admin.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule , HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MsalModule, MsalService, MsalGuard, MsalBroadcastService, MsalInterceptor, MsalInterceptorConfiguration, MsalGuardConfiguration, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType, IPublicClientApplication } from '@azure/msal-browser';
import { AsignacionesComponent } from './features/asignaciones/asignaciones.component';
import { DialogAsignacionComponent } from './features/dialog-asignacion/dialog-asignacion.component';





const isIE = window.navigator.userAgent.includes('MSIE') || window.navigator.userAgent.includes('Trident/');

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    
      auth: {
        clientId: 'b9f2a066-b306-417b-b549-4f51ef597177',
        authority: 'https://login.microsoftonline.com/102d3653-c8a4-4711-a5a3-7dc0ab963878',
        redirectUri: 'http://localhost:4200'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE
      }
    
  })}
    

  export function MSALGuardConfigFactory(): MsalGuardConfiguration {
    return { interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['user.read']
      }}}

      export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
       return{ interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.read']]
        ])}}



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    AsignacionesComponent,
    DialogAsignacionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule ,
    ToastrModule.forRoot(),
    MatListModule,
    BrowserModule,
    MatTabsModule,  
    MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatButtonModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync(),
    CookieService,
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



