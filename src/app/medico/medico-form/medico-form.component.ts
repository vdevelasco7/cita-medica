import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Medico } from '../model/medico.interface';
import { MedicoService } from '../services/medico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medico-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './medico-form.component.html',
  styleUrl: './medico-form.component.css'
})
export default class MedicoFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  private ruta = inject(Router);
  private actRuta = inject(ActivatedRoute);
  private medicoServicio = inject(MedicoService);

  form?:FormGroup;
  medico?: Medico;
  errors: string[] = [];

  ngOnInit(): void {
    const id = this.actRuta.snapshot.paramMap.get('id');
    
    if(id){
      this.medicoServicio.get(parseInt(id))
        .subscribe(medico => {
          this.medico = medico;
          this.form = this.fb.group({
            nombre: [medico.nombre, [Validators.required]],
            apellidos: [medico.apellidos, [Validators.required]],
            usuario: [medico.usuario, [Validators.required]],
            clave: [medico.clave, [Validators.required]],
            numColegiado: [medico.numColegiado, [Validators.required]]
          });
        })
    } else{
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        usuario: ['', [Validators.required]],
        clave: ['', [Validators.required]],
        numColegiado: ['', [Validators.required]]
      });
    }
  }

  save() {
    if(this.form?.invalid) {
      return;
    }

    const medicoForm = this.form!.value;
    let request: Observable<Medico>;

    if(this.medico) {
      request = this.medicoServicio.update(this.medico.id, medicoForm)
    }else {
      request = this.medicoServicio.create(medicoForm)
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
