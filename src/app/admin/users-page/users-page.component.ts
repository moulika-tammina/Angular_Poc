import { AuthService } from './../../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

constructor(private AuthService:AuthService){

}
  logout(){
this.AuthService.logout();
}
}
