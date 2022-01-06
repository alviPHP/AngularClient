import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from './teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacherForm : FormGroup;
  teacherList: any;
  teacherid :any;
  btnSave = "Save";

  constructor(private fb:FormBuilder, private http:HttpClient,
    private teacherService : TeacherService,private toaster : ToastrService) {}

  ngOnInit(): void {

    this.teacherForm = this.fb.group({
      fName:[''],
      lName:[''],
      dof:[''],
      salary:['']
      });
      this.GetTeacherData();
  }

  OnSubmit()
  {

    if(this.teacherid && this.teacherid>0)
    {
      const teacherDataForUpdate =
      {id:this.teacherid,
        fName:this.teacherForm.controls['fName'].value,
       lName:this.teacherForm.controls['lName'].value,
       dof:this.teacherForm.controls['dof'].value
       ,salary:this.teacherForm.controls['salary'].value};

      this.teacherService.UpdateTeacher(this.teacherid,teacherDataForUpdate).subscribe(data => 
        {
          this.GetTeacherData();
          this.teacherForm.reset();
          this.btnSave = "Save";
          this.teacherid = 0;
          this.toaster.info('Updated successfully','Data has been updated.');
        });
    }
    else
    {
      this.teacherService.SaveTeacher(this.teacherForm.value)
      .subscribe(data=>
         {
           console.log(data);
           this.GetTeacherData();
           this.teacherForm.reset();
           this.toaster.success('Submitted successfully','Data has been saved.');
          }
      );
    }
    
  }

  GetTeacherData()
  {
    this.teacherService.GetTeacher()
    .subscribe(data=> 
      {
        console.log(data);
        this.teacherList = data;
      }
    );
  }

  edit(id:any)
  {
    this.teacherService.GetByIdTeacher(id).subscribe(data=>
      
      {
        this.teacherid = id;
        this.btnSave = "Update";
        this.teacherForm.patchValue(data);
      });
  }


  Delete(id:any)
  {
    this.teacherService.DeleteTeacher(id).subscribe(data=>
      
      {
        this.GetTeacherData();
        this.toaster.error('Data Deleted','Data has been deleted.');
      });
  }


}
