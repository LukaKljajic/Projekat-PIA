import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { Subject } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectGuard implements CanActivate {

  constructor(private service: SubjectService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('user') == null)
      return false
    if (localStorage.getItem('userType') == 'student') {
      let user:Student = JSON.parse(localStorage.getItem('user'))
      let subject: Subject = JSON.parse(localStorage.getItem('subject'))
      if (!subject.students.includes(user.username)) {
        return false
      }
    }
    return true
  }
  
}
