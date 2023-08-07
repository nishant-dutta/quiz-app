import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  decodedAuthResponse: any = null;

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
}
