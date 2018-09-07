import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {

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
