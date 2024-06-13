import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Task} from './../interfaces/task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /*
  qui puedo tener una variale privada para no estar llamado
  siempre el dominio de la ruta ejemplo: 
  private api = 'https://jsonplaceholder.typicode.com', 
  con esto podemos pasar a los metodos de esta manera: 
  const path = `${this.api}/todos/${id}`
  */

  constructor(private http: HttpClient) { }

  //aqui obtenemos todas las tareas, no retorna una lista de tareas
  getAllTasks(){
    const path = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Task[]>(path);
  }

  //aqui solo queremos obtener una tarea, que recibe por parametro el id y ya no retorna una lista, si no un objeto
  getTask(id: string){
    const path = 'https://jsonplaceholder.typicode.com/todos/' + id;
    return this.http.get<Task>(path);
  }

  //este va a recibir un objeto 
  createTask(task: Task){
    const path = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.post(path, task);
  }

  //toma un objeto y lo actualiza segun el id
  updateTask(task: Task){
    const path = 'https://jsonplaceholder.typicode.com/todos/' + task.id;
    return this.http.put<Task>(path, task);
  }

  //toma un objeto y lo elimina
  deleteTask(id: string){
    const path = 'https://jsonplaceholder.typicode.com/todos/' + id;
    return this.http.delete(path);
  }
}
