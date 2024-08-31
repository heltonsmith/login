import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  buscarBD(usuario: string, clave: string){
    // Aquí puedes implementar la lógica de autenticación real, como llamando a una API.
    // Por simplicidad, vamos a simular una autenticación con un nombre de usuario y clave fijos.

    if (usuario === 'admin' && clave === 'admin') {
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(usuario);
      this.loginFailedSubject.next(false);  // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);  // Establecer loginFailed a true si falla la autenticación
    }
  }


  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$;
  }

}
