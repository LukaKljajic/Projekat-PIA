import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(private service: LoginRegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  index: string = ''
  name: string = ''
  surname: string = ''
  password: string = ''
  type: string = 'd'

  register() {
    let indexRegex = /^\d{4}\/\d{4}$/
    if (!indexRegex.test(this.index)) {
      alert("Индекс није унет у добром формату")
      return
    }
    if (this.name.length == 0) {
      alert("Име је обавезно поље")
      return
    }
    if (this.surname.length == 0) {
      alert("Презиме је обавезно поље")
      return
    }
    if (this.password.length < 8) {
      alert("Лозинка мора да садржи бар 8 карактера")
      return
    }

    this.service.registerStudent(this.index, this.name, this.surname, this.password, this.type).subscribe((resp) => {
      if (resp['poruka'] == 'OK') {
        alert("Успешно регистровање")
        this.router.navigate(['mainPage'])
      }
      else if(resp['poruka'] == 'Error'){
        alert("Дошло је до неочекиване грешке")
      }
      else if (resp['poruka'] == 'Index exists') {
        alert("Индекс који је унет већ постоји у систему")
      }
    })
  }
}
