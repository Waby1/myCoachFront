import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ExerciceType } from './workout';


//  ATTENTION ICI NOMRMALEMENT LE NOM DU SERVICE CEST EXERCICE TYPE
@Injectable({
  providedIn: 'root'
})
export class ExerciceTypeService {
// c une constante
  API_URL = '/api/exerciceType';


  constructor(private http: HttpClient) {

  }

  getAll(): Observable<ExerciceType[]> {
    return this.http.get<ExerciceType[]>(this.API_URL);

  }
}
