import { Component, OnInit } from '@angular/core';
import { Workout, Exercice, ExerciceType } from '../workout';
import { WorkoutService } from '../workout/workout.service';



@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  workouts: Workout[] = [];


  constructor(private workoutService: WorkoutService) {

  }

  ngOnInit() {
      this.getWorkouts() ;
  }

  getWorkouts() {
    this.workoutService.getWorkouts().subscribe(
      workouts => this.workouts = workouts


    );


  }


  /*
  workouts => this.workouts = workouts

  stockerWorkouts(workouts: Workout[]) {
    this.workouts = workouts;
  }

*/

  /*
      const workout = new Workout();
      workout.name = 'workout 1';
      workout.id = 1;
      this.workouts.push(workout) ;
   const exercice = new Exercice();
      exercice.id = 1;
      exercice.set = 3;
      exercice.rep = 3;
      workout.exercices.push(exercice);
      exercice.exerciceType = new ExerciceType();
      exercice.exerciceType.name = 'waby exercice';
  */
}


