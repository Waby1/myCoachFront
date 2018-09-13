
// tslint:disable-next-line:max-line-length
// ici se place les imports des components créés et des fonctionalités déclarées en import  attention : tapper la commande ng add @angular/material pour ajouter angular material 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';


import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { WorkoutComponent } from './workout/workout.component';
import { ProgramComponent } from './program/program.component';
import { PerformancesComponent } from './performances/performances.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { MaxComponent } from './max/max.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'contactus', component: ContactUsComponent},
{path: 'profile', component: MyProfileComponent},
{path: 'program', component: ProgramComponent},
{path: 'exercices', component: ExercicesComponent},
{path: 'workout', component: WorkoutComponent},
{path: 'performances', component: PerformancesComponent},
{path: 'max', component: MaxComponent}

];


// ici se déclare uniquement les components créées via ng g c

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactUsComponent,
    MyProfileComponent,
    NavBarComponent,
    FooterComponent,
    WorkoutComponent,
    ProgramComponent,
    PerformancesComponent,
    ExercicesComponent,
    MaxComponent,
  ],



// ici j'importe les modules via la doc angular

  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatSidenavModule,
    MatChipsModule,
    MatAutocompleteModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
  ],




  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
