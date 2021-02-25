import { Time } from "@angular/common"
import { Employee } from "./employee.model"

class News{
  title: string
  content: string
  date: Date
  files: Array<string>
}

class Period{
  day: number
  starttime: Time
  endtime: Time
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
  theoryTeacherObjects: Array<Employee>
  practicalTeacherObjects: Array<Employee>
  haveLabs: boolean
  propositions: string
  theoryMaterials: Array<string>
  practicalMaterials: Array<string>
  oldTests: Array<string>
  labs: Labs
  project: Project
  oldTestsEnabled: boolean
  labsEnabled: boolean
  projectEnabled: boolean
  students: Array<string>
}