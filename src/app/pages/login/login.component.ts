import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  usuario: string = ''; // Campo de entrada para el usuario
  clave: string = ''; // Campos de entrada para el usuario y clave

  private authService = inject(AuthService);  // Obtener el servicio de autenticación
  private router = inject(Router);  // Obtener el servicio de navegación

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean; // Variable para almacenar el estado de loginFailed

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed); // Obtener el estado de loginFailed
  }

  constructor() {}

  login(usuario: string, clave: string): void {

    this.authService.buscarBD(usuario, clave); // Intentar hacer login
    //this.authService.buscarBD2(usuario, clave); // Intentar hacer login con base en datos fijos

    // Suscribirse al observable para verificar el estado de autenticación
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {

      if (isAuthenticated) {
        this.usuario = ''; // Limpiar el campo de usuario
        this.clave = ''; // Limpiar el campo de clave
        this.router.navigate(['/store']); // Redirigir al usuario si el login es exitoso
      } else {
        this.loginFailed = true; // Mostrar mensaje de error si el login falla
      }
    });
  }

  /*
  isLoading: boolean = false; // Variable para mostrar el estado de carga
  async login(usuario: string, clave: string): Promise<void> { // Simular la autenticación con un retraso de 4 segundos
    this.isLoading = true; // Activar el estado de carga
    this.loginFailed = false; // Resetear el estado de loginFailed al iniciar sesión

    const isAuthenticated = await this.authService.buscarBD3(usuario, clave); // Esperar a que se complete la autenticación

    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    if (isAuthenticated) {
      this.usuario = ''; // Limpiar el campo de usuario
      this.clave = ''; // Limpiar el campo de clave
      this.router.navigate(['/store']); // Redirigir al usuario si el login es exitoso
    } else {
      this.loginFailed = true; // Mostrar mensaje de error si el login falla
    }
  }*/

}
