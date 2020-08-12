import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios: Usuario[] = [];
  usuarioBuscado = '';

  constructor( private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsers()
    .subscribe( resp => {
      // @ts-ignore
      this.usuarios.push(...resp)
    })
  }

  findUser(event) {
    // console.log(event);
    this.usuarioBuscado = event.detail.value;
    console.log(this.usuarioBuscado)
  }
}
