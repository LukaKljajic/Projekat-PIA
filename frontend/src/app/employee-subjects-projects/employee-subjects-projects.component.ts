import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { MyFile, Project, Subject } from '../model/subject.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-subjects-projects',
  templateUrl: './employee-subjects-projects.component.html',
  styleUrls: ['./employee-subjects-projects.component.css']
})
export class EmployeeSubjectsProjectsComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.subject = this.user.subjects[0]
    if (this.subject.project == undefined)
      this.subject.project = new Project
    this.subjectCode = this.subject.code
  }

  user: Employee
  subjectCode: string
  subject: Subject

  changed() {
    this.subject = this.user.subjects.find(el => el.code == this.subjectCode)
    if (this.subject.project == undefined)
      this.subject.project = new Project
  }

  up(file: MyFile) {
    let newArray = this.subject.project.materials.slice()
    let index = newArray.indexOf(file)
    if (index == 0) return
    let t = newArray[index - 1]
    newArray[index - 1] = newArray[index]
    newArray[index] = t
    let newArray2 = this.takeObjectsOut(newArray)
    console.log(newArray)
    this.service.setFiles(this.subject.code, newArray2, 'project.materials').subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        this.subject.project.materials = newArray
      }
    })
  }

  down(file: MyFile) {
    let newArray = this.subject.project.materials.slice()
    let index = newArray.indexOf(file)
    if (index == newArray.length - 1) return
    let t = newArray[index + 1]
    newArray[index + 1] = newArray[index]
    newArray[index] = t
    let newArray2 = this.takeObjectsOut(newArray)
    console.log(newArray)
    this.service.setFiles(this.subject.code, newArray2, 'project.materials').subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        this.subject.project.materials = newArray
      }
    })
  }

  delete(file: MyFile) {
    let newArray = this.subject.project.materials.slice()
    newArray = newArray.filter(el => el != file)
    let newArray2 = this.takeObjectsOut(newArray)
    console.log(newArray)
    this.service.setFiles(this.subject.code, newArray2, 'project.materials').subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        this.subject.project.materials = newArray
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
    this.service.postFile(this.fileToUpload, this.user.username, this.subject.code, 'project.materials').subscribe((file: MyFile) => {
      if (file) {
        this.service.getEmployeeByUsername(file.author).subscribe((employee: Employee) => {
          file.authorObject = employee 
          this.subject.project.materials.push(file)
          localStorage.setItem('user', JSON.stringify(this.user))
        })
      }
    });
  }

  changeEnabled() {
    this.subject.projectEnabled = !this.subject.projectEnabled
    this.service.enable('project', this.subject.code, this.subject.projectEnabled).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        localStorage.setItem('user', JSON.stringify(this.user))
      }
    })
  }

  saveChanges() {
    this.service.changeProject(this.subject.code, this.subject.project.how).subscribe((resp) => {
      if(resp['poruka'] === 'ok')
        localStorage.setItem('user', JSON.stringify(this.user))
    })
  }

}
