import { Component, OnInit } from '@angular/core';
import { StudentProjects } from '../model/studentProjects.model';
import { Subject } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.component.html',
  styleUrls: ['./student-projects.component.css']
})
export class StudentProjectsComponent implements OnInit {

  constructor(private service: SubjectService) { }

  ngOnInit(): void {
    this.service.getAllStudentProjects().subscribe((studentProjects: StudentProjects[]) => {
      this.studentProjects = studentProjects
      for (let i = 0; i < this.studentProjects.length; i++){
        this.service.getSubjectByCode(this.studentProjects[i].subjectCode).subscribe((subject: Subject) => {
          this.studentProjects[i].subjectName = subject.name
        })
      }
    })
  }

  studentProjects: StudentProjects[]

}
