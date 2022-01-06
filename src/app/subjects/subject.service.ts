import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }


  SaveSubject(SubjectData: any){
    
    return this.http.post('https://localhost:44391/api/Subjects',SubjectData);

  }

  UpdateSubject(subjectId:any,SubjectData:any){
    
    return this.http.put('https://localhost:44391/api/Subjects/'+subjectId,SubjectData);

  }

  GetSubject(){
    
    return this.http.get('https://localhost:44391/api/Subjects');

  }

  GetByIdSubject(subjectId:any){
    
    return this.http.get('https://localhost:44391/api/Subjects/'+subjectId,);

  }

  DeleteSubject(subjectId:any){
    
    return this.http.delete('https://localhost:44391/api/Subjects/'+subjectId,);

  }


  GetSubjectsByCourseId(courseId:any){
    
    return this.http.get('https://localhost:44391/api/Subjects/GetSubjectsByCourseId/'+courseId,);

  }

}




