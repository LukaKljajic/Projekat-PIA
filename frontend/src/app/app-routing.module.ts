import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeStudentComponent } from './change-student/change-student.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeSubjectNewsUpdateComponent } from './employee-subject-news-update/employee-subject-news-update.component';
import { EmployeeSubjectNewsComponent } from './employee-subject-news/employee-subject-news.component';
import { EmployeeSubjectsAboutComponent } from './employee-subjects-about/employee-subjects-about.component';
import { EmployeeSubjectsLabsComponent } from './employee-subjects-labs/employee-subjects-labs.component';
import { EmployeeSubjectsOldTestsComponent } from './employee-subjects-old-tests/employee-subjects-old-tests.component';
import { EmployeeSubjectsPracticalComponent } from './employee-subjects-practical/employee-subjects-practical.component';
import { EmployeeSubjectsProjectsComponent } from './employee-subjects-projects/employee-subjects-projects.component';
import { EmployeeSubjectsTheoryComponent } from './employee-subjects-theory/employee-subjects-theory.component';
import { EmployeeSubjectsComponent } from './employee-subjects/employee-subjects.component';
import { EmployeesComponent } from './employees/employees.component';
import { ExploreComponent } from './explore/explore.component';
import { SubjectGuard } from './guards/subject.guard';
import { ListsComponent } from './lists/lists.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModifySubjectsComponent } from './modify-subjects/modify-subjects.component';
import { NewsComponent } from './news/news.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { SubjectClassesComponent } from './subject-classes/subject-classes.component';
import { SubjectInformationComponent } from './subject-information/subject-information.component';
import { SubjectLabsComponent } from './subject-labs/subject-labs.component';
import { SubjectNewsComponent } from './subject-news/subject-news.component';
import { SubjectOldTestComponent } from './subject-old-test/subject-old-test.component';
import { SubjectPracticalMaterialsComponent } from './subject-practical-materials/subject-practical-materials.component';
import { SubjectProjectsComponent } from './subject-projects/subject-projects.component';
import { SubjectStudentsComponent } from './subject-students/subject-students.component';
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
  { path: 'registerEmployee', component: RegisterEmployeeComponent },
  { path: 'passwordChange', component: PasswordChangeComponent },
  { path: 'changeStudent', component: ChangeStudentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'subjectClasses', component: SubjectClassesComponent },
  { path: 'subjectStudents', component: SubjectStudentsComponent },
  { path: 'modifySubjects', component: ModifySubjectsComponent },
  {
    path: 'employeeSubjects', component: EmployeeSubjectsComponent,
    children: [
      { path: 'employeeSubjectsAbout', component: EmployeeSubjectsAboutComponent, outlet: 'employee-subject' },
      { path: 'employeeSubjectsTheory', component: EmployeeSubjectsTheoryComponent, outlet: 'employee-subject' },
      { path: 'employeeSubjectsPractical', component: EmployeeSubjectsPracticalComponent, outlet: 'employee-subject' },
      { path: 'employeeSubjectsOldTests', component: EmployeeSubjectsOldTestsComponent, outlet: 'employee-subject' },
      { path: 'employeeSubjectsLabs', component: EmployeeSubjectsLabsComponent, outlet: 'employee-subject' },
      { path: 'employeeSubjectsProjects', component: EmployeeSubjectsProjectsComponent, outlet: 'employee-subject' }
    ]
  },
  { path: 'employeeSubjectNews', component: EmployeeSubjectNewsComponent },
  { path: 'employeeSubjectNewsUpdate', component: EmployeeSubjectNewsUpdateComponent },
  { path: 'lists', component: ListsComponent },
  { path: '**', redirectTo: 'mainPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
