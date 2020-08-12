import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioComponent
  ],
  exports: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
