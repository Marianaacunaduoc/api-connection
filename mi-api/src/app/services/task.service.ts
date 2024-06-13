import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Data} from '../interfaces/data'
import { Observable, retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' :'*' 
    })
  }

  private apiUrl = 'http://localhost:3000/todos/';

  constructor(private http: HttpClient) { }

  //aqui obtenemos todas los datos, no retorna una lista de datos
  getAllData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //aqui solo queremos obtener un dato, que recibe por parametro el id y ya no retorna una lista, si no un objeto
  getData(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  //este va a recibir un objeto 
  createData(data: Data): Observable <any> {
    const path = (this.apiUrl);
    return this.http.post(path, data);
  }

  //toma un objeto y lo actualiza segun el id
  updateData(data: Data): Observable <any> {
    const path = (this.apiUrl + data.id);
    return this.http.put<Data>(path, data);
  }

  //toma un objeto y lo elimina
  deleteData(id: string): Observable <any> {
    const path = `${this.apiUrl}${id}`;
    return this.http.delete(path);
  }
}
