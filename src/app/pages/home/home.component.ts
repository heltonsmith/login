import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from '../../servicios/datos-personales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  nombre: string;
  private sharedService = inject(DatosPersonalesService);

  constructor() { }
  //opción al injectable
  //constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  guardarNombre(): void {
    this.sharedService.setNombre(this.nombre);
    console.log('Nombre guardado:', this.nombre); // Agrega esta línea
  }

  eliminarNombre(): void {
    this.sharedService.setNombre('');
    console.log('Nombre eliminado:', this.nombre); // Agrega esta línea
  }
}
