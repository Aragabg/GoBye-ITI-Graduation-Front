import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../../models/iregister';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  Register(user: IRegister) {
    return this.http.post(`${environment.Api}/ApplicationUsers/register`, user);
  }

  CheckIfUserNameExist(username: string) {
    return this.http.get(
      `${environment.Api}/ApplicationUsers/userName/${username}`
    );
  }

  CheckEmail(email: string) {
    return this.http.get(`${environment.Api}/ApplicationUsers/email/${email}`);
  }
}
