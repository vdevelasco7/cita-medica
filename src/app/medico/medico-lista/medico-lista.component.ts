import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../model/medico.interface';

@Component({
  selector: 'app-medico-lista',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './medico-lista.component.html',
  styleUrl: './medico-lista.component.css'
})
export default class MedicoListaComponent implements OnInit{
  private MedicoService = inject(MedicoService);

  medicos: Medico[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.MedicoService.list()
      .subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  deleteMedico(medico: Medico) {
    this.MedicoService.delete(medico.id)
      .subscribe(() => {
        this.loadAll();
      })
  }
}
