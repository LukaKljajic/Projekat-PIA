import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: LoginRegisterService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  user: Employee

  save() {
    if (this.user.address.length == 0) {
      alert('Адреса је обавезно поље')
      return
    }
    if (this.user.cabinetNumber.length == 0) {
      alert('Број кабинета је обавезно поље')
      return
    }
    this.service.changeProfile(this.user.username, this.user.address, this.user.phone, this.user.biography, this.user.cabinetNumber).subscribe((resp) => {
      if (resp['poruka'] === 'ok') {
        alert("Успешно промењени подаци")
        localStorage.setItem('user', JSON.stringify(this.user))
        this.router.navigate(['mainPage'])
      }
    })
  }
}
