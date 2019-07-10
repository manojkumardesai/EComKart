import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'Angular Courses';
  coursesImage = 'http://lorempixel.com/100/100/sports';
  colspanvar = 2;
  courses;
  phoneNumbers = 0;
  parentCourseCoupon = 'FREECOURSE';
  isLoggedIn = true;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
    localStorage.setItem('secretPassword', 'Hello123Pwd');
    sessionStorage.setItem('loginPassword', 'Hello123Pwd');
  }

  getTitle() {
    return this.title;
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('I was clickied:', $event);
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp(value) {
      // this.phoneNumbers = value;
      console.log('enter was pressed', value);

  }

  couponUsage($event) {
    console.log('Coupon Usage Event', $event);
  }

}
