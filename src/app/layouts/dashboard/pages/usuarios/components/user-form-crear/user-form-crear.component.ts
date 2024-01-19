import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-crear',
  templateUrl: './user-form-crear.component.html',
  styleUrl: './user-form-crear.component.scss'
})
export class UserFormCrearComponent {
  usuarioForm: FormGroup;

@Output()
usuarioCreado = new EventEmitter();

  constructor(private fb: FormBuilder){
    this.usuarioForm=this.fb.group({
      nombre: this.fb.control('', Validators.required),
      apellido: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      rol: this.fb.control('', Validators.required)
    });
  }

  onSubmit(): void{
    
      this.usuarioCreado.emit(this.usuarioForm.value);
      this.usuarioForm.reset({
        markAsPristine: true,
        markAsUntouched: true
    });
    this.usuarioForm.markAsUntouched();
  }


}