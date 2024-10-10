export interface AsignacionEditarDTO {
    Id: number;
    IdEquipo: number;
    CorreoAdministrador: string;
    esTemporal: boolean;
    FechaAsignacion: Date;
    FechaFinAsignacion: Date;
  }