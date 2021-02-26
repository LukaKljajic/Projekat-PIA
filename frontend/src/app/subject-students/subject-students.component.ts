import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { Subject } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-students',
  templateUrl: './subject-students.component.html',
  styleUrls: ['./subject-students.component.css']
})
export class SubjectStudentsComponent implements OnInit {

  constructor(private service:SubjectService) { }

  ngOnInit(): void {
    this.service.getAllSubjects().subscribe((subjects: Subject[]) => {
      this.allSubjects = subjects
      this.selectedSubject = this.allSubjects[0]
      this.selectedSubjectCode = this.selectedSubject.code
    })
    this.service.getAllStudents().subscribe((students: Student[]) => {
      this.allStudents = students
    })
  }

  allSubjects: Subject[]
  allStudents: Student[]
  selectedSubject: Subject = new Subject
  selectedSubjectCode: string

  changedSubject() {
    this.selectedSubject = this.allSubjects.find(el => el.code == this.selectedSubjectCode)
  }

  dodaj() {
    this.service.setStudents(this.selectedSubject.code, this.selectedSubject.students).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        alert('Успешно су промењени студенти')
      }
    })
  }

}
