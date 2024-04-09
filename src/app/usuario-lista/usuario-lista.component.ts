import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export default class UsuarioListaComponent implements OnInit{
  private UsuarioService = inject(UsuarioService);

  ngOnInit(): void {
    this.UsuarioService.list()
      .subscribe(usuarios => {
      console.log(usuarios);
    })
  }
}
