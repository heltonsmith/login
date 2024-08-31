import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**', // Ruta comodín que captura todas las rutas no definidas
    redirectTo: 'not-found', // Redirige a la ruta 'not-found'
  },
];
