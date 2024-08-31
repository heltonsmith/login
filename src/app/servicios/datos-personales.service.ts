import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
  private nombreSubject = new BehaviorSubject<string>(''); // Crear un BehaviorSubject para el nombre
  nombre$ = this.nombreSubject.asObservable(); // Crear un BehaviorSubject para el nombre

  constructor() { }

  setNombre(nombre: string): void {
    this.nombreSubject.next(nombre);  // Actualizar el nombre en el BehaviorSubject
  }

  getNombre(): string {
    return this.nombreSubject.getValue(); // Obtener el nombre del BehaviorSubject
  }
}
