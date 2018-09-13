import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})
export class MaxComponent implements OnInit {


eight: number;
Weight: number;
coefSquat: Number = 2;
coefBench: Number = 1.5;
coefDeadLift: Number = 1.8;

  constructor() { }

  ngOnInit() {
  }
  getCoefSquat() {
    return this.coefSquat;
  }

  getCoefBench() {
    return this.coefBench;
  }

  getCoefDeadLift() {
    return this.coefDeadLift;
  }


}
