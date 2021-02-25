import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './model/admin.model';
import { Employee } from './model/employee.model';
import { Student } from './model/student.model';
import { LoginRegisterService } from './services/login-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  static app: AppComponent

  constructor(private router: Router, private service: LoginRegisterService) { }

  ngOnInit(): void {
    AppComponent.app = this
    this.logged = localStorage.getItem('user') != null
  }

  title = 'app';

  saveType(type: string) {
    localStorage.setItem('type', type)
    if (this.router.url === '/subjects')
      location.reload()
  }

  username: string
  password: string
  userType: string = ''
  logged: boolean

  login(): void {
    this.service.login(this.username, this.password).subscribe((resp) => {
      console.log(resp)
      this.userType = resp['userType']
      if (this.userType != '') {   
        if (this.userType == 'admin') {
          let admin: Admin = resp['user']
          localStorage.setItem('user', JSON.stringify(admin))
          alert("Улоговали сте се на систем као админ")
        }
        else if (this.userType == 'employee') {
          let employee: Employee = resp['user']
          localStorage.setItem('user', JSON.stringify(employee))
          alert("Улоговали сте се на систем као запослени")
          if (!employee.passwordChanged)
            this.router.navigate(['passwordChange'])
        }
        else if (this.userType == 'student') {
          let student: Student = resp['user']
          localStorage.setItem('user', JSON.stringify(student))
          alert("Улоговали сте се на систем као студент")
          if (!student.passwordChanged)
            this.router.navigate(['passwordChange'])
        }
        this.logged = true
      }
      else {
        alert('Лоши подаци')
      }
    })
  }

  logout(): void {
    this.userType = ''
    localStorage.removeItem('user')
    this.logged = false
    this.username = ''
    this.password = ''
    if (this.router.url.startsWith('/subject') && !this.router.url.startsWith('/subjects'))
      this.router.navigate(['mainPage'])
  }
}
