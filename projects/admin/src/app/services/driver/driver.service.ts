import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DriverService {
  constructor(private http: HttpClient) {}

  GetAllDrivers() {
    return this.http.get(`${environment.Api}/drivers`);
  }

}
