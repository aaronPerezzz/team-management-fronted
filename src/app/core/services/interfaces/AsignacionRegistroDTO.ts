
export interface AsignacionRegistroDTO {
  id: number;
  nombreUsuario: string;
  tipoEquipo: string;
  marca: string;
  modelo: string;
  esTemporal: boolean;
  fechaAsignacion: Date;
  fechaFinAsignacion: Date;
}