import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Projects } from '../model/projects.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getAllProjects().subscribe((projects: Projects[]) => {
      this.projects = projects
      for (let i = 0; i < this.projects.length; i++){
        this.projects[i].employeeObjects = []
        for (let j = 0; j < this.projects[i].employees.length; j++){
          this.service.getEmployeeByUsername(this.projects[i].employees[j]).subscribe((employee: Employee) => {
            this.projects[i].employeeObjects[j] = employee
          })
        }
      }
    })
  }

  saveEmployee(employee: Employee) {
    localStorage.setItem('employee', JSON.stringify(employee))
  }

  projects: Projects[]
}
