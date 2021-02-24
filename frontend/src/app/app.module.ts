import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { NewsComponent } from './news/news.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { ExploreComponent } from './explore/explore.component';

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
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
