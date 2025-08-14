import {Component, Input,output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

/*
type User = {
  id:string;
  avatar:string;
  name:string;
};
*/

interface User {
  id:string;
  name:string;
  avatar:string;
}

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  @Input() user?:({id:string,name:string,avatar:string});


  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed( ()=> 'assets/users/'+this.selectedUser().avatar )

  // when adding ! ==> this indicate that this property is not null
  @Input() avatar! :string;
  @Input() name! :string;
  @Input() id! :string;

 // @Output() selectedUser = new EventEmitter ();
  selectedUser= output<string>();

  /*avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(()=>{
    return 'assets/users/'+this.avatar();
  });*/

  get imagePath(){
    return 'assets/users/'+this.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit( this.id);
   }

}

