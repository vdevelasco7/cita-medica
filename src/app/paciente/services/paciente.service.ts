import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Paciente } from '../model/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private http = inject(HttpClient);

  list() {
    return this.http.get<Paciente[]>('http://localhost:8080/pacientes');
  }
  get(id: number) {
    return this.http.get<Paciente>(`http://localhost:8080/pacientes/${id}`);
  }
  create(paciente: Paciente) {
    return this.http.post<Paciente>('http://localhost:8080/pacientes', paciente);
  }
  update(id: number, paciente: Paciente) {
    return this.http.put<Paciente>(`http://localhost:8080/pacientes/${id}`, paciente);
  }
  delete(id: number) {
    return this.http.delete<void>(`http://localhost:8080/pacientes/${id}`);
  }
}
