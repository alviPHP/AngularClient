import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../students/student.service';
import { DesignCourseSrvService } from '../design-course/design-course-srv.service';
import { GradeService } from '../grades/grade.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  listStudentForm : FormGroup;
  studentList : any;
  studentGradeList:any

  constructor(private fb:FormBuilder, private http:HttpClient,
    private gradeCourse : GradeService, 
    private studentService : StudentService,
    private coursedesignService :DesignCourseSrvService) { }

  ngOnInit(): void {


    this.listStudentForm = this.fb.group({
      studentId:['']
      });

      this. FillDropDowns();

  }

  FillDropDowns()
  {
    this.studentService.GetStudent().subscribe(data=> {
      this.studentList = data;
    });
  }


  GetDataByStudentId(event:any)
  {
    console.log(event);
    this.GetMarkSheet(event.target.value);
  }

  GetMarkSheet(subjectId:any)
  {
    this.gradeCourse.GetMarkSheetByStudentId(subjectId)
    .subscribe(data=> 
      {
        this.studentGradeList = data;
      }
    );
  }


  




}
