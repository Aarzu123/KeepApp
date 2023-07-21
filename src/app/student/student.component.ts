import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public stdList:any[];

  today: number = Date.now();
 

  a: number = 0.259;
  b: number = 1.3495;
  
  constructor()
  {
    this.stdList=[
      {
        "stdName":"Tim",
        "stdEmail":"tim@gmail.com",
        "stdCountry":"India",
        "stdMarks":450,
        "gender": "Male",
      },
      {
        "stdName":"Rim",
        "stdEmail":"rim@gmail.com",
        "stdCountry":"India",
        "stdMarks":350,
        "gender": "FeMale",
      },
      {
        "stdName":"Jim",
        "stdEmail":"jim@gmail.com",
        "stdCountry":"USA",
        "stdMarks":500,
        "gender": "Male",
      },
      {
        "stdName":"Kim",
        "stdEmail":"kim@gmail.com",
        "stdCountry":"USA",
        "stdMarks":400,
        "gender": "FeMale",
      }
    ];
  }
}
