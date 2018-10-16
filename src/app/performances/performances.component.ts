import { Component, OnInit } from '@angular/core';
import { Performance } from '../workout';
import { PerformanceService } from '../performance.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {

performances: Performance[] = [];
filteredOption: Observable<Performance[]> = null;
myControl = new FormControl();


date: Date;
exercice: string ;
max: number;
completemsg = '';

  constructor(private performanceService: PerformanceService) { }

  ngOnInit() {

  this.getPerformance();
  }







 getPerformance() {
this.performanceService.getPerformance().subscribe((listPerformances) => {
console.log(listPerformances);
this.performances = listPerformances;
});
 }



savePerformance() {
const performance = new Performance();
performance.date = this.date;
performance.exercice = this.exercice;
performance.max = this.max;
console.log(performance);
this.performanceService.savePerformance(performance).subscribe((newPerformance: Performance) => {
console.log(newPerformance);
// this.completemsg = 'My performance for' + ' - ' + this.exercice + ' - ' + 'is saved !' ;

this.performanceService.getPerformance().subscribe((listPerformances) => {
  this.performances = listPerformances;
  });
});
}

}
