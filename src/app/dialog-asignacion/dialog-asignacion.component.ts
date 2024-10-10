import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Repositorio } from '../core/services/services/repositorio';
import { AsignacionCrearDTO } from '../core/services/interfaces/AsignacionCrearDTO';

@Component({
  selector: 'app-dialog-asignacion',
  templateUrl: './dialog-asignacion.component.html',
  styleUrl: './dialog-asignacion.component.css'
})

export class DialogAsignacionComponent implements OnInit {
  asignacionForm: FormGroup;
  equipos: any[] = [];
  usuarios: any[] = [];
  mostrarFechas: boolean = false;

  constructor(
    private fb: FormBuilder,
    private repositorio: Repositorio,
    public dialogRef: MatDialogRef<DialogAsignacionComponent>
  ) {
    this.asignacionForm = this.fb.group({
      IdEquipo: [null, Validators.required],
      CorreoUsuario: [null, Validators.required],
      CorreoAdministrador: ['admin@empresa.com', Validators.required], 
      esTemporal: [false],
      FechaAsignacion: [null],
      FechaFinAsignacion: [null]
    });
  }

  ngOnInit(): void {
    this.cargarEquipos();
    this.cargarUsuarios();

    this.asignacionForm.get('esTemporal')?.valueChanges.subscribe(val => {
      this.mostrarFechas = val;
      if (val) {
        this.asignacionForm.get('FechaAsignacion')?.setValidators(Validators.required);
        this.asignacionForm.get('FechaFinAsignacion')?.setValidators(Validators.required);
      } else {
        this.asignacionForm.get('FechaAsignacion')?.clearValidators();
        this.asignacionForm.get('FechaFinAsignacion')?.clearValidators();
      }
      this.asignacionForm.get('FechaAsignacion')?.updateValueAndValidity();
      this.asignacionForm.get('FechaFinAsignacion')?.updateValueAndValidity();
    });
  }

  cargarEquipos() {
   
  }

  cargarUsuarios() {
    
  }

  crearAsignacion() {
    if (this.asignacionForm.valid) {
      const asignacion: AsignacionCrearDTO = this.asignacionForm.value;
      
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
