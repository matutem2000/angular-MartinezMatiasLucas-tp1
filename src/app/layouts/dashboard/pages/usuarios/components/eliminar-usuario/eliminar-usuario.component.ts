import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../models/usuarios.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent {

  usuarioFormEliminar: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EliminarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { usuario: Usuario },
    private fb: FormBuilder
  ) {
    this.usuarioFormEliminar = this.fb.group({
      id: this.fb.control(''),
      nombre: this.fb.control('', Validators.required),
      apellido: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      rol: this.fb.control('', Validators.required)
    });
  }

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    this.usuarioFormEliminar.patchValue({
      id: this.data.usuario.id,
      nombre: this.data.usuario.nombre,
      apellido: this.data.usuario.apellido,
      email: this.data.usuario.email,
      password: this.data.usuario.password,
      rol: this.data.usuario.rol
    });
  }

 // eliminar-usuario.component.ts
confirmarEliminar(): void {
  console.log('Se ejecuta confirmarEliminar');
  this.usuarioEliminado.emit(true);  // Emitir evento de eliminación
  this.dialogRef.close(true);
}


  cerrarModal(): void {
    this.dialogRef.close();
  }
}
