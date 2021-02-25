import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-labs',
  templateUrl: './subject-labs.component.html',
  styleUrls: ['./subject-labs.component.css']
})
export class SubjectLabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
  }

  subject: Subject
}
