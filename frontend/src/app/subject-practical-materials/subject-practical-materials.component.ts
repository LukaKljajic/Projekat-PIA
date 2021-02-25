import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-practical-materials',
  templateUrl: './subject-practical-materials.component.html',
  styleUrls: ['./subject-practical-materials.component.css']
})
export class SubjectPracticalMaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subject = JSON.parse(localStorage.getItem('subject'))
  }

  subject: Subject

}
