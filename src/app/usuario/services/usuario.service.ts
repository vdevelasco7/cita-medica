import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient);

  list() {
    return this.http.get('http://localhost:8080/usuarios');
  }
  get(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`);
  }
  create(usuario: any) {
    return this.http.post('http://localhost:8080/usuarios', usuario);
  }
  update(id: number, usuario: any) {
    return this.http.put(`http://localhost:8080/usuarios/${id}`, usuario);
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`);
  }
}
