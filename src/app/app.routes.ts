import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./usuario-lista/usuario-lista.component')
    }
];
