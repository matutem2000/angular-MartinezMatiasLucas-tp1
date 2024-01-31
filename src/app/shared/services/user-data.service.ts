import { Injectable } from '@angular/core';
import { Usuario } from '../../layouts/dashboard/pages/usuarios/models/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSource: Usuario[] = [
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

  getUsuarios(): Usuario[] {
    return [...this.dataSource];

}
