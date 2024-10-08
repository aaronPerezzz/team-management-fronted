import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile = true;
  isSidenavOpen = false;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
        // Cierra el sidenav en pantallas pequeñas (mobile)
        this.sidenav.close();
      } else {
        this.isMobile = false;
        // Asegúrate de que el sidenav esté abierto en pantallas grandes (desktop)
        this.sidenav.open();
      }
    });
  }

  ngAfterViewInit() {
    // Si el sidenav se abre por defecto al iniciar, lo actualizamos en la vista
    if (this.isMobile) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    if (this.isSidenavOpen) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }
}
