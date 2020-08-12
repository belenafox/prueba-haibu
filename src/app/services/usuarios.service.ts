import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../app/interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { } 

  getUsers() {
    return this.http.get<Usuario>(`https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user`);
  }
}
