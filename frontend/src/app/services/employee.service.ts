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

  getSubjectsForEmployee(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/getSubjectsForEmployee`, data)
  }

  getAllProjects() {
    return this.http.get(`${this.uri}/getAllProjects`)
  }

  getEmployeeByUsername(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/getEmployeeByUsername`, data)
  }
}
