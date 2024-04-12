import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Usuario } from '../model/usuario.interface';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export default class UsuarioListaComponent implements OnInit{
  private UsuarioService = inject(UsuarioService);

  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.UsuarioService.list()
      .subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  deleteUsuario(usuario: Usuario) {
    this.UsuarioService.delete(usuario.id)
      .subscribe(() => {
        this.loadAll();
      })
  }
}
