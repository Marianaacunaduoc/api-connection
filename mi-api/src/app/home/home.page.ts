import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;

  constructor(private taskService: TaskService) {}

  //es un metodo dentro que hace un llamado a taskservice y trae toda la lista de datos
  getAllData(){
    this.taskService.getAllData()
    .subscribe(response => {
      console.log(response)
    });
  }

  //este metodo solo trae un solo  dato
  getData(){
    this.taskService.getData('2')
    .subscribe(response => {
      console.log(response);
    })
  }

  //este metodo crea la tarea, no siempre es necesario colocar el id, el sistema por defecto coloca el id
  createData(){
    const data = {
      //id: '12',
      userId: '1',
      title: 'cambiar titulo',
      completed: true
    };
    this.taskService.createData(data)
    .subscribe((newData) => {
      console.log(newData);
    });
  }

   //en este metodo colocamos lo que actualizamos en que id lo queremos
   // en el pash solo se coloca lo que se quiere actualiza, no toda la lsita
  updateData(){
    const data = {
      id: '200',
      userId: '1',
      title: 'nuevo titulo cambiado',
      completed: true
    };
    this.taskService.updateData(data)
    .subscribe(data => {
      console.log(data);
    });
  }
  //en este metodo eliminamos datos
  deleteData() {
    this.taskService.deleteData('2')
    .subscribe((data) =>{
      console.log('dato eliminado', data);
    });
  }
}
