import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { NewsComponent } from './news/news.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { ExploreComponent } from './explore/explore.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { SubjectNewsComponent } from './subject-news/subject-news.component';
import { SubjectInformationComponent } from './subject-information/subject-information.component';
import { SubjectTheoryMaterialsComponent } from './subject-theory-materials/subject-theory-materials.component';
import { SubjectPracticalMaterialsComponent } from './subject-practical-materials/subject-practical-materials.component';
import { SubjectOldTestComponent } from './subject-old-test/subject-old-test.component';
import { SubjectLabsComponent } from './subject-labs/subject-labs.component';
import { SubjectProjectsComponent } from './subject-projects/subject-projects.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeSubjectsComponent } from './employee-subjects/employee-subjects.component';
import { EmployeeSubjectNewsComponent } from './employee-subject-news/employee-subject-news.component';
import { ListsComponent } from './lists/lists.component';
import { EmployeeSubjectsAboutComponent } from './employee-subjects-about/employee-subjects-about.component';
import { EmployeeSubjectsTheoryComponent } from './employee-subjects-theory/employee-subjects-theory.component';
import { EmployeeSubjectsPracticalComponent } from './employee-subjects-practical/employee-subjects-practical.component';
import { EmployeeSubjectsOldTestsComponent } from './employee-subjects-old-tests/employee-subjects-old-tests.component';
import { EmployeeSubjectsLabsComponent } from './employee-subjects-labs/employee-subjects-labs.component';
import { EmployeeSubjectsProjectsComponent } from './employee-subjects-projects/employee-subjects-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EmployeesComponent, 
    SubjectComponent,
    OneEmployeeComponent,
    NewsComponent,
    SubjectsComponent,
    StudentProjectsComponent,
    ExploreComponent,
    ProjectsComponent,
    ContactComponent,
    RegisterStudentComponent,
    PasswordChangeComponent,
    SubjectNewsComponent,
    SubjectInformationComponent,
    SubjectTheoryMaterialsComponent,
    SubjectPracticalMaterialsComponent,
    SubjectOldTestComponent,
    SubjectLabsComponent,
    SubjectProjectsComponent,
    ProfileComponent,
    EmployeeSubjectsComponent,
    EmployeeSubjectNewsComponent,
    ListsComponent,
    EmployeeSubjectsAboutComponent,
    EmployeeSubjectsTheoryComponent,
    EmployeeSubjectsPracticalComponent,
    EmployeeSubjectsOldTestsComponent,
    EmployeeSubjectsLabsComponent,
    EmployeeSubjectsProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
