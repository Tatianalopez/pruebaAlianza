import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Busqueda } from '../interfaces/busqueda.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlhost = 'http://localhost:8080/EmployeeApp'
  private urlClientes = this.urlhost + '/cliente';
  private urlClientesById = this.urlhost + '/cliente/clienteId';

  constructor(private http: HttpClient, public datepipe: DatePipe) { }


  getCliente(busqueda: Busqueda): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('pageSize', '4').set('pageNumber', busqueda.pagina.toString()).set('id', busqueda.search)
    };
    return this.http.get(this.urlClientes, httpOptions).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }


  getClienteyShared(busqueda: Busqueda): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('id', busqueda.search)
    };
    return this.http.get(this.urlClientesById, httpOptions).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
  
  postCliente(addClient: Cliente): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(this.urlClientes , addClient, httpOptions).pipe(
      catchError( e => {
        return throwError(e);
      })
    );
  }

}
