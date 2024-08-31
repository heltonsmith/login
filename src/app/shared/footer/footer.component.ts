import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  usuario: string; // Campo para almacenar el nombre del usuario
  private authService = inject(AuthService); // Obtener el servicio de autenticación

  constructor() { }

  ngOnInit() {
    this.authService.usuario$.subscribe(usuario => this.usuario = usuario); // Obtiene el nombre del usuario logueado
  }

}
