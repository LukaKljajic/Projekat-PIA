import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(private service: LoginRegisterService, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  username: string = ''
  name: string = ''
  surname: string = ''
  password: string = ''
  address: string = ''
  phone: string = ''
  website: string = ''
  biography: string = ''
  title: string = 'редовни професор'
  cabinetNumber: string = ''

  register() {
    if (this.username.length == 0 || this.name.length == 0 || this.surname.length == 0 || this.address.length == 0 || this.cabinetNumber.length == 0) {
      alert("Неко обавезно поље није попуњено")
      return
    }
    if (this.password.length < 8) {
      alert("Лозинка мора да садржи бар 8 карактера")
      return
    }

    this.service.upsertEmployee(this.username, this.name, this.surname, this.password, this.address, this.phone, this.website, this.biography, this.title, this.cabinetNumber).subscribe((resp) => {
      if (resp['poruka'] == 'ok') {
        alert("Успешно сте додали или променили корисника")
      }
    })
  }

  delete() {
    this.service.deleteEmployee(this.username).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        alert('Успешно избисан запослени')
        this.username = ''
        this.name = ''
        this.surname = ''
        this.password = ''
        this.address = ''
        this.phone = ''
        this.website = ''
        this.biography = ''
        this.title = 'редовни професор'
        this.cabinetNumber = ''
      }
    })
  }

  usernameChanged() {
    this.employeeService.getEmployeeByUsername(this.username).subscribe((employee: Employee) => {
      if (employee) {
        this.name = employee.name
        this.surname = employee.surname
        this.password = employee.password
        this.address = employee.address
        this.phone = employee.phone
        this.website = employee.website
        this.biography = employee.biography
        this.title = employee.title
        this.cabinetNumber = employee.cabinetNumber
      }
      else {
        this.name = ''
        this.surname = ''
        this.password = ''
        this.address = ''
        this.phone = ''
        this.website = ''
        this.biography = ''
        this.title = 'редовни професор'
        this.cabinetNumber = ''
      }
    })
  }
}
