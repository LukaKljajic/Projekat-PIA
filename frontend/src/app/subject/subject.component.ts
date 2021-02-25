import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
  }

  subject: Subject
}
