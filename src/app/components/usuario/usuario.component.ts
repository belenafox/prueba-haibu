import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { validate } from 'rut.js';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  @Input() usuario;
  rutValidado: boolean;
  fechaValida: boolean;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.usuario.rut);

    // validamos si el rut es correcto
    if(validate(this.usuario.rut)) {
      this.rutValidado = true;
    } else {
      this.rutValidado = false;
    }

    // validamos si la fecha es correcta
    if(this.validarFecha(this.usuario.fechaNacimiento)) {
      this.fechaValida = true;
    } else {
      this.fechaValida = false;
    }
  }

  /**
   * función para cerrar modal
   */
  goBack() {
    this.modalCtrl.dismiss();
  }

  /**
   * función para verificar que la fecha es válida
   */
  validarFecha(fecha) {
    var fechaf = fecha.split('/');
    var d = fechaf[0];
    var m = fechaf[1];
    var y = fechaf[2];
    return m > 0 && m < 13 && y > 0 && y <32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
  }

}
