import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
form: FormGroup = this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required],

}); 
constructor(private AuthService: AuthService,private fb:FormBuilder,private router:Router){}
login(){
let user = this.AuthService.login(
  this.form.value.username , 
  this.form.value.password
  );
  if(!user){
    alert('Invalid Username or Password');
  }else{
    this.router.navigateByUrl('/admin');
  }

}
}
