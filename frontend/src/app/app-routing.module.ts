import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ExploreComponent } from './explore/explore.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsComponent } from './news/news.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: 'mainPage', component: MainPageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee', component: OneEmployeeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'studentProjects', component: StudentProjectsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '**', redirectTo: 'mainPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
