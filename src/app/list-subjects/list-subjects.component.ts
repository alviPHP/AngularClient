import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from '../subjects/subject.service';
import { DesignCourseSrvService } from '../design-course/design-course-srv.service';
import { GradeService } from '../grades/grade.service';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css']
})
export class ListSubjectsComponent implements OnInit {

  listSubjectForm : FormGroup;
  subjectList : any;
  teacherCourseList : any;
  studentGradeList:any


  constructor(private fb:FormBuilder, private http:HttpClient,
    private gradeCourse : GradeService, 
    private subjectService : SubjectService,
    private coursedesignService :DesignCourseSrvService) { }

  ngOnInit(): void {

    this.listSubjectForm = this.fb.group({
      subjectId:['']
      });

      this.FillDropDowns();
  }

  FillDropDowns()
  {
    this.subjectService.GetSubject().subscribe(data=> {
      this.subjectList = data;
    });
  }

GetDataBySubjectId(event:any)
{
  console.log(event);
  this.GetTeacherSubjectList(event.target.value);
  this.GetStudentGradeList(event.target.value);
}


  GetTeacherSubjectList(subjectId:any)
  {
    this.coursedesignService.GetTeachersDataBySubjectId(subjectId)
    .subscribe(data=> 
      {
        this.teacherCourseList = data;
      }
    );
  }

  GetStudentGradeList(subjectId:any)
  {
    this.gradeCourse.GetStudentsDataBySubjectId(subjectId)
    .subscribe(data=> 
      {
        this.studentGradeList = data;
      }
    );
  }

}
