import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private service: SubjectService) { }

  ngOnInit(): void {
    let department = localStorage.getItem('type')
    switch (department) {
      case 'RTI':
        this.fullDepartmentName = 'Рачунарска техника и информатика'
        break
      case 'SI':
        this.fullDepartmentName = 'Софтверско инжењерство'
        break
      case 'others':
        this.fullDepartmentName = 'Остали одсеци'
        break
      case 'master':
        this.fullDepartmentName = 'Мастер студије'
        break
    }
    this.service.getAllSubjectsForDepartment(department).subscribe((subjects: Subject[]) => {
      this.subjects = subjects
      this.subjects.sort((a, b) => {
        return a.semester - b.semester
      })
    })
  }

  subjects: Subject[]
  fullDepartmentName: string

  saveSubject(subject: Subject) {
    localStorage.setItem('subject', JSON.stringify(subject))
  }
}
