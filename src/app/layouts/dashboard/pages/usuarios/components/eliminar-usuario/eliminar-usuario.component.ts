import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../models/usuarios.interface';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrl: './eliminar-usuario.component.scss'
})
export class EliminarUsuarioComponent {
   constructor(
    public dialogRef: MatDialogRef<EliminarUsuarioComponent>, // Inyecta MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: { usuario: Usuario }
  ) {}
  
    cerrarModal() {
      this.dialogRef.close(); // Cierra el diálogo
    } 

}
