import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees
      for (let i = 0; i < this.employees.length; i++){
        this.service.getSubjectsForEmployee(this.employees[i].username).subscribe((subjects: Subject[]) => {
          this.employees[i].subjects = subjects
        })
      }
    })
  }

  saveEmployee(employee: Employee) {
    localStorage.setItem('employee', JSON.stringify(employee))
  }

  saveSubject(subject: Subject) {
    localStorage.setItem('subject', JSON.stringify(subject))
  }

  employees: Employee[]

}
