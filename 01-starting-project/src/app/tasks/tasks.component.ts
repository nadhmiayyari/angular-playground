import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
 export class TasksComponent {

  @Input() id? : string ;
  @Input() name  : string |undefined ;

  tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'master angular ',
      summary:'Learn Angular and all the features',
      dueDate:'2025-12-30'
    },
    {
      id:'t2',
      userId:'u2',
      title:'build prototype',
      summary:'build a first prototype of the online webshop',
      dueDate:'2024-05-31'
    },
    {
      id:'t2',
      userId:'u3',
      title:'build prototype user 3 ',
      summary:'build a first prototype of the online webshop',
      dueDate:'2024-05-31'
    }

  ];

  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId===this.id);
  }
}
