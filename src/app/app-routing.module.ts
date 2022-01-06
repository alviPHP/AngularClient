import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { DesignCourseComponent } from './design-course/design-course.component';
import { GradesComponent } from './grades/grades.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { ListStudentsComponent } from './list-students/list-students.component';


const routes: Routes = [{path:'create-course', component:CoursesComponent},{path:'create-subject', component:SubjectsComponent}
,{path:'create-teacher', component:TeachersComponent},
{path:'create-student', component:StudentsComponent},
{path:'design-course', component:DesignCourseComponent},
{path:'create-grades', component:GradesComponent},
{path:'list-course', component:ListCourseComponent},
{path:'list-subjects', component:ListSubjectsComponent},
{path:'list-students', component:ListStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
