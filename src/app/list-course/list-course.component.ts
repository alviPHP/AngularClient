import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from '../courses/course.service';
import { DesignCourseSrvService } from '../design-course/design-course-srv.service';
import { GradeService } from '../grades/grade.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  listCourseForm : FormGroup;
  courseList : any;
  teacherSubjectList : any;
  studentSubjectList:any

  constructor(private fb:FormBuilder, private http:HttpClient,
    private gradeCourse : GradeService, 
    private courseService : CourseService,
    private coursedesignService :DesignCourseSrvService) { }

  ngOnInit(): void {

    this.listCourseForm = this.fb.group({
      courseId:['']
      });

      this.FillDropDowns();
  }

  FillDropDowns()
  {
    this.courseService.GetCourse().subscribe(data=> {
      this.courseList = data;
    });
  }


GetDataByCourseId(event:any)
{
  console.log(event);
  this.GetTeacherSubjectList(event.target.value);
  this.GetStudentSubjectList(event.target.value);
}


  GetTeacherSubjectList(courseId:any)
  {
    this.coursedesignService.GetTeachersDataByCourseId(courseId)
    .subscribe(data=> 
      {
        this.teacherSubjectList = data;
      }
    );
  }

  GetStudentSubjectList(courseId:any)
  {
    this.gradeCourse.GetStudentsDataByCourseId(courseId)
    .subscribe(data=> 
      {
        this.studentSubjectList = data;
      }
    );
  }


}
