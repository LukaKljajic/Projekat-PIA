import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { News } from '../model/subject.model';

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

  changeSubject(code, type, ESPB, propositions, goal) {
    const data = {
      code: code,
      type: type,
      ESPB: ESPB,
      propositions: propositions,
      goal: goal
    }
    return this.http.post(`${this.uri}/changeSubject`, data)
  }

  setFiles(code, files, nameOfArray) {
    const data = {
      code: code,
      files: files,
      nameOfArray: nameOfArray
    }
    return this.http.post(`${this.uri}/setFiles`, data)
  }

  postNews(username: string, code: string, title: string, content: string, fileToUpload: File) {
    const formData: FormData = new FormData();
    if(fileToUpload)
      formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('code', code)
    formData.append('title', title)
    formData.append('content', content)
    formData.append('username', username)
    return this.http.post(`${this.uri}/postNews`, formData)
  }

  changeNews(code: string, title: string, content: string, fileToUpload: File) {
    const formData: FormData = new FormData();
    if(fileToUpload)
      formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('code', code)
    formData.append('title', title)
    formData.append('content', content)
    return this.http.post(`${this.uri}/changeNews`, formData)
  }

  postFile(fileToUpload: File, author: string, code: string, name: string) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('author', author)
    formData.append('code', code)
    formData.append('name', name)
    return this.http.post(`${this.uri}/postFile`, formData)
  }

  deleteFile(fileToDelete: string) {
    console.log(fileToDelete)
    const data = {fileToDelete: fileToDelete}
    return this.http.post(`${this.uri}/deleteFile`, data)
  }

  enable(what: string, code: string, value: boolean) {
    const data = {
      what: what,
      code: code,
      value: value
    }
    return this.http.post(`${this.uri}/enable`, data)
  }

  changeLabs(code, how, howMany, what) {
    const data = {
      code: code,
      how: how,
      howMany: howMany,
      what: what
    }
    return this.http.post(`${this.uri}/changeLabs`, data)
  }

  changeProject(code, how) {
    const data = {
      code: code,
      how: how
    }
    return this.http.post(`${this.uri}/changeProject`, data)
  }

  setNews(code: string, news: News[]) {
    const data = {
      code: code,
      news: news
    }
    return this.http.post(`${this.uri}/setNews`, data)
  }
}
