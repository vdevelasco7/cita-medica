import { Routes } from '@angular/router';
import UsuarioListaComponent from './usuario/usuario-lista/usuario-lista.component';
import MedicoListaComponent from './medico/medico-lista/medico-lista.component';
import UsuarioFormComponent from './usuario/usuario-form/usuario-form.component';
import MedicoFormComponent from './medico/medico-form/medico-form.component';
import { PacienteListaComponent } from './paciente/paciente-lista/paciente-lista.component';
import PacienteFormComponent from './paciente/paciente-form/paciente-form.component';

export const routes: Routes = [
    
    //USUARIO
    {path: 'usuario', component: UsuarioListaComponent},
    {path: 'usuario/nuevo', component: UsuarioFormComponent},
    {path: 'usuario/:id/editar', component: UsuarioFormComponent},

    //MEDICO
    {path: 'medico', component: MedicoListaComponent},
    {path: 'medico/nuevo', component: MedicoFormComponent},
    {path: 'medico/:id/editar', component: MedicoFormComponent},

    //PACIENTE
    {path: 'paciente', component: PacienteListaComponent},
    {path: 'paciente/nuevo', component: PacienteFormComponent},
    {path: 'paciente/:id/editar', component: PacienteFormComponent}
    
];
    
    
    /*{
        path: 'usuario',
        loadComponent: () => import('./usuario/usuario-lista/usuario-lista.component')
    },
    {
        path: 'nuevo',
        loadComponent: () => import('./usuario/usuario-form/usuario-form.component')
    },
    {
        path: ':id/editar',
        loadComponent: () => import('./usuario/usuario-form/usuario-form.component')
    },
    {
    
        path: 'medico',
        loadComponent: () => import('./medico/medico-lista/medico-lista.component')
    },
    {
        path: 'medico/nuevo',
        loadComponent: () => import('./medico/medico-form/medico-form.component')
    },
    {
        path: 'medico/:id/editar',
        loadComponent: () => import('./medico/medico-form/medico-form.component')
    },
    {
        path: 'paciente',
        loadComponent: () => import('./paciente/paciente-lista/paciente-lista.component')
    },
    {
        path: 'paciente/nuevo',
        loadComponent: () => import('./paciente/paciente-form/paciente-form.component')
    },
    {
        path: 'paciente/:id/editar',
        loadComponent: () => import('./paciente/paciente-form/paciente-form.component')
    }
    */

