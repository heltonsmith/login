import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { map } from 'rxjs';

export const redirectIfAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Obtener el servicio de autenticación
  const router = inject(Router); // Obtener el router

  return authService.isLoggedIn().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        router.navigate(['/home']); // Redirigir a la página de inicio si ya está autenticado
        return false; // Bloquear el acceso a la página de login
      } else {
        return true; // Permitir el acceso a la página de login si no está autenticado
      }
    })
  );
};
