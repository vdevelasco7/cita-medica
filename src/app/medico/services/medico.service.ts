import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Medico } from '../model/medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private http = inject(HttpClient);

  list() {
    return this.http.get<Medico[]>('http://localhost:8080/medicos');
  }
  get(id: number) {
    return this.http.get<Medico>(`http://localhost:8080/medicos/${id}`);
  }
  create(medico: Medico) {
    return this.http.post<Medico>('http://localhost:8080/medicos', medico);
  }
  update(id: number, medico: Medico) {
    return this.http.put<Medico>(`http://localhost:8080/medicos/${id}`, medico);
  }
  delete(id: number) {
    return this.http.delete<void>(`http://localhost:8080/medicos/${id}`);
  }
}
