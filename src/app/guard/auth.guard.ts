import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Obtener el servicio de autenticación
  const router = inject(Router);  // Obtener el router

  return authService.isLoggedIn().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true; // Permitir acceso si está autenticado
      } else {
        router.navigate(['/login']); // Redirigir al login si no está autenticado
        return false; // Denegar acceso si no está autenticado
      }
    })
  );
};
