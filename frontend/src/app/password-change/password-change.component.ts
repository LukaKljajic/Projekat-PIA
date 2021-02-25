import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Admin } from '../model/admin.model';
import { Employee } from '../model/employee.model';
import { Student } from '../model/student.model';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private service: LoginRegisterService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnDestroy(): void {
    if (!this.user.passwordChanged) {
      alert("Приликом првог пријављивања на систем обавезно је променити лозинку, бићете излоговани")
      AppComponent.app.logout()
    }
  }

  user: Student | Employee | Admin
  oldPassword: string = ''
  newPassword: string = ''

  change() {
    if (this.oldPassword != this.user.password) {
      alert("Стара лозинка није добра")
      return
    }
    if (this.newPassword.length < 8) {
      alert("Лозинка мора имати бар 8 карактера")
      return
    }
    this.service.changePassword(this.user.username, this.newPassword).subscribe((resp) => {
      alert('Успешно промењена лозинка')
      this.router.navigate(['../mainPage'])
      this.user.password = this.newPassword
      this.user.passwordChanged = true
      localStorage.setItem('user', JSON.stringify(this.user))
    })
  }
}
