import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from 'src/auth/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private messageService: MessageService, private jwtService: JwtService, private router: Router){}

  username: string = "";
  password: string = "";

  authenticateUser(){
    this.authService.loginIn(this.username, this.password).subscribe(
      (response: any) => {
        this.authService.decodedResponse = this.jwtService.DecodeToken(response.access_token);
        this.router.navigateByUrl("/");
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Welcome back ' + this.authService.decodedResponse.given_name + "!" });
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
