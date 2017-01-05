import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: "courses",
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
    providers: [CoursesService]
})

export class CoursesComponent {
    title = "The Courses List";
    courses;

    constructor( coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
}


