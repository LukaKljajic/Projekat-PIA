import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-one-employee',
  templateUrl: './one-employee.component.html',
  styleUrls: ['./one-employee.component.css']
})
export class OneEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.employee = JSON.parse(localStorage.getItem('employee'))
    this.service.getSubjectsForEmployee(this.employee.username).subscribe((subjects: Subject[]) => {
      this.employee.subjects = subjects
    })
    if (this.employee.active)
      this.status = 'активан'
    else
      this.status = 'неактиван'
  }

  employee: Employee

  saveSubject(subject: Subject) {
    localStorage.setItem('subject', JSON.stringify(subject))
  }

  status: string

}
