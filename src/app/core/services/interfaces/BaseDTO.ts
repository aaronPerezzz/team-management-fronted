export interface BaseDTO<T> {
    esCorrecto: boolean;
    mensaje: string;
    respuesta: T;
  }