import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitaService } from '../services/usuario.service';
import { Cita } from '../model/cita.interface';

@Component({
  selector: 'app-cita-lista',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './cita-lista.component.html',
  styleUrl: './cita-lista.component.css'
})
export default class CitaListaComponent implements OnInit{
  private CitaService = inject(CitaService);

  citas: Cita[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.CitaService.list()
      .subscribe(citas => {
      this.citas = citas;
    });
  }

  deleteCita(cita: Cita) {
    this.CitaService.delete(cita.id)
      .subscribe(() => {
        this.loadAll();
      })
  }
}
