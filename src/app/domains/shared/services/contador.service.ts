import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContadorService {

  private contadorXPSubject: BehaviorSubject<number>;

  private readonly CONTADOR_STORAGE_KEY = 'contadorXP';

  constructor() {
    // Intenta recuperar el valor del contador de localStorage
    const storedValue = localStorage.getItem(this.CONTADOR_STORAGE_KEY);
    const initialValue = storedValue ? parseInt(storedValue, 10) : 0;
    this.contadorXPSubject = new BehaviorSubject<number>(initialValue);
  }

  get contadorXP$() {
    return this.contadorXPSubject.asObservable();
  }

  agregarValor(valor: number) {
    const contadorActual = this.contadorXPSubject.value;
    const nuevoValor = contadorActual + valor;
    this.actualizarContador(nuevoValor);
  }

  restarValor(valor: number): void {
    const contadorActual = this.contadorXPSubject.value;
    const nuevoValor = contadorActual - valor;
    this.actualizarContador(nuevoValor);
  }

  private actualizarContador(nuevoValor: number): void {
    // Actualiza el valor del contador y lo guarda en localStorage
    this.contadorXPSubject.next(nuevoValor);
    localStorage.setItem(this.CONTADOR_STORAGE_KEY, nuevoValor.toString());
  }

}