import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-change-student',
  templateUrl: './change-student.component.html',
  styleUrls: ['./change-student.component.css']
})
export class ChangeStudentComponent implements OnInit {

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

    this.service.upsertStudent(this.index, this.name, this.surname, this.password, this.type).subscribe((resp) => {
      if (resp['poruka'] == 'ok') {
        alert("Успешно додавање или мењање студента")
      }
    })
  }

  delete() {
    this.service.deleteStudent(this.index).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        alert('Успешно избрисан студент')
        this.index = ''
        this.name = ''
        this.surname = ''
        this.password = ''
        this.type = 'd'
      }
    })
  }

  indexChanged() {
    this.service.getStudentByIndex(this.index).subscribe((student: Student) => {
      if (student) {
        this.name = student.name
        this.surname = student.surname
        this.password = student.password
        this.type = student.type
      }
      else {
        this.name = ''
        this.surname = ''
        this.password = ''
        this.type = 'd'
      }
    })
  }

}
