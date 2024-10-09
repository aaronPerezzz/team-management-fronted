import { ToastService } from '../core/services/toast.service';
import { ToastType } from '../utils/enums/toastType';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent  {
  empleados = [
    { nombre: 'Juan Pérez', equipo: 'laptop', serie: 'ABC123' },
    { nombre: 'María López', equipo: 'monitor', serie: 'XYZ456' },
    { nombre: 'Carlos García', equipo: 'keyboard', serie: 'DEF789' },
    { nombre: 'Laura Martínez', equipo: 'mouse', serie: 'LMN012' }
  ];

  constructor(
    private toastService: ToastService,
    private msalService: MsalService,
    private router: Router
  ) {}

  getEquipoIcon(equipo: string): string {
    switch (equipo) {
      case 'laptop':
        return 'laptop';
      case 'monitor':
        return 'tv';
      case 'keyboard':
        return 'keyboard';
      case 'mouse':
        return 'mouse';
      default:
        return 'device_unknown'; // Icono predeterminado si no coincide con ninguno
    }
  }



  // Método para mostrar un toast de éxito
  showSuccessToast() {
    this.toastService.message('Éxito', 'La operación fue exitosa.', ToastType.SUCCESS);
  }
}
