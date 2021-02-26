import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-subjects',
  templateUrl: './employee-subjects.component.html',
  styleUrls: ['./employee-subjects.component.css']
})
export class EmployeeSubjectsComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.user.subjects = []
    this.service.getSubjectsForEmployee(this.user.username).subscribe((subjects: Subject[]) => {
      this.user.subjects = subjects
      for (let j = 0; j < this.user.subjects.length; j++){
        for (let i = 0; i < this.user.subjects[j].theoryMaterials.length; i++){
          this.service.getEmployeeByUsername(this.user.subjects[j].theoryMaterials[i].author).subscribe((employee: Employee) => {
            this.user.subjects[j].theoryMaterials[i].authorObject = employee 
            localStorage.setItem('user', JSON.stringify(this.user))
          })
        }
        for (let i = 0; i < this.user.subjects[j].practicalMaterials.length; i++){
          this.service.getEmployeeByUsername(this.user.subjects[j].practicalMaterials[i].author).subscribe((employee: Employee) => {
            this.user.subjects[j].practicalMaterials[i].authorObject = employee 
            localStorage.setItem('user', JSON.stringify(this.user))
          })
        }
        for (let i = 0; i < this.user.subjects[j].oldTests.length; i++){
          this.service.getEmployeeByUsername(this.user.subjects[j].oldTests[i].author).subscribe((employee: Employee) => {
            this.user.subjects[j].oldTests[i].authorObject = employee 
            localStorage.setItem('user', JSON.stringify(this.user))
          })
        }
        if (this.user.subjects[j].haveLabs) {
          for (let i = 0; i < this.user.subjects[j].labs.materials.length; i++){
            this.service.getEmployeeByUsername(this.user.subjects[j].labs.materials[i].author).subscribe((employee: Employee) => {
              this.user.subjects[j].labs.materials[i].authorObject = employee 
              localStorage.setItem('user', JSON.stringify(this.user))
            })
          }
        }
        for (let i = 0; i < this.user.subjects[j].project.materials.length; i++){
          this.service.getEmployeeByUsername(this.user.subjects[j].project.materials[i].author).subscribe((employee: Employee) => {
            this.user.subjects[j].project.materials[i].authorObject = employee 
            localStorage.setItem('user', JSON.stringify(this.user))
          })
        }
      }
    })
  }
      
  user:Employee
}
