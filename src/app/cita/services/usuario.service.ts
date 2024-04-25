import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cita } from '../model/cita.interface';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private http = inject(HttpClient);

  list() {
    return this.http.get<Cita[]>('http://localhost:8080/citas');
  }
  get(id: number) {
    return this.http.get<Cita>(`http://localhost:8080/citas/${id}`);
  }
  create(cita: Cita) {
    return this.http.post<Cita>('http://localhost:8080/citas', cita);
  }
  update(id: number, cita: Cita) {
    return this.http.put<Cita>(`http://localhost:8080/citas/${id}`, cita);
  }
  delete(id: number) {
    return this.http.delete<void>(`http://localhost:8080/citas/${id}`);
  }
}
