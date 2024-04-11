import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export default class UsuarioFormComponent {
  private fb = inject(FormBuilder);
  private ruta = inject(Router);
  private usuarioServicio = inject(UsuarioService);

  form = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    usuario: ['', [Validators.required]],
    clave: ['', [Validators.required]]
  });

  create() {
    const usuario = this.form.value;
    this.usuarioServicio.create(usuario)
      .subscribe(() => {
        this.ruta.navigate(['/']);
      });
  }
}
