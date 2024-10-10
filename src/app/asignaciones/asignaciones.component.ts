import { Component, OnInit } from '@angular/core';
import { AsignacionRegistroDTO } from '../core/services/interfaces/AsignacionRegistroDTO';
import { BaseDTO } from '../core/services/interfaces/BaseDTO';
import { Repositorio } from '../core/services/services/repositorio';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css']
})
//**ESTO ES UNA PRUEBA**
export class AsignacionesComponent implements OnInit {
  asignaciones: AsignacionRegistroDTO[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  // Paginación
  pag = { Pagina: 1, CantidadRegistros: 10 };

  constructor(private repositorio: Repositorio) {}

  ngOnInit(): void {
    this.getAllAssignments();
  }

  getAllAssignments(): void {
    this.loading = true;
    this.repositorio.get<AsignacionRegistroDTO[]>('asignaciones', this.pag).subscribe({
      next: (response: BaseDTO<AsignacionRegistroDTO[]>) => {
        console.log('API Response:', response); 
        if (response.esCorrecto) {
          this.asignaciones = response.respuesta;
        } else {
          this.errorMessage = response.mensaje;
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al obtener asignaciones';
        console.error(error);
        this.loading = false;
      }
    });
  }

  // Método para cambiar de página (para paginación)
  changePage(newPage: number): void {
    this.pag.Pagina = newPage;
    this.getAllAssignments();
  }
}
