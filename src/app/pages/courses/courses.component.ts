import { Component } from '@angular/core';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  public courses: Courses[] = [
    new Courses(1, 'React', 12000),
    new Courses(2, 'Angular', 12000),
    new Courses(3, 'Javascript', 10000),
  ];

  displayedColumns = ['id', 'name', 'price'];
}
