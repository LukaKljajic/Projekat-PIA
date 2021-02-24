import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  uri: string = 'http://localhost:4000'

  getAllSubjectsForDepartment(department: string) {
    const data = {
      department: department
    }
    return this.http.post(`${this.uri}/getAllSubjectsForDepartment`, data)
  }

  getAllStudentProjects() {
    return this.http.get(`${this.uri}/getAllStudentProjects`)
  }

  getSubjectByCode(code: string) {
    const data = {
      code: code
    }
    return this.http.post(`${this.uri}/getSubjectByCode`, data)
  }
}
