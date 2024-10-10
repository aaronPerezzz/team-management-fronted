import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseDTO } from '../interfaces/BaseDTO';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Repositorio {
  private apiUrl = 'https://localhost:7024/api'; 

  constructor(private http: HttpClient) {}

  // Método genérico para GET requests
  get<T>(url: string, params?: any): Observable<BaseDTO<T>> {
    const httpParams = new HttpParams({ fromObject: params });
    return this.http.get<BaseDTO<T>>(`${this.apiUrl}/${url}`, { params: httpParams });
  }

  // Método genérico para POST requests
  post<T>(url: string, body: any): Observable<BaseDTO<T>> {
    return this.http.post<BaseDTO<T>>(`${this.apiUrl}/${url}`, body);
  }

  // Método genérico para PUT requests
  put<T>(url: string, body: any): Observable<BaseDTO<T>> {
    return this.http.put<BaseDTO<T>>(`${this.apiUrl}/${url}`, body);
  }

  // Método genérico para DELETE requests
  delete<T>(url: string): Observable<BaseDTO<T>> {
    return this.http.delete<BaseDTO<T>>(`${this.apiUrl}/${url}`);
  }
}
