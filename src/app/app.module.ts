import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
// <== add the imports!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { DesignCourseComponent } from './design-course/design-course.component';
import { GradesComponent } from './grades/grades.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SubjectsComponent,
    TeachersComponent,
    StudentsComponent,
    DesignCourseComponent,
    GradesComponent,
    ListCourseComponent,
    ListSubjectsComponent,
    ListStudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   ,
    FormsModule,                               
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
