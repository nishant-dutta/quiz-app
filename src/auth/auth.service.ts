import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    // Auto-Login from storage
    this.autoLogin();
  }

  userSubject = new BehaviorSubject<User|null>(null);

  private authUrl: string = "http://localhost:5000/realms/QuizMasterRealm/protocol/openid-connect/token";

  private loginPayload = new URLSearchParams({
    "grant_type": "password",
    "client_id": "quizmasterreactclient",
    "client_secret": "VpzarGx9RRCFZQDwHrSBGcGTsomeX2gW",
    "scope": "profile",
  })

  loginheaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  loginOptions = { headers: this.loginheaders };


  loginIn(username: string, password: string) {
    this.loginPayload.set("username", username);
    this.loginPayload.set("password", password);

    return this.http.post(this.authUrl, this.loginPayload, this.loginOptions);
  }

  private autoLogin(){
    let user = sessionStorage.getItem("userData");
    if(user != null){
      this.userSubject.next(JSON.parse(user));
    }
  }

  logout(){
    this.userSubject.next(null);

    sessionStorage.removeItem("userData");
  }
}
