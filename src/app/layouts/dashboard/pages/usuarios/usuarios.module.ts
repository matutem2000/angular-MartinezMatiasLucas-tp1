import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import {MatTableModule} from '@angular/material/table';
import { UserFormCrearComponent } from './components/user-form-crear/user-form-crear.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
import { TituloGrande } from '../../../../directivas/titulo.directiva';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';
import { TouppercasePipe } from './pipes/touppercase.pipe';
import { UserDataService } from '../../../../core/services/user-data.service';
import { LoadingService } from '../../../../core/services/loading.service';



@NgModule({
  declarations: [
    UsuariosComponent,
    UserFormCrearComponent,
    TituloGrande,
    ModificarUsuarioComponent,
    EliminarUsuarioComponent,
    TouppercasePipe,
   
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsuariosComponent
  ],
  providers: [UserDataService, LoadingService]
})
export class UsuariosModule { }
