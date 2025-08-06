import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";


const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

    selectedUser:any = signal(DUMMY_USERS[randomIndex] ) ;
    imagePath= computed(()=>'assets/users/'+this.selectedUser().avatar)
    //when changing that value ,angular can identify
  // all the places where that value is used and able to update these places
 // when not using signals , angular uses zones around your components
  // which is invisible grouping mechanism
    //get imagePath(){
    //  return 'assets/users/'+this.selectedUser.get().avatar
   // }
  onSelectUser(){
       this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]);
  }
}
