import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

interface UsuarioAPI { // Definir la interface para los usuarios de la API
  user: string,
  pass: string,
  name: string,
  phone: string,
  rol: string
  id: string
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy {

  nombre: string; // Campo para almacenar el nombre
  private sharedService = inject(DatosPersonalesService); // Obtener el servicio de datos personales

  private authService = inject(AuthService); // Obtener el servicio de autenticación
  usuario: string; // Campo para almacenar el nombre del usuario
  usuarioCompleto: UsuarioAPI; // Campo para almacenar el nombre del usuario

  subscriptionDatosPersonales: Subscription; // Subscripción para el observable del nombre del usuario
  subscriptionAuthService: Subscription; // Subscripción para el observable del estado de autenticación

  constructor() { }

  ngOnInit() {
    this.subscriptionDatosPersonales = this.sharedService.nombre$.subscribe(nombre => {
      this.nombre = nombre
      console.log('Header:', nombre);
    }); // Obtiene el nombre del

    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario
      console.log('Header:', usuario);
    }); // Obtiene el nombre del usuario logueado

    this.subscriptionAuthService = this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
      this.usuarioCompleto = usuarioCompleto;
    });
  }

  ngOnDestroy() {
    this.subscriptionDatosPersonales?.unsubscribe(); // Desuscribirse del observable del nombre del usuario
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }

}
