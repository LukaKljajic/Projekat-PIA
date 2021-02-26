import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-modify-subjects',
  templateUrl: './modify-subjects.component.html',
  styleUrls: ['./modify-subjects.component.css']
})
export class ModifySubjectsComponent implements OnInit {

  constructor(private service: EmployeeService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe((employees: Employee[]) => {
      if (employees) {
        this.allTeachers = employees.filter((el) => {
          return el.title == 'редовни професор' || el.title == 'ванредни професор' || el.title == 'доцент' || el.title == 'асистент' || el.title == 'сарадник у настави'
        })
      }
    })
  }

  subject: Subject = new Subject
  allTeachers: Employee[]

  modify() {
    console.log(this.subject)
    this.subjectService.upsertSubject(this.subject).subscribe((resp) => {
      if (resp['poruka'] == 'ok') {
        alert('Предмет је или додат или промењен')
      }
    })
  }

  codeChanged() {
    this.subjectService.getSubjectByCode(this.subject.code).subscribe((subject: Subject) => {
      if(subject)
        this.subject = subject
    })
  }

}
