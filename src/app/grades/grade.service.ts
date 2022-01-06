import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http:HttpClient) { }

  SaveGrades(GradesData: any){
    
    return this.http.post('https://localhost:44391/api/Grades',GradesData);

  }

  UpdateGrades(gradeId:any,GradesData:any){
    
    return this.http.put('https://localhost:44391/api/Grades/'+gradeId,GradesData);

  }

  GetGrades(){
    
    return this.http.get('https://localhost:44391/api/Grades/GetGradesInfo');

  }

  GetByIdGrade(gradeId:any){
    
    return this.http.get('https://localhost:44391/api/Grades/'+gradeId,);

  }

  DeleteGrade(gradeId:any){
    
    return this.http.delete('https://localhost:44391/api/Grades/'+gradeId,);

  }

  GetStudentsDataByCourseId(CourseId:any){
    
    return this.http.get('https://localhost:44391/api/Grades/GetStudentsDataByCourseId/'+CourseId,);
  }
  GetStudentsDataBySubjectId(SubjectId:any){
    
    return this.http.get('https://localhost:44391/api/Grades/GetStudentsDataBySubjectId/'+SubjectId,);

  }
  GetMarkSheetByStudentId(StudentId:any){
        
    return this.http.get('https://localhost:44391/api/Grades/GetMarkSheetByStudentId/'+StudentId,);
  }


}
