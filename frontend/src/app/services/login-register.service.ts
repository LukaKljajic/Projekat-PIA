import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { Transliterator } from '../util/transliterator';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  uri: string = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  registerStudent(index: string, name: string, surname: string, password: string, type: string) {    
    let index_copy = index
    index_copy = index_copy.substring(2)
    let username = Transliterator.transliterate(surname.charAt(0).toLocaleLowerCase()) + Transliterator.transliterate(name.charAt(0).toLocaleLowerCase()) + index_copy.replace('/', '') + type

    const data = {
      username: username,
      password: password,
      index: index,
      type: type,
      name: name,
      surname: surname,
      active: true,
      passwordChanged: false
    }

    return this.http.post(`${this.uri}/insertStudent`, data)
  }

  upsertStudent(index: string, name: string, surname: string, password: string, type: string) {    
    let index_copy = index
    index_copy = index_copy.substring(2)
    let username = Transliterator.transliterate(surname.charAt(0).toLocaleLowerCase()) + Transliterator.transliterate(name.charAt(0).toLocaleLowerCase()) + index_copy.replace('/', '') + type

    const data = {
      username: username,
      password: password,
      index: index,
      type: type,
      name: name,
      surname: surname
    }

    return this.http.post(`${this.uri}/upsertStudent`, data)
  }

  getStudentByIndex(index) {
    const data = {
      index: index
    }
    return this.http.post(`${this.uri}/getStudentByIndex`, data)
  }

  upsertEmployee(username, name, surname, password, address, phone, website, biography, title, cabinetNumber) {
    const data = {
      username: username,
      name: name,
      surname: surname,
      password: password,
      address: address,
      phone: phone,
      website: website,
      biography: biography,
      title: title,
      cabinetNumber: cabinetNumber
    }
    return this.http.post(`${this.uri}/upsertEmployee`, data)
  }

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`, data)
  }

  changePassword(username: string, newPassword: string) {
    const data = {
      username: username,
      newPassword: newPassword
    }
    return this.http.post(`${this.uri}/changePassword`, data)
  }

  changeProfile(username, address, phone, biography, cabinetNumber) {
    const data = {
      username: username,
      address: address,
      phone: phone,
      biography: biography,
      cabinetNumber: cabinetNumber
    }
    console.log(data)
    return this.http.post(`${this.uri}/changeProfile`, data)
  }

  deleteStudent(index) {
    const data = {
      index: index
    }
    return this.http.post(`${this.uri}/deleteStudent`, data)
  }

  deleteEmployee(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/deleteEmployee`, data)
  }
}
