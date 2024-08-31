import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {

  nombre: string;
  private sharedService = inject(DatosPersonalesService);

  ngOnInit(): void {
    // Nos suscribimos directamente para recibir el valor más reciente.
    this.sharedService.nombre$.subscribe(nombre => {
      this.nombre = nombre;
    });
  }

}
