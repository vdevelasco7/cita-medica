import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../model/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient);

  list() {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios');
  }
  get(id: number) {
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`);
  }
  create(usuario: Usuario) {
    return this.http.post<Usuario>('http://localhost:8080/usuarios', usuario);
  }
  update(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(`http://localhost:8080/usuarios/${id}`, usuario);
  }
  delete(id: number) {
    return this.http.delete<void>(`http://localhost:8080/usuarios/${id}`);
  }
}
