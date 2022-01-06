import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignCourseSrvService {

  constructor(private http:HttpClient) { }

  baseUrl  = 'https://localhost:44391/api/CourseSubjectTeachers';

  SaveCourseDesign(CourseDesignData: any){
    
    return this.http.post(this.baseUrl,CourseDesignData);

  }

  UpdateCourseDesign(courseDesignId:any,CourseDesignData:any){

    return this.http.put(this.baseUrl+'/'+courseDesignId,CourseDesignData);

  }

  GetCourseDesign(){
    
    return this.http.get(this.baseUrl+'/GetCourseDesignInfo');

  }

  GetByIdGetCourseDesign(courseDesignId:any){
    
    return this.http.get(this.baseUrl+'/GetCourseDesignByCourseId'+courseDesignId,);

  }

  DeleteCourseDesign(courseDesignId:any){
    
    return this.http.delete(this.baseUrl+'/'+courseDesignId,);

  }
  

  GetCompositeKeyById(courseId:any,subjectId:any)
  {
    return this.http.get(this.baseUrl+'/details?courseId='+courseId+'&subjectId='+subjectId);
  }

  GetTeachersDataByCourseId(courseId:any)
  {
    return this.http.get(this.baseUrl+'/GetTeachersDataByCourseId/'+courseId,);
  }

  GetTeachersDataBySubjectId(subjectId:any)
  {
    return this.http.get(this.baseUrl+'/GetTeachersDataBySubjectId/'+subjectId,);
  }

}
