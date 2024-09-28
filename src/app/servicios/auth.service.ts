import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { usuariosSimulados } from '../models/data.models';
import { WebService } from './web.service';
import { UsuarioAPI } from '../models/UsuarioAPI.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts
  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI>(null); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  buscarBD(usuario: string, clave: string){
    // Aquí puedes implementar la lógica de autenticación real, como llamando a una API.
    // Por simplicidad, vamos a simular una autenticación con un nombre de usuario y clave fijos.

    if (usuario === 'admin' && clave === 'admin') {
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.  // Activar
      this.usuarioSubject.next(usuario); // Actualizar el nombre de usuario si la autenticación es correcta.  // Actualizar el
      this.loginFailedSubject.next(false);  // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.  // Des
      this.loginFailedSubject.next(true);  // Establecer loginFailed a true si falla la autenticación
    }
  }


  buscarBD2(usuario: string, clave: string): void { // Simulación de la autenticación con base en datos fijas
    const usuarioEncontrado = usuariosSimulados.find( // Buscar un usuario en la lista de usuarios simulados
      u => u.usuario === usuario && u.clave === clave // Revisar si el usuario y la clave coinciden con los datos de un usuario
    );

    if (usuarioEncontrado) { // Si el usuario y la clave coinciden con los datos de un usuario, activar
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(usuarioEncontrado.nombreCompleto); // Actualizar el nombre completo del usuario autenticado.
      this.loginFailedSubject.next(false);  // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true);  // Establecer loginFailed a true si falla la autenticación
    }
  }

  buscarBD3(usuario: string, clave: string): Promise<boolean> { // Devuelve una promesa
    return new Promise((resolve) => {  // Simular la autenticación con un retraso de 4 segundos
      setTimeout(() => {  // Simular la autenticación con un retraso de 4 segundos
        const usuarioEncontrado = usuariosSimulados.find( // Buscar un usuario en la lista de usuarios simulados
          u => u.usuario === usuario && u.clave === clave // Revisar si el usuario y la clave coinciden con los datos de un usuario
        );

        if (usuarioEncontrado) { // Si el usuario y la clave coinciden con los datos de un usuario, activar
          this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
          this.usuarioSubject.next(usuarioEncontrado.nombreCompleto); // Actualizar el nombre completo del usuario autenticado.
          this.loginFailedSubject.next(false); // Restablecer loginFailed a false
          resolve(true); // Resuelve la promesa como `true` si la autenticación es exitosa
        } else {
          this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
          this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
          resolve(false); // Resuelve la promesa como `false` si la autenticación falla
        }
      }, 4000); // Retraso de 4000 ms = 4 segundos
    });
  }

  webservice = inject(WebService); // Obtener el servicio de webService
  async buscarBD4(usuario: string, clave: string){
    const url = 'https://66f73ae3b5d85f31a3424a28.mockapi.io/api/v1/'
    const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>; // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts

    const user = res.find(u => u.user === usuario && u.pass === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!');  // Autenticación exitosa!
      console.log(user);  // Nombre completo: Hel
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(user.name); // Actualizar el nombre completo del usuario autenticado.
      this.usuarioCompletoSubject.next(user); // Actualizar el usuario completo como objeto del usuario autenticado.
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
    }
  }


  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }

}
