import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../model/subject.model';

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

  upsertSubject(subject: Subject) {
    const data = {
      code: subject.code,
      name: subject.name,
      department: subject.department,
      semester: subject.semester,
      theoryTeachers: subject.theoryTeachers,
      practicalTeachers: subject.practicalTeachers,
      haveLabs: subject.haveLabs
    }
    return this.http.post(`${this.uri}/upsertSubject`, data)
  }

  getAllSubjects() {
    return this.http.get(`${this.uri}/getAllSubjects`)
  }

  getAllStudents() {
    return this.http.get(`${this.uri}/getAllStudents`)
  }

  savePeriod(code, periods, numOfClasses, type) {
    const data = {
      code: code,
      periods: periods,
      numOfClasses: numOfClasses,
      type: type
    }
    return this.http.post(`${this.uri}/savePeriod`, data)
  }

  setStudents(code, students) {
    const data = {
      code: code,
      students: students
    }
    return this.http.post(`${this.uri}/setStudents`, data)
  }
}
