import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private http: HttpClient) {}

  GetAllBranchesByDestinationId() {
    return this.http.get(`${environment.Api}/Destinations/branches`);
  }
}
