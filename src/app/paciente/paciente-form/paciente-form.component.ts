import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../model/paciente.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './paciente-form.component.html',
  styleUrl: './paciente-form.component.css'
})
export default class PacienteFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private ruta = inject(Router);
  private actRuta = inject(ActivatedRoute);
  private pacienteServicio = inject(PacienteService);

  form?:FormGroup;
  paciente?: Paciente;
  errors: string[] = [];

  ngOnInit(): void {
    const id = this.actRuta.snapshot.paramMap.get('id');
    
    if(id){
      this.pacienteServicio.get(parseInt(id))
        .subscribe(paciente => {
          this.paciente = paciente;
          this.form = this.fb.group({
            nombre: [paciente.nombre, [Validators.required]],
            apellidos: [paciente.apellidos, [Validators.required]],
            usuario: [paciente.usuario, [Validators.required]],
            clave: [paciente.clave, [Validators.required]],
            nss: [paciente.NSS, [Validators.required]],
            numTarjeta: [paciente.numTarjeta, [Validators.required]],
            telefono: [paciente.telefono, [Validators.required]],
            direccion: [paciente.direccion, [Validators.required]]
          });
        })
    } else{
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        usuario: ['', [Validators.required]],
        clave: ['', [Validators.required]],
        nss: ['', [Validators.required]],
        numTarjeta: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        direccion: ['', [Validators.required]]
      });
    }
  }

  save() {
    if(this.form?.invalid) {
      return;
    }

    const pacienteForm = this.form!.value;
    let request: Observable<Paciente>;

    if(this.paciente) {
      request = this.pacienteServicio.update(this.paciente.id, pacienteForm)
    }else {
      request = this.pacienteServicio.create(pacienteForm)
    }
    request
      .subscribe({
        next: () =>{
          this.errors = [];
          this.ruta.navigate(['/']);
        },
        error: response => {
          this.errors = response.error.errors;
        }
      })
  }
}
