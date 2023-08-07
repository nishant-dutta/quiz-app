import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from 'src/auth/jwt.service';
import { User } from 'src/auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private messageService: MessageService, private jwtService: JwtService, private router: Router){
    // this.user = new User();
  }

  // user: User;
  username: string = "";
  password: string = "";

  authenticateUser(){
    this.authService.loginIn(this.username, this.password).subscribe(
      (response: any) => {
        // Emitting new user
        let loggedInUser = new User();
        loggedInUser.initializeValuesFromAuthResponse(response);
        this.authService.userSubject.next(loggedInUser);

        // Saving the user to session storage
        sessionStorage.setItem("userData", JSON.stringify(loggedInUser));



        this.router.navigateByUrl("/view-questions");
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Welcome back ' + "!" });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error_description });
      }
    );

    this.setUiFieldsToDefault();
  }

  setUiFieldsToDefault(){
    this.password = "";
    this.username = "";
  }

}
