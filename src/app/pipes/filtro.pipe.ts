import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    // console.log(arreglo)
    if (texto === '') {
      return arreglo;
    }
    return arreglo.filter(user => {
      var nombre = user.nombre + user.apellido;
      return nombre.toLowerCase()
              .includes(texto.toLowerCase())
    })
  }

}
