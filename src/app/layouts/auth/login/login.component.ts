import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})


export class LoginComponent {
  
  loginForm: FormGroup;

  //Array de usuarios
  roles = ['usuario', 'profesor', 'estudiante'];

  // Constructor para inicializar el formulario
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    
    console.log(this.loginForm.value);
  }
}
