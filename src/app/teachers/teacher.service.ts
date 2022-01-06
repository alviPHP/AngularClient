import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }


  SaveTeacher(TeacherData: any){
    
    return this.http.post('https://localhost:44391/api/Teachers',TeacherData);

  }

  UpdateTeacher(teacherId:any,TeacherData:any){
    
    return this.http.put('https://localhost:44391/api/Teachers/'+teacherId,TeacherData);

  }

  GetTeacher(){
    
    return this.http.get('https://localhost:44391/api/Teachers');

  }

  GetByIdTeacher(teacherId:any){
    
    return this.http.get('https://localhost:44391/api/Teachers/'+teacherId,);

  }

  DeleteTeacher(teacherId:any){
    
    return this.http.delete('https://localhost:44391/api/Teachers/'+teacherId,);

  }

}
