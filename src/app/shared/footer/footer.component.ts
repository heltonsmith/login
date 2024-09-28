import { Component, inject, OnInit } from '@angular/core';
import { UsuarioAPI } from 'src/app/models/UsuarioAPI.models';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  usuario: string; // Campo para almacenar el nombre del usuario
  private authService = inject(AuthService); // Obtener el servicio de autenticación
  color: string; // Campo para almacenar el color del footer

  usuarioCompleto: UsuarioAPI; // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts

  constructor() { }

  ngOnInit() {
    this.authService.usuario$.subscribe(usuario => this.usuario = usuario); // Obtiene el nombre del usuario logueado
    this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
      this.usuarioCompleto = usuarioCompleto; // Almacena los datos del usuario en el footer (en caso de estar logueado)
      console.log('Footer:', this.usuarioCompleto); // Muestra en consola los datos del usuario al cargar el footer (en caso de estar logueado)
    });
  }

  getColor() {
    if (this.usuario === 'admin') {
      return 'blue';
    } else {
      return 'green';
    }
  }

}
