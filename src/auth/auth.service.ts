import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private messageService: MessageService) {
    // Auto-Login from storage
    this.autoLogin();

    // Auto-Logout when token expires
    this.autoLogout();
  }

  userSubject = new BehaviorSubject<User | null>(null);
  private autoLogoutTimer!: ReturnType<typeof setTimeout> | undefined;


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

  private autoLogin() {
    let user = sessionStorage.getItem("userData");
    if (user != null) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  private autoLogout() {
    let logoutIn: number;
    this.userSubject.subscribe((userData) => {
      if (userData != null) {
        logoutIn = userData.expiresOn - Date.now();
        this.autoLogoutTimer = setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Session Expired!', detail: 'Logging out' });
          this.logout();
        }, logoutIn);
      }

    });
  }

  logout() {
    this.userSubject.next(null);

    sessionStorage.removeItem("userData");

    clearTimeout(this.autoLogoutTimer);
  }
}
