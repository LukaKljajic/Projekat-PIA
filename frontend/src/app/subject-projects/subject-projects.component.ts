import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-projects',
  templateUrl: './subject-projects.component.html',
  styleUrls: ['./subject-projects.component.css']
})
export class SubjectProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
  }

  subject: Subject

}
