import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./usuario/usuario-lista/usuario-lista.component')
    },
    {
        path: 'nuevo',
        loadComponent: () => import('./usuario/usuario-form/usuario-form.component')
    }
];
