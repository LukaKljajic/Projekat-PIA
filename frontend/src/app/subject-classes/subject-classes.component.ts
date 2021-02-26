import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Period, Subject } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-classes',
  templateUrl: './subject-classes.component.html',
  styleUrls: ['./subject-classes.component.css']
})
export class SubjectClassesComponent implements OnInit {

  constructor(private service:SubjectService) { }

  ngOnInit(): void {
    this.service.getAllSubjects().subscribe((subjects: Subject[]) => {
      this.allSubjects = subjects
      this.selectedSubject = this.allSubjects[0]
      this.selectedSubjectCode = this.selectedSubject.code
    })
  }

  allSubjects: Subject[]
  selectedSubject: Subject = new Subject
  selectedSubjectCode: string

  changedSubject() {
    this.selectedSubject = this.allSubjects.find(el => el.code == this.selectedSubjectCode)
  }

  days: string[] = ['Недеља', 'Понедељак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота']

  day: number = 1
  start: Time
  end: Time
  type: number = 0

  dodaj() {
    let period: Period = new Period
    period.day = this.day
    period.starttime = this.start
    period.endtime = this.end
    if (this.selectedSubject.numOfClasses == undefined)
      this.selectedSubject.numOfClasses = 0
    this.selectedSubject.numOfClasses++
    if (this.selectedSubject.theoryPeriods == undefined)
      this.selectedSubject.theoryPeriods = new Array<Period>()
    if (this.selectedSubject.practicalPeriods == undefined)
      this.selectedSubject.practicalPeriods = new Array<Period>()
    if (this.type == 0) {
      this.selectedSubject.theoryPeriods.push(period)
      this.service.savePeriod(this.selectedSubject.code, this.selectedSubject.theoryPeriods, this.selectedSubject.numOfClasses, 'theory').subscribe((resp) => {
        if (resp['poruka'] = 'ok') {
          alert('Успешно додат термин')
        }
      })
    }
    else if (this.type == 1) {
      this.selectedSubject.practicalPeriods.push(period)
      this.service.savePeriod(this.selectedSubject.code, this.selectedSubject.practicalPeriods, this.selectedSubject.numOfClasses, 'practical').subscribe((resp) => {
        if (resp['poruka'] = 'ok') {
          alert('Успешно додат термин')
        }
      })
    }
  }

}
