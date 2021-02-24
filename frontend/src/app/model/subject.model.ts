import { Time } from "@angular/common"

class News{
  title: string
  content: string
  date: Date
  files: Array<string>
}

class Period{
  day: number
  starttime: Time
  duration: Time
}

class Labs{
  how: string
  howMany: number
  what: string
  materials: Array<string>
}

class Project{
  how: string
  materials: Array<string>
}

export class Subject{
  name: string
  department: string
  news: Array<News>
  semester: number
  type: string
  code: string
  goal: string
  numOfClasses: number
  ESPB: number
  theoryPeriods: Array<Period>
  practicalPeriods: Array<Period>
  theoryTeachers: Array<string>
  practicalTeachers: Array<string>
  haveLabs: boolean
  propositions: string
  theoryMaterials: Array<string>
  practicalMaterials: Array<string>
  oldTests: Array<string>
  labs: Labs
  project: Project
  students: Array<string>
}