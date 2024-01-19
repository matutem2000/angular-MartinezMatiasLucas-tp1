import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../models/usuarios.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrl: './modificar-usuario.component.scss'
})
export class ModificarUsuarioComponent {

  usuarioFormModif: FormGroup;

  @Output()
  usuarioCreado = new EventEmitter();
  
    constructor(
      public dialogRef: MatDialogRef<ModificarUsuarioComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { usuario: Usuario },
      private fb: FormBuilder){
      this.usuarioFormModif=this.fb.group({
        id: this.fb.control(''),
        nombre: this.fb.control('', Validators.required),
        apellido: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required),
        rol: this.fb.control('', Validators.required)
      });
    }

    ngOnInit() {
      // Cargar datos del usuario en el formulario al inicializar el componente
      this.cargarDatosUsuario();
    }
  
    cargarDatosUsuario() {
      // Patch los valores del usuario en el formulario
      this.usuarioFormModif.patchValue({
        id: this.data.usuario.id,
        nombre: this.data.usuario.nombre,
        apellido: this.data.usuario.apellido,
        email: this.data.usuario.email,
        password: this.data.usuario.password,
        rol: this.data.usuario.rol
      });
    }
  
  
    onSubmit(): void{
      
        /* this.usuarioCreado.emit(this.usuarioFormModif.value);
        this.usuarioFormModif.reset({
          markAsPristine: true,
          markAsUntouched: true
      });
      this.usuarioFormModif.markAsUntouched(); */

      const datosModificados = this.usuarioFormModif.value;
      const usuarioActualizado: Usuario = { ...this.data.usuario, ...datosModificados };

      console.log(datosModificados);
    }

// 
  cerrarModal() {
    this.dialogRef.close(); // Cierra el diálogo
  }

}
