import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { MyFile, News, Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-subject-news',
  templateUrl: './employee-subject-news.component.html',
  styleUrls: ['./employee-subject-news.component.css']
})
export class EmployeeSubjectNewsComponent implements OnInit {

  constructor(private service: EmployeeService){}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.user.subjects = []
    this.service.getSubjectsForEmployee(this.user.username).subscribe((subjects: Subject[]) => {
      this.user.subjects = subjects
      this.subject = this.user.subjects[0]
      this.subjectCode = this.subject.code
    })
  }

  user: Employee
  subjectCode: string
  subject: Subject

  changed() {
    this.subject = this.user.subjects.find(el => el.code == this.subjectCode)
  }

  fileToUpload: File = null
  title: string = ''
  content: string = ''

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0)
  }

  uploadNews() {
    this.service.postNews(this.user.username, this.subject.code, this.title, this.content, this.fileToUpload).subscribe((news: News) => {
      if (news) {
        this.subject.news.push(news)
        localStorage.setItem('user', JSON.stringify(this.user))
        this.title = ''
        this.content = ''
        this.fileToUpload = null
        alert('Успешно сте додали вест')
      }
    });
  }

}
