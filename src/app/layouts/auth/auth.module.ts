// Importa las clases necesarias de Angular y Angular Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

// Decorador @NgModule para definir el módulo
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})

// Clase del módulo
export class AuthModule { }
