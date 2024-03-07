import { Injectable } from '@angular/core';
import { CourseType } from '../models/course-type.model';
@Injectable({
  providedIn: 'root'
})
export class CourseTypeService {
 // Array to hold CourseType items
 courseTypes: CourseType[] = [
  {
    CourseTypeId: 1,
    Description: 'Online',
    IsDeleted: false
  },
  {
    CourseTypeId: 2,
    Description: 'Offline',
    IsDeleted: false
  }
  // Add more CourseType items as needed
];
  constructor() { }
   // Method to get all CourseTypes
   getAll(): CourseType[] {
    return this.courseTypes.filter(x => x.IsDeleted === false);
  }

  // Method to get a CourseType by id
  get(id: number): CourseType|undefined {
    let foundCourse = this.courseTypes.find(x => x.CourseTypeId === id && x.IsDeleted === false);
    if(foundCourse != undefined){return foundCourse}
    else{return} //TODO add exception handling here for undefined case and remove undefined from type declaration
    
  }

  // Method to create a new CourseType
  create(courseType: CourseType) {
    courseType.CourseTypeId = Math.max(...this.courseTypes.map(x => x.CourseTypeId)) + 1;
    this.courseTypes.push(courseType);
  }

  // Method to update a CourseType
  update(courseType: CourseType) {
    const index = this.courseTypes.findIndex(x => x.CourseTypeId === courseType.CourseTypeId);
    if (index > -1) {
      this.courseTypes[index] = courseType;
    }
  }

  // Method to delete a CourseType
  delete(id: number) {
    const courseType = this.get(id);
    if (courseType) {
      courseType.IsDeleted = true;
    }
  }
}

