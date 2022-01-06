import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from '../courses/course.service';
import { SubjectService } from '../subjects/subject.service';
import { StudentService } from '../students/student.service';
import { DesignCourseSrvService } from '../design-course/design-course-srv.service';
import { GradeService } from './grade.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  gradesForm : FormGroup;
  gradesList: any;
  gradesid :any;
  btnSave = "Save";
  courseList : any;
  subjectList : any;
  studentList : any;
  compositeKeyId : any
  courseId: any
  studentId:any


  constructor(private fb:FormBuilder, private http:HttpClient,
    private gradeCourse : GradeService, 
    private courseService : CourseService,
    private subjectService : SubjectService ,
    private studentService : StudentService,
    private coursedesignService :DesignCourseSrvService,private toaster : ToastrService)
    
    { }

  ngOnInit(): void {
    this.gradesForm = this.fb.group({
      courseId:[''],
      subjectId:[''],
      studentId:[''],
      marks:['']
      });
      this.FillDropDowns();
      this.GetGradesData();
  }

  FillDropDowns()
  {
    this.courseService.GetCourse().subscribe(data=> {
      this.courseList = data;
    });

    this.studentService.GetStudent().subscribe(data=> {
      this.studentList = data;
    });
  }

  OnSubmit()
  {
    if(this.gradesid > 0)
      {
        const gradeCourseForUpdate =
        { id:this.gradesid,
          compositeKeyId:this.compositeKeyId,
          studentId:this.gradesForm.controls['studentId'].value,
          marks:this.gradesForm.controls['marks'].value
        };
  
        this.gradeCourse.UpdateGrades(this.gradesid,gradeCourseForUpdate).subscribe(data => 
          {
            this.FillDropDowns();
            this.GetGradesData();
            this.btnSave = "Save";
            this.gradesid = 0;
            this.toaster.info('Updated successfully','Data has been updated.');
            
          });
      }
      else
      {
        const gradeCourseForUpdate =
        { 
          courseSubjectTeacherId:this.compositeKeyId,
          studentId:this.gradesForm.controls['studentId'].value,
          marks:this.gradesForm.controls['marks'].value
        };

        this.gradeCourse.SaveGrades(gradeCourseForUpdate)
        .subscribe(data=>
           {
            this.FillDropDowns();
            this.GetGradesData();
            this.toaster.success('Submitted successfully','Data has been saved.');
            }
        );
     }
  }

  GetGradesData()
  {
    this.gradeCourse.GetGrades()
    .subscribe(data=> 
      {
        console.log(data);
        this.gradesList = data;
      }
    );
  }


  edit(Id:any,courseId:any,subjectId:any,studentId:any,marks:any)
  {
    this.btnSave = "Update";
    this.gradesid = Id;     

    

    this.gradesForm.controls['courseId'].setValue (courseId);
    


this.subjectService.GetSubjectsByCourseId(courseId).subscribe(subjectList=> {
      this.subjectList = subjectList;    
    });

    this.gradesForm.controls['subjectId'].setValue (subjectId);


    
    this.gradesForm.controls['studentId'].setValue (studentId);

    this.gradesForm.controls['marks'].setValue (marks);
  }


Delete(id:any)
{
  this.gradeCourse.DeleteGrade(id).subscribe(data=>      
  {
    this.GetGradesData();
    this.gradesid =0;
    this.FillDropDowns();
    this.toaster.error('Data Deleted','Data has been deleted.');
  });
}

GetSubjectsByCourseId(event:any)
{
  console.log(event);
  this.courseId = event.target.value;
  this.subjectService.GetSubjectsByCourseId(this.courseId).subscribe(subjectList=> {
    this.subjectList = subjectList;    
  });
}

GetCompositeKeyId(event:any)
{
    console.log(event);
    this.studentId= event.target.value;
    this.coursedesignService.GetCompositeKeyById(this.courseId,this.studentId).subscribe(compositeKeyId=> {
    this.compositeKeyId = compositeKeyId;    
  });
}



}
