import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { News, Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-subject-news-update',
  templateUrl: './employee-subject-news-update.component.html',
  styleUrls: ['./employee-subject-news-update.component.css']
})
export class EmployeeSubjectNewsUpdateComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.user.subjects = []
    this.service.getSubjectsForEmployee(this.user.username).subscribe((subjects: Subject[]) => {
      this.user.subjects = subjects
      this.subject = this.user.subjects[0]
      this.subjectCode = this.subject.code
      this.news = this.subject.news[0]
      this.newsTitle = this.news.title
    })
  }

  user: Employee
  subjectCode: string
  subject: Subject
  newsTitle: string
  news: News

  changed() {
    this.subject = this.user.subjects.find(el => el.code == this.subjectCode)
    this.news = this.subject.news[0]
    this.newsTitle = this.news.title
    console.log(this.subject)
  }

  changedNews() {
    this.news = this.subject.news.find(el => el.title == this.newsTitle)
    console.log(this.news)
  }

  fileToUpload: File = null

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0)
  }

  uploadNews() {
    this.service.changeNews(this.subject.code, this.news.title, this.news.content, this.fileToUpload).subscribe((resp) => {
      if (resp['poruka']==='ok') {
        localStorage.setItem('user', JSON.stringify(this.user))
        this.fileToUpload = null
        alert('Успешно сте променили вест')
      }
    });
  }

  deleteNews() {
    this.subject.news = this.subject.news.filter(el => el != this.news)
    this.service.setNews(this.subject.code, this.subject.news).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        localStorage.setItem('user', JSON.stringify(this.user))
        alert('Успешно сте обрисали вест')
      }
    })
  }
}
