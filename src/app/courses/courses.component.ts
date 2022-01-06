import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseForm : FormGroup;
  courseList: any;
  courseid :any;
  btnSave = "Save";
  constructor(private fb:FormBuilder, private http:HttpClient,
    private courseService : CourseService , private toaster : ToastrService) {}

  ngOnInit(): void {

    this.courseForm = this.fb.group({
    name:['']
    });
    this.GetCourseData();
  }
  OnSubmit()
  {

    if(this.courseid && this.courseid>0)
    {
      const coursedatForUpdate =
      {id:this.courseid,name:this.courseForm.controls['name'].value};

      this.courseService.UpdateCourse(this.courseid,coursedatForUpdate).subscribe(data => 
        {
          this.GetCourseData();
          this.courseForm.reset();
          this.btnSave = "Save";
          this.courseid = 0;
          this.toaster.info('Updated successfully','Data has been updated.');
        });
    }
    else
    {
      this.courseService.SaveCourse(this.courseForm.value)
      .subscribe(data=>
         {
           console.log(data);
           this.GetCourseData();
           this.courseForm.reset();
           this.toaster.success('Submitted successfully','Data has been saved.');
        }
        
        );
          
      
    }
    
  }

  GetCourseData()
  {
    this.courseService.GetCourse()
    .subscribe(data=> 
      {
        this.courseList = data;
      }
    );
  }

  edit(id:any)
  {
    this.courseService.GetByIdCourse(id).subscribe(data=>
      
      {
        this.courseid = id;
        this.btnSave = "Update";
        this.courseForm.patchValue(data);
      });
  }


  Delete(id:any)
  {
    this.courseService.DeleteCourse(id).subscribe(data=>
      
      {
        this.GetCourseData();
        this.toaster.error('Data Deleted','Data has been deleted.');
      });
  }

}
