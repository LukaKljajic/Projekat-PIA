import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmployeesComponent } from './employees/employees.component';
import { ExploreComponent } from './explore/explore.component';
import { SubjectGuard } from './guards/subject.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsComponent } from './news/news.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { SubjectInformationComponent } from './subject-information/subject-information.component';
import { SubjectLabsComponent } from './subject-labs/subject-labs.component';
import { SubjectNewsComponent } from './subject-news/subject-news.component';
import { SubjectOldTestComponent } from './subject-old-test/subject-old-test.component';
import { SubjectPracticalMaterialsComponent } from './subject-practical-materials/subject-practical-materials.component';
import { SubjectProjectsComponent } from './subject-projects/subject-projects.component';
import { SubjectTheoryMaterialsComponent } from './subject-theory-materials/subject-theory-materials.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: 'mainPage', component: MainPageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee', component: OneEmployeeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'subjects', component: SubjectsComponent },
  {
    path: 'subject', component: SubjectComponent, canActivate: [SubjectGuard],
    children: [
      { path: 'subjectNews', component: SubjectNewsComponent, outlet: 'subject' },
      { path: 'subjectInformation', component: SubjectInformationComponent, outlet: 'subject' },
      { path: 'subjectTheoryMaterials', component: SubjectTheoryMaterialsComponent, outlet: 'subject' },
      { path: 'subjectPracticalMaterials', component: SubjectPracticalMaterialsComponent, outlet: 'subject' },
      { path: 'subjectOldTests', component: SubjectOldTestComponent, outlet: 'subject' },
      { path: 'subjectLabs', component: SubjectLabsComponent, outlet: 'subject' },
      { path: 'subjectProjects', component: SubjectProjectsComponent, outlet: 'subject'}
    ]
  },
  { path: 'studentProjects', component: StudentProjectsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registerStudent', component: RegisterStudentComponent },
  { path: 'passwordChange', component: PasswordChangeComponent},
  { path: '**', redirectTo: 'mainPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
