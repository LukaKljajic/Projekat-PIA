import { Time } from "@angular/common"
import { Employee } from "./employee.model"

export class News{
  author: string
  title: string
  content: string
  date: Date
  files: Array<string>
}

export class Period{
  day: number
  starttime: Time
  endtime: Time
}

export class Labs{
  how: string
  howMany: number
  what: string
  materials: Array<MyFile> = []
}

export class Project{
  how: string
  materials: Array<MyFile> = []
}

export class MyFile{
  file: string
  author: string
  authorObject: Employee
  size: number
}

export class Subject{
  name: string
  department: string
  news: Array<News> = []
  semester: number
  type: string
  code: string
  goal: string
  numOfClasses: number
  ESPB: number
  theoryPeriods: Array<Period> = []
  practicalPeriods: Array<Period> = []
  theoryTeachers: Array<string> = []
  practicalTeachers: Array<string> = []
  theoryTeacherObjects: Array<Employee> = []
  practicalTeacherObjects: Array<Employee> = []
  haveLabs: boolean
  propositions: string
  theoryMaterials: Array<MyFile> = []
  practicalMaterials: Array<MyFile> = []
  oldTests: Array<MyFile> = []
  labs: Labs = new Labs
  project: Project = new Project
  oldTestsEnabled: boolean
  labsEnabled: boolean
  projectEnabled: boolean
  students: Array<string> = []
}