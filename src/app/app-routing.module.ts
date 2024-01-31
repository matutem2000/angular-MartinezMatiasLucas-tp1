import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './layouts/dashboard/pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './layouts/dashboard/pages/profesores/profesores.component';
import { UsuariosComponent } from './layouts/dashboard/pages/usuarios/usuarios.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'estudiantes', component: EstudiantesComponent
  },
  {
    path: 'profesores', component: ProfesoresComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent
  },
  {
    path: '**', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
