import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { MyFile, Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-subjects-practical',
  templateUrl: './employee-subjects-practical.component.html',
  styleUrls: ['./employee-subjects-practical.component.css']
})
export class EmployeeSubjectsPracticalComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.subject = this.user.subjects[0]
    console.log(this.subject)
    this.subjectCode = this.subject.code
  }

  user: Employee
  subjectCode: string
  subject: Subject

  changed() {
    this.subject = this.user.subjects.find(el => el.code == this.subjectCode)
  }

  up(file: MyFile) {
    let newArray = this.subject.practicalMaterials.slice()
    let index = newArray.indexOf(file)
    if (index == 0) return
    let t = newArray[index - 1]
    newArray[index - 1] = newArray[index]
    newArray[index] = t
    let newArray2 = this.takeObjectsOut(newArray)
    console.log(newArray)
    this.service.setFiles(this.subject.code, newArray2, 'practicalMaterials').subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        this.subject.practicalMaterials = newArray
      }
    })
  }

  down(file: MyFile) {
    let newArray = this.subject.practicalMaterials.slice()
    let index = newArray.indexOf(file)
    if (index == newArray.length - 1) return
    let t = newArray[index + 1]
    newArray[index + 1] = newArray[index]
    newArray[index] = t
    let newArray2 = this.takeObjectsOut(newArray)
    console.log(newArray)
    this.service.setFiles(this.subject.code, newArray2, 'practicalMaterials').subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        this.subject.practicalMaterials = newArray
      }
    })
  }

  delete(file: MyFile) {
    let newArray = this.subject.practicalMaterials.slice()
    newArray = newArray.filter(el => el != file)
    let newArray2 = this.takeObjectsOut(newArray)
    console.log(newArray)
    this.service.setFiles(this.subject.code, newArray2, 'practicalMaterials').subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        this.subject.practicalMaterials = newArray
        this.service.deleteFile(file.file).subscribe((resp)=>{})
      }
    })
  }

  takeObjectsOut(files: MyFile[]) {
    let res = []
    for (let i = 0; i < files.length; i++){
      let el = {
        file: files[i].file,
        size: files[i].size,
        author: files[i].author
      }
      res.push(el)
    }
    return res
  }

  fileToUpload: File = null

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0)
  }

  uploadFile() {
    this.service.postFile(this.fileToUpload, this.user.username, this.subject.code, 'practicalMaterials').subscribe((file: MyFile) => {
      if (file) {
        this.service.getEmployeeByUsername(file.author).subscribe((employee: Employee) => {
          file.authorObject = employee 
          this.subject.practicalMaterials.push(file)
          localStorage.setItem('user', JSON.stringify(this.user))
        })
      }
    });
  }
}
