import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ToastService } from '../../../core/services/toast.service';
import { ToastType } from '../../../utils/enums/toastType';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, AfterViewInit {
  // Data source para la tabla de empleados
  dataSource: MatTableDataSource<any>;

  // Columnas de la tabla
  displayedColumns: string[] = ['nombre', 'equipo', 'serie', 'acciones'];  // Agregar 'acciones'

  // Datos de empleados
  empleados = [
    { nombre: 'Juan Pérez', equipo: 'laptop', serie: 'ABC123' },
    { nombre: 'María López', equipo: 'monitor', serie: 'XYZ456' },
    { nombre: 'Carlos García', equipo: 'keyboard', serie: 'DEF789' },
    { nombre: 'Laura Martínez', equipo: 'mouse', serie: 'LMN012' },
    { nombre: 'Pedro Sánchez', equipo: 'laptop', serie: 'GHI345' },
    { nombre: 'Ana Gómez', equipo: 'monitor', serie: 'JKL678' },
    { nombre: 'Ricardo Díaz', equipo: 'keyboard', serie: 'MNO901' },
    { nombre: 'Sofia Fernández', equipo: 'mouse', serie: 'PQR234' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private toastService: ToastService) {
    // Inicializa el dataSource con los empleados
    this.dataSource = new MatTableDataSource(this.empleados);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Conecta el paginator al dataSource
    this.dataSource.paginator = this.paginator;
  }

  // Maneja el evento de paginación
  pageEvent(event: PageEvent): void {
    console.log('Paginación:', event);
  }

  // Retorna el ícono correspondiente al equipo
  getEquipoIcon(equipo: string): string {
    switch (equipo) {
      case 'laptop': return 'laptop';
      case 'monitor': return 'tv';
      case 'keyboard': return 'keyboard';
      case 'mouse': return 'mouse';
      default: return 'device_unknown';
    }
  }

  // Función para eliminar un empleado
  eliminarEmpleado(empleado: any): void {
    const index = this.empleados.indexOf(empleado);
    if (index !== -1) {
      this.empleados.splice(index, 1);  
      this.dataSource.data = [...this.empleados]; 
      this.toastService.message('Empleado eliminado', 'El empleado fue eliminado correctamente.', ToastType.SUCCESS);
    }
  }

  // Función para actualizar
  actualizarEmpleado(empleado: any): void {
    console.log('Actualizar empleado:', empleado);
   //lógica para  formulario para actualizar los datos
    this.toastService.message('Empleado actualizado', 'Actualiza la información del empleado aquí.', ToastType.INFO);
  }

  // Toast de éxito
  showSuccessToast(): void {
    this.toastService.message('Éxito', 'La operación fue exitosa.', ToastType.SUCCESS);
  }
}
