import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns = ['title'];
  dataSource = new CourseDataSource(this.courseService);

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

}

export class CourseDataSource extends DataSource<any> {

  constructor(private courseService: CourseService) {
    super();
  }

  connect(): Observable<Course[]> {
    return this.courseService.getCourses();
  }

  disconnect() {}

}