import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-subjects-about',
  templateUrl: './employee-subjects-about.component.html',
  styleUrls: ['./employee-subjects-about.component.css']
})
export class EmployeeSubjectsAboutComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.service.getSubjectsForEmployee(this.user.username).subscribe((subjects: Subject[]) => {
      this.user.subjects = subjects
      this.subjectCode = this.user.subjects[0].code
      this.index = 0
    })
  }

  user: Employee
  subjectCode: string
  index: number

  changed() {
    this.index = this.user.subjects.findIndex(el => el.code == this.subjectCode)
  }

  change() {
    if (this.user.subjects[this.index].ESPB <= 0 || this.user.subjects[this.index].ESPB > 30) {
      alert('Предмет мора да носи између 1 и 30 поена')
      return
    }
    this.service.changeSubject(this.user.subjects[this.index].code, this.user.subjects[this.index].type, this.user.subjects[this.index].ESPB, this.user.subjects[this.index].propositions, this.user.subjects[this.index].goal).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        alert("Успешно промењени подаци")
        localStorage.setItem('user', JSON.stringify(this.user))
      }
    })
  }
}
