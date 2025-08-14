import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;

  selectedUserId:string= 'u2';
  get selectedUser(){
      return this.users.find((user) => user.id===this.selectedUserId)! //enforce static typing
    //know which type of value goes where
    //remove exclamation , ts correctly shows that find might not find a user ==> can return undefined
    //will cause a problem
    // simply will crash the application and run to runtime error
  }
  onSelectUser(id:any){
    console.log(id)
  }
}
