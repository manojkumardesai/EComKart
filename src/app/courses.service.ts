import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [{
      courseName: 'Angular Master Class',
      courseFee: '8000',
      duration: 2
    },
    {
      courseName: 'Javascript',
      courseFee: '10000',
      duration: 6
    },
    {
      courseName: 'WebPack',
      courseFee: '12000',
      duration: 10
    }
    ];
  }
}
