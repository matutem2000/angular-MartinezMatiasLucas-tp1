import { Injectable } from '@angular/core';
import { Usuario } from '../../layouts/dashboard/pages/usuarios/models/usuarios.interface';
import { ModificarUsuarioComponent } from '../../layouts/dashboard/pages/usuarios/components/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from '../../layouts/dashboard/pages/usuarios/components/eliminar-usuario/eliminar-usuario.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Observable, delay, map, of } from 'rxjs';
import { LoadingService } from './loading.service';


let USERS_DB: Usuario[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@example.com',
    password: 'clave123',
    rol: 'estudiante'
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Gómez',
    email: 'maria@example.com',
    password: 'clave456',
    rol: 'administrador'
  },
  {
    id: 3,
    nombre: 'Pedro',
    apellido: 'Rodríguez',
    email: 'pedro@example.com',
    password: 'clave789',
    rol: 'profesor'
  }
];




@Injectable()
export class UserDataService {

  constructor(public dialog: MatDialog, private loadingService: LoadingService){};

 
//obtener usuarios
  getUsuarios() {
    return of (USERS_DB).pipe(delay(3000));
}
//crear usuarios
  createUser(payload: Usuario){
    const nextId = USERS_DB.length > 0 ? Math.max(...USERS_DB.map(user => user.id)) + 1 : 1;
    payload.id = nextId;
    USERS_DB.push(payload);
    return this.getUsuarios();
  }


// Eliminar usuario
eliminarUsuario(usuario: Usuario): Observable<Usuario[]> {
  console.log('eliminar en user-data.service');
  const dialogRef = this.dialog.open(EliminarUsuarioComponent, {
    data: { usuario },
  });

  return dialogRef.afterClosed().pipe(
    map((eliminado: boolean) => {
      if (eliminado) {
        // Eliminar el usuario del dataSource
        USERS_DB = USERS_DB.filter(u => u.id !== usuario.id);
      }
      return [...USERS_DB];
    })
  );
}


/* onUserSubmitted(ev: Usuario): void {
  // Calcular el próximo ID
  const nextId = this.dataSource.length > 0 ? Math.max(...this.dataSource.map(user => user.id)) + 1 : 1;

  // Crear el nuevo usuario con el próximo ID
const newUser: Usuario = {
 id: nextId,
 nombre: ev.nombre,
 apellido: ev.apellido,
 email: ev.email,
 password: ev.password,
 rol: ev.rol
};

  // Agregar el nuevo usuario al dataSource
  this.dataSource = [...this.dataSource, newUser];
}


// Obtener usuario por ID
getUsuarioPorId(id: number): Usuario | undefined {
 console.log(this.dataSource.find(usuario => usuario.id === id));
 return this.dataSource.find(usuario => usuario.id === id);
};

//Modificar usuario
   modificarUsuario(usuario: Usuario): void {
   
   const dialogRef = this.dialog.open(ModificarUsuarioComponent, {
     data: { usuario },
   });

   dialogRef.afterClosed().subscribe(result => {
     if (result) {
        this.dataSource = this.dataSource.map((u) =>
         u.id === usuario.id ? { ...u, ...result } : u
       );
     }
   });
 }

 
 // Eliminar usuario
  eliminarUsuario(usuario: Usuario): void {
    console.log('eliminar en user-data.service');
   const dialogRef = this.dialog.open(EliminarUsuarioComponent, {
     data: { usuario },
   });
 
   dialogRef.afterClosed().subscribe((eliminado: boolean) => {
     if (eliminado) {
       // Eliminar el usuario del dataSource
       this.dataSource = this.dataSource.filter(u => u.id !== usuario.id);
     }
   });
 } 

 
 

abrirModalModificar(usuario: Usuario | undefined){
 const dialogRef= this.dialog.open(ModificarUsuarioComponent, {
   
   data: {usuario}
 });
 dialogRef.afterClosed().subscribe(
   result => console.log('Dialog Result', result)
 );
} 


abrirModalEliminar(usuario: Usuario | undefined){
 const dialogRef= this.dialog.open(EliminarUsuarioComponent, {
   
   data: {usuario}
 });
 dialogRef.afterClosed().subscribe(
   result => console.log('Dialog Result', result)
 );
}  */

}