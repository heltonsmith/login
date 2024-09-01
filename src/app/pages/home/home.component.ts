import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from '../../servicios/datos-personales.service';
import { WebService } from 'src/app/servicios/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  nombre: string;
  private sharedService = inject(DatosPersonalesService);

  cargando: boolean = false;
  private webservice = inject(WebService)

  constructor() { }
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

  async consumirServicio(){
    this.cargando = true;
    const url = 'https://66d412f55b34bcb9ab3d9394.mockapi.io/api/v1/'
    const res = await this.webservice.request('GET', url, 'users');
    console.log('Respuesta del servicio:', res);
    this.cargando = false;
  }
}
