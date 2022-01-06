import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  SaveStudent(StudentData: any){
    
    return this.http.post('https://localhost:44391/api/Students',StudentData);

  }

  UpdateStudent(studentId:any,StudentData:any){
    
    return this.http.put('https://localhost:44391/api/Students/'+studentId,StudentData);

  }

  GetStudent(){
    
    return this.http.get('https://localhost:44391/api/Students');

  }

  GetByIdStudent(studentId:any){
    
    return this.http.get('https://localhost:44391/api/Students/'+studentId,);

  }

  DeleteStudent(studentId:any){
    
    return this.http.delete('https://localhost:44391/api/Students/'+studentId,);

  }

}
