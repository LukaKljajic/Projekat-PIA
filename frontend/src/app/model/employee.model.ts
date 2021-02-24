import { Subject } from '../model/subject.model';

export class Employee{
  username: string
  password: string
  name: string
  surname: string
  address: string
  phone: string
  website: string
  biography: string
  title: string
  cabinetNumber: number
  active: boolean
  picture: string
  subjects: Array<Subject>
}