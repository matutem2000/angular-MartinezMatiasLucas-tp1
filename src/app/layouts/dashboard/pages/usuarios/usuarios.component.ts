import { Component } from '@angular/core';
import { Usuario } from './models/usuarios.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  constructor(public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'apellidoYnombre', 'email', 'rol', 'acciones'];
  dataSource: Usuario[] = [
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

  onUserSubmitted(ev: Usuario): void {
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
  modificarUsuario(id: number): Usuario | undefined {
    const usuarioAModificar=this.dataSource.find(usuario => usuario.id === id);
   this.abrirModalModificar(usuarioAModificar);
    return usuarioAModificar;
  };
  

  //Eliminar usuario
  eliminarUsuario(id: number): Usuario | undefined {
    const usuarioAEliminar=this.dataSource.find(usuario => usuario.id === id);
   this.abrirModalEliminar(usuarioAEliminar);
    return usuarioAEliminar;
  };

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
  } 
 
  
}
