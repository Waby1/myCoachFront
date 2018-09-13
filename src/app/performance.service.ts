import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Performance } from './workout';


@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  API_URL = '/api/performance';

  constructor(private http: HttpClient) {
   }


   savePerformance(performance: Performance): Observable<Performance> {
    return this.http.post<Performance>(this.API_URL, performance);
}

getPerformance(): Observable <Performance[]> {
    return this.http.get<Performance[]>(this.API_URL);
}

}
