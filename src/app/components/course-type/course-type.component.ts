import { Component, OnInit } from '@angular/core';
import { CourseType } from '../../models/course-type.model';
import { CourseTypeService } from '../../services/course-type.service';

@Component({
  selector: 'app-course-type',
  templateUrl: './course-type.component.html',
  styleUrls: ['./course-type.component.css']
})
export class CourseTypeComponent implements OnInit {
  courseTypes: CourseType[] = [];
  currentCourseType: CourseType = {
    CourseTypeId: 0,
    Description: '',
    IsDeleted: false
  };
  isEditing = false;

  constructor(private courseTypeService: CourseTypeService) { }

  ngOnInit(): void {
    this.courseTypes = this.courseTypeService.getAll();
  }

  selectCourseType(courseType: CourseType): void {
    this.currentCourseType = { ...courseType };
    this.isEditing = false;
  }

  createCourseType(description: string): void {
    const newCourseType: CourseType = {
      CourseTypeId: this.courseTypes.length + 1,
      Description: description,
      IsDeleted: false
    };
    this.courseTypeService.create(newCourseType);
    this.courseTypes = this.courseTypeService.getAll();
  }

  updateCourseType(): void {
    this.courseTypeService.update(this.currentCourseType);
    this.courseTypes = this.courseTypeService.getAll();
  }

  deleteCourseType(): void {
    this.courseTypeService.delete(this.currentCourseType.CourseTypeId);
    this.courseTypes = this.courseTypeService.getAll();
    this.isEditing = false;
    this.currentCourseType.IsDeleted = true;
  }

  startEditing(): void {
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
  }
}
