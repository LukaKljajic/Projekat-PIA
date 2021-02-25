import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-theory-materials',
  templateUrl: './subject-theory-materials.component.html',
  styleUrls: ['./subject-theory-materials.component.css']
})
export class SubjectTheoryMaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
  }

  subject: Subject

}
