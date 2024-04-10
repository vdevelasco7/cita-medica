import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./usuario-lista/usuario-lista.component')
    },
    {
        path: 'nuevo',
        loadComponent: () => import('./usuario-form/usuario-form.component')
    }
];
