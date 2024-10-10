import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MsalService } from '@azure/msal-angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile = false;   // Bandera para saber si el dispositivo es móvil
  isSidenavOpen = false;  // Controla el estado del sidenav

  constructor(
    private observer: BreakpointObserver, 
    private msalService: MsalService,
    private router: Router
  ) {}

  ngOnInit() {
    // Detecta el tamaño de la pantalla y ajusta el sidenav
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
      this.isMobile ? this.sidenav.close() : this.sidenav.open();  // Cierra o abre el sidenav según el tamaño de pantalla
    });

    // Cierra el sidenav cuando navegas entre rutas
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobile || this.sidenav.opened) {
        this.sidenav.close();  // Cierra el sidenav en móviles o si está abierto en escritorio
      }
    });
  }

  ngAfterViewInit() {
    // Asegura que el sidenav esté cerrado en móviles al inicio
    if (this.isMobile) {
      this.sidenav.close();
    }
  }

  toggleSidenav() {
    // Alterna entre abrir y cerrar el sidenav
    this.isSidenavOpen = !this.isSidenavOpen;
    this.isSidenavOpen ? this.sidenav.open() : this.sidenav.close();
  }

  logout() {
    // Cierra sesión y redirige al login
    this.msalService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200'
    });
  }
}
