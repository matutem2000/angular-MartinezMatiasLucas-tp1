import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './profesores.component';



@NgModule({
  declarations: [
    ProfesoresComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ProfesoresComponent
  ]
})
export class ProfesoresModule { }
