import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-old-test',
  templateUrl: './subject-old-test.component.html',
  styleUrls: ['./subject-old-test.component.css']
})
export class SubjectOldTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
  }

  subject: Subject
}
