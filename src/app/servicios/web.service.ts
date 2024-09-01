import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  httpClient = inject(HttpClient);  // Inyectar HttpClient para hacer peticiones HTTP.  // Inyectar

  constructor() { }

  request(type: 'POST' | 'GET', url: string, path: string, body: any = {}){ // Crear una promesa para realizar la petición HTTP.  // Crear una pro
    return new Promise((resolve) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ${this.token}'
      }); // Agregar cabeceras personalizadas para la petición HTTP.  // A

      if (type == 'POST') {
        this.httpClient.post(url + '/' + path, body, {headers}).subscribe( data => { // Realizar la petición POST y resolver la promesa con el resultado.  // Real
          resolve(data); // Resuelve la promesa con el resultado.
          return;
        });
      }

      if (type == 'GET') {
        this.httpClient.get(url + '/' + path, {headers}).subscribe( data => {  // Realizar la petición GET y resolver la promesa con el resultado.  // Real
          resolve(data); // Resuelve la promesa con el resultado.
          return;
        });
      }
    });
  }

}
