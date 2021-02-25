import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-news',
  templateUrl: './subject-news.component.html',
  styleUrls: ['./subject-news.component.css']
})
export class SubjectNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
    this.subject.news.sort((a, b) => {
      let adate = new Date(a.date)
      let bdate = new Date(b.date)
      return bdate.getTime() - adate.getTime()
    })
  }

  subject: Subject

  isNew(date: Date): boolean {
    let today = new Date()
    let _date = new Date(date)
    return (today.getTime() - _date.getTime()) < 7*24*60*60*1000
  }
}
