import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  uri: string = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get(`${this.uri}/getAllEmployees`)
  }
}
