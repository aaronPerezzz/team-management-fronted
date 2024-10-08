import { Component } from '@angular/core';
import { ToastService } from '../core/services/toast.service';
import { ToastType } from '../utils/enums/toastType';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  empleados = [
    { nombre: 'Juan Pérez', equipo: 'laptop', serie: 'ABC123' },
    { nombre: 'María López', equipo: 'monitor', serie: 'XYZ456' },
    { nombre: 'Carlos García', equipo: 'keyboard', serie: 'DEF789' },
    { nombre: 'Laura Martínez', equipo: 'mouse', serie: 'LMN012' }
  ];

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
        return 'device_unknown';  // Icono predeterminado si no coincide con ninguno
    }
  }
  constructor(private toastService: ToastService) { }

  showSuccessToast() {
    this.toastService.message('Éxito', 'La operación fue exitosa.', ToastType.SUCCESS);
  }

}
