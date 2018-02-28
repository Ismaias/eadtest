import {Injectable} from '@angular/core'

import {Observable} from 'rxjs/Observable'

import {API} from '../app.api'
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';

@Injectable()
export class CourseService {

    constructor(private http: HttpClient){}

    getCourses(): Observable<Course[]> {
      return this.http.get<Course[]>(`${API}/courses`)
    }

}
