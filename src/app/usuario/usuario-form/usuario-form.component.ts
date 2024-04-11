import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export default class UsuarioFormComponent implements OnInit{
  
  private fb = inject(FormBuilder);
  private ruta = inject(Router);
  private actRuta = inject(ActivatedRoute);
  private usuarioServicio = inject(UsuarioService);

  form?:FormGroup;

  ngOnInit(): void {
    const id = this.actRuta.snapshot.paramMap.get('id');

    if(id){
      this.usuarioServicio.get(parseInt(id))
        .subscribe(usuario => {
          this.form = this.fb.group({
            nombre: [usuario.nombre, [Validators.required]],
            apellidos: [usuario.apellidos, [Validators.required]],
            usuario: [usuario.usuario, [Validators.required]],
            clave: [usuario.clave, [Validators.required]]
          });
        })
    } else{
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        usuario: ['', [Validators.required]],
        clave: ['', [Validators.required]]
      });
    }
  }

  create() {
    const usuario = this.form!.value;
    this.usuarioServicio.create(usuario)
      .subscribe(() => {
        this.ruta.navigate(['/']);
      });
  }
}
