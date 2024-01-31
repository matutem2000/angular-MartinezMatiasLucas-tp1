import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';



@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EstudiantesComponent
  ]
})
export class EstudiantesModule { }
