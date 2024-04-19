import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'usuario',
        loadComponent: () => import('./usuario/usuario-lista/usuario-lista.component')
    },
    {
        path: 'usuario/nuevo',
        loadComponent: () => import('./usuario/usuario-form/usuario-form.component')
    },
    {
        path: 'usuario/:id/editar',
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
    }
    /*{
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

];
