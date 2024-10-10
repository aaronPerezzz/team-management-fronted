export interface AsignacionCrearDTO {
  IdEquipo: number;
  CorreoUsuario: string;
  CorreoAdministrador: string;
  esTemporal: boolean;
  FechaAsignacion: Date;
  FechaFinAsignacion: Date;
}