import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { tap, startWith, map } from 'rxjs/operators';

import { Exercice, ExerciceType, Workout } from '../workout';

import { WorkoutService } from '../workout.service';
import { ExerciceTypeService } from '../exercices/exercicestype.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  // ici je déclare ce que je vais utiliser ce sont les attributs de la classe Workoutcompo

  exercices: Exercice[] = [];
  exerciceTypes: ExerciceType[] = [];
  filteredOptions: Observable<ExerciceType[]> = null;
  selectedExerciceType: ExerciceType = null;
  repetition: number = null;
  set: number = null;
  nameWorkout: string = null;
  myControl = new FormControl();
  errormessage = '';
  errormessageMenu = '';

  constructor(private exercicetypeService: ExerciceTypeService , private workoutservice: WorkoutService) {

  }

  ngOnInit() {
    this.refresh();
  }

  // methode pour reseter la page et les champs

  resetCharge() {
    console.log('resetCharge - Cleaning dataSource');
    this.errormessage = '';
    this.selectedExerciceType = null;

  }


  // methode pour refresher la page
  refresh() {
    this.exercicetypeService.getAll().subscribe((list) => {
      console.log(list);
      this.exerciceTypes = list;
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(

        startWith<string | ExerciceType>(''),
        tap(value => {
          if (typeof value !== 'string') {
            this.selectedExerciceType = value;
          }

          console.log('this selected exercice', this.selectedExerciceType);
        }),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.exerciceTypes.slice()),
    );
  }

  addExercice() {
    if (this.isExerciceFormCorrect()) {
      const exercice = new Exercice();
      exercice.rep = this.repetition;
      exercice.set = this.set;
      exercice.exerciceType = this.selectedExerciceType;
      this.exercices.push(exercice);
      this.resetExerciceForm();

    } else {
      this.errormessage = 'Please fill the form';
    }

  }

  isExerciceFormCorrect(): boolean {
    return (this.repetition !== null && this.repetition > 0
      && this.set !== null && this.set > 0
      && this.exerciceTypes !== null);
  }

  resetExerciceForm() {
    this.repetition = 0;
    this.set = 0;
    this.selectedExerciceType = new ExerciceType() ;
    this.errormessage = null;
  }


  displayFn(exer?): string | undefined {
    return exer ? exer.name : undefined;
  }

  // Méthode de création d'une seance
  // recuperer la valeur des champs , instancier un nouveau workout , ou je le nome ,
   // la liste des exo et le sauvegarder , qui sera de l'envoyer au svce .et ajouter le controle


  createWorkout() {
    const workout = new Workout();
    workout.name = this.nameWorkout;
    workout.exercices = this.exercices;
    this.workoutservice.save(workout).subscribe() ;
          this.resetExerciceForm();

  }


  private _filter(name: string): ExerciceType[] {
    const filterValue = name.toLowerCase();

    return this.exerciceTypes.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);

  }
}


// regarder ce que j'ai coté angular au niveau des champs
// faut que sa corresponde avec java
