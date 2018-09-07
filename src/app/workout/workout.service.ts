import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Workout } from '../workout';





@Injectable({
    providedIn: 'root'
})
export class WorkoutService {


    API_URL = '/api/workout';


    constructor(private http: HttpClient) {
    }


    save(workout: Workout): Observable<Workout> {
        return this.http.post<Workout>(this.API_URL, workout);
    }

    getWorkouts(): Observable <Workout[]> {
        return this.http.get<Workout[]>(this.API_URL);
    }
}
