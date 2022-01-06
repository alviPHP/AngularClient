import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectForm : FormGroup;
  subjectList: any;
  subjectid :any;
  btnSave = "Save";
  
  constructor(private fb:FormBuilder, private http:HttpClient,
    private subjectService : SubjectService , private toaster : ToastrService) {}

  ngOnInit(): void {

    this.subjectForm = this.fb.group({
    name:['']
    });
    this.GetSubjectData();
  }
  OnSubmit()
  {

    if(this.subjectid && this.subjectid>0)
    {
      const subjectDataForUpdate =
      {id:this.subjectid,name:this.subjectForm.controls['name'].value};

      this.subjectService.UpdateSubject(this.subjectid,subjectDataForUpdate).subscribe(data => 
        {
          this.GetSubjectData();
          this.subjectForm.reset();
          this.btnSave = "Save";
          this.subjectid = 0;
          this.toaster.info('Updated successfully','Data has been updated.');
        });
    }
    else
    {
      this.subjectService.SaveSubject(this.subjectForm.value)
      .subscribe(data=>
         {
           console.log(data);
           this.GetSubjectData();
           this.subjectForm.reset();
           this.toaster.success('Submitted successfully','Data has been saved.');
          }
      );
    }
    
  }

  GetSubjectData()
  {
    this.subjectService.GetSubject()
    .subscribe(data=> 
      {
        this.subjectList = data;
      }
    );
  }

  edit(id:any)
  {
    this.subjectService.GetByIdSubject(id).subscribe(data=>
      
      {
        this.subjectid = id;
        this.btnSave = "Update";
        this.subjectForm.patchValue(data);
      });
  }


  Delete(id:any)
  {
    this.subjectService.DeleteSubject(id).subscribe(data=>
      
      {
        this.GetSubjectData();
        this.toaster.error('Data Deleted','Data has been deleted.');
      });
  }


}
