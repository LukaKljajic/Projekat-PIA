import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-subject-information',
  templateUrl: './subject-information.component.html',
  styleUrls: ['./subject-information.component.css']
})
export class SubjectInformationComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
    this.subject.theoryTeacherObjects = []
    this.subject.practicalTeacherObjects = []
    for (let i = 0; i < this.subject.theoryTeachers.length; i++){
      this.service.getEmployeeByUsername(this.subject.theoryTeachers[i]).subscribe((teacher: Employee) => {
        this.subject.theoryTeacherObjects[i]=teacher
      })
    }
    for (let i = 0; i < this.subject.practicalTeachers.length; i++){
      this.service.getEmployeeByUsername(this.subject.practicalTeachers[i]).subscribe((teacher: Employee) => {
        this.subject.practicalTeacherObjects[i]=teacher
      })
    }
  }

  subject: Subject

  departmentNames = {
    'RTI': 'Рачунарска техника и информатика',
    'SI': 'Софтверско инжењерство',
    'others': 'Остали одсеци',
    'master': 'Мастер студије'
  }

  dayNames = [
    'Недеља', 'Понедељак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота'
  ]

  goToEmployee(teacher: Employee) {
    localStorage.setItem('employee', JSON.stringify(teacher))
    this.router.navigate(['employee'])
  }

  doLabsExist(labs: boolean) {
    if (labs) return 'Да'
    else return 'Не'
  }
}
