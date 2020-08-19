import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];
  usuarioBuscado = '';

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.usuarios);
  }

  async goToUser(usuario) {
    const modal = await this.modalController.create({
      component: UsuarioComponent,
      componentProps: {
        usuario
      }
    });
    modal.present();
  }

  findUser(event) {
    // console.log(event);
    this.usuarioBuscado = event.detail.value;
    console.log(this.usuarioBuscado)
  }

}
