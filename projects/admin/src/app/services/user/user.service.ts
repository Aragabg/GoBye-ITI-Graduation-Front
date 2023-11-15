import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../models/ilogin';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  Login(login: ILogin) {
    return this.http.post(`${environment.Api}/ApplicationUsers/Login`, login);
  }



  GetAllUsers() {
    return this.http.get(`${environment.Api}/users`);
  }

  GetAllUserNames() {
    return this.http.get(`${environment.Api}/users/usernames`);
  }

  GetAllEmails() {
    return this.http.get(`${environment.Api}/users/emails`);
  }

  GetUser() {
    return this.http.get(`${environment.Api}/ApplicationUsers/getUser`);
  }
}
