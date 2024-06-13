import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private taskService: TaskService) {}

  //es un metodo dentro que hace un llamado a taskservice y trae toda la lista de tareas
  getAllTasks(){
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  //este metodo solo trae una sola tarea
  getTask(){
    this.taskService.getTask('2')
    .subscribe(task => {
      console.log(task);
    })
  }

  //este metodo crea la tarea, no siempre es necesario colocar el id, el sistema por defecto coloca el id
  createTask(){
    const task = {
      //id: '12',
      userId: '1',
      title: 'cambiar titulo',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }

  /*en este metodo colocamos lo que actualizamos en que id lo queremos
  en el pash solo se coloca lo que se quiere actualiza, no toda la lsita*/
  updateTask(){
    const task = {
      id: '200',
      userId: '1',
      title: 'nuevo titulo cambiado',
      completed: true
    };
    this.taskService.updateTask(task)
    .subscribe(tasks => {
      console.log(tasks);
    });
  }
  //en este metodo eliminamos datos
  deleteTask() {
    this.taskService.deleteTask('1')
    .subscribe((task) =>{
      console.log(task);
    });
  }
}
