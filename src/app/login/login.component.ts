import { Component } from '@angular/core';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  username: string = "";
  password: string = "";

  authenticateUser(){
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);

    this.authService.loginIn(this.username, this.password);
  }

}
