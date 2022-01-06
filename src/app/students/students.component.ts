import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from './student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  studentForm : FormGroup;
  studentList: any;
  studentid :any;
  btnSave = "Save";

  constructor(private fb:FormBuilder, private http:HttpClient,
    private studentService : StudentService,private toaster : ToastrService) { }

    ngOnInit(): void {

      this.studentForm = this.fb.group({
        fName:[''],
        lName:[''],
        dof:[''],
        regNo:['']
        });
        this.GetStudentData();
    }
  
    OnSubmit()
    {
  
      if(this.studentid && this.studentid>0)
      {
        const studentDataForUpdate =
        {id:this.studentid,fName:this.studentForm.controls['fName'].value,
         lName:this.studentForm.controls['lName'].value,dof:this.studentForm.controls['dof'].value
         ,regNo:this.studentForm.controls['regNo'].value};
  
        this.studentService.UpdateStudent(this.studentid,studentDataForUpdate).subscribe(data => 
          {
            this.GetStudentData();
            this.studentForm.reset();
            this.btnSave = "Save";
            this.studentid = 0;
            this.toaster.info('Updated successfully','Data has been updated.');
          });
      }
      else
      {
        this.studentService.SaveStudent(this.studentForm.value)
        .subscribe(data=>
           {
             console.log(data);
             this.GetStudentData();
             this.studentForm.reset();
             this.toaster.success('Submitted successfully','Data has been saved.');
            }
        );
      }
      
    }
  
    GetStudentData()
    {
      this.studentService.GetStudent()
      .subscribe(data=> 
        {
          console.log(data);
          this.studentList = data;
        }
      );
    }
  
    edit(id:any)
    {
      this.studentService.GetByIdStudent(id).subscribe(data=>
        
        {
          this.studentid = id;
          this.btnSave = "Update";
          this.studentForm.patchValue(data);
        });
    }
  
  
    Delete(id:any)
    {
      this.studentService.DeleteStudent(id).subscribe(data=>
        
        {
          this.GetStudentData();
          this.toaster.error('Data Deleted','Data has been deleted.');
        });
    }

}
