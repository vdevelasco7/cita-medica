import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CitaService } from '../services/usuario.service';
import { Cita } from '../model/cita.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cita-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './cita-form.component.html',
  styleUrl: './cita-form.component.css'
})
export default class CitaFormComponent implements OnInit{
 
  private fb = inject(FormBuilder);
  private ruta = inject(Router);
  private actRuta = inject(ActivatedRoute);
  private citaServicio = inject(CitaService);

  form?:FormGroup;
  cita?: Cita;
  errors: string[] = [];

  ngOnInit(): void {
    const id = this.actRuta.snapshot.paramMap.get('id');
    
    if(id){
      this.citaServicio.get(parseInt(id))
        .subscribe(cita => {
          this.cita = cita;
          this.form = this.fb.group({
            fechaHora: [cita.fechaHora, [Validators.required]],
            motivoCita: [cita.motivoCita, [Validators.required]],
            attribute11: [cita.attribute11, [Validators.required]]
          });
        })
    } else{
      this.form = this.fb.group({
        fechaHora: ['', [Validators.required]],
        motivoCita: ['', [Validators.required]],
        attribute11: ['', [Validators.required]]
      });
    }
  }

  save() {
    if(this.form?.invalid) {
      return;
    }

    const citaForm = this.form!.value;
    let request: Observable<Cita>;

    if(this.cita) {
      request = this.citaServicio.update(this.cita.id, citaForm)
    }else {
      request = this.citaServicio.create(citaForm)
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
