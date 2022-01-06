import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  SaveCourse(CourseData: any){
    
    return this.http.post('https://localhost:44391/api/Courses',CourseData);

  }

  UpdateCourse(courseId:any,CourseData:any){
    
    return this.http.put('https://localhost:44391/api/Courses/'+courseId,CourseData);

  }

  GetCourse(){
    
    return this.http.get('https://localhost:44391/api/Courses');

  }

  GetByIdCourse(courseId:any){
    
    return this.http.get('https://localhost:44391/api/Courses/'+courseId,);

  }

  DeleteCourse(courseId:any){
    
    return this.http.delete('https://localhost:44391/api/Courses/'+courseId,);

  }
}
