import { Component, inject } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../model/paciente.interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-paciente-lista',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './paciente-lista.component.html',
  styleUrl: './paciente-lista.component.css'
})
export class PacienteListaComponent {
  private PacienteService = inject(PacienteService);

  pacientes: Paciente[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.PacienteService.list()
      .subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  deletePaciente(paciente: Paciente) {
    this.PacienteService.delete(paciente.id)
      .subscribe(() => {
        this.loadAll();
      })
  }
}
