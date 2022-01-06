import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from '../courses/course.service';
import { SubjectService } from '../subjects/subject.service';
import { TeacherService } from '../teachers/teacher.service';
import { DesignCourseSrvService } from './design-course-srv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-design-course',
  templateUrl: './design-course.component.html',
  styleUrls: ['./design-course.component.css']
})
export class DesignCourseComponent implements OnInit {

  designCourseForm : FormGroup;
  designCourseList: any;
  designCourseid :any;
  btnSave = "Save";
  courseList : any;
  subjectList : any;
  teacherList : any;

  constructor(private fb:FormBuilder, private http:HttpClient,
    private designCourse : DesignCourseSrvService, 
    private courseService : CourseService,
    private subjectService : SubjectService ,
    private teacherService : TeacherService,private toaster : ToastrService) { }

  ngOnInit(): void {

    this.designCourseForm = this.fb.group({
      courseId:[''],
      subjectId:[''],
      teacherId:['']
      });

    this.FillDropDowns(); 
    this.GetCourseDesignData();
    
  }

  FillDropDowns()
  {
    this.courseService.GetCourse().subscribe(data=> {
      this.courseList = data;
    });

    this.subjectService.GetSubject().subscribe(data=> {
      this.subjectList = data;
    });

    this.teacherService.GetTeacher().subscribe(data=> {
      this.teacherList = data;
    });
  }

  OnSubmit()
  {



    if(this.designCourseid > 0)
      {
        const designCourseForUpdate =
        { id:this.designCourseid,
          courseId:this.designCourseForm.controls['courseId'].value,
          subjectId:this.designCourseForm.controls['subjectId'].value,
          teacherId:this.designCourseForm.controls['teacherId'].value
        };
  
        this.designCourse.UpdateCourseDesign(this.designCourseid,designCourseForUpdate).subscribe(data => 
          {
            this.GetCourseDesignData();
            this.btnSave = "Save";
            this.designCourseid = 0;
            this.FillDropDowns();
            this.toaster.info('Updated successfully','Data has been updated.');
          });
      }
      else
      {
        this.designCourse.SaveCourseDesign(this.designCourseForm.value)
        .subscribe(data=>
           {
             
            this.GetCourseDesignData();
            this.FillDropDowns();
            this.toaster.success('Submitted successfully','Data has been saved.');
            }
        );
     }

  }

  GetCourseDesignData()
  {
    this.designCourse.GetCourseDesign()
    .subscribe(data=> 
      {
        console.log(data);
        this.designCourseList = data;
      }
    );
  }

  edit(Id:any,courseId:any,subjectId:any,teacherId:any)
    {
      this.btnSave = "Update";
      this.designCourseid = Id;     

      this.designCourseForm.controls['courseId'].setValue (courseId);
      this.designCourseForm.controls['subjectId'].setValue (subjectId);
      this.designCourseForm.controls['teacherId'].setValue (teacherId);
    }


  Delete(id:any)
  {
    this.designCourse.DeleteCourseDesign(id).subscribe(data=>      
    {
      this.GetCourseDesignData();
      this.designCourseid =0;
      this.FillDropDowns();
      this.toaster.error('Data Deleted','Data has been deleted.');
    });
  }

  


}
