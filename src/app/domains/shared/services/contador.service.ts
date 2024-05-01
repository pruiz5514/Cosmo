import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContadorService {

  private contadorXPSubject: BehaviorSubject<number>;
  private contadorEstrellas: BehaviorSubject<number>;

  private readonly CONTADOR_STORAGE_KEY = 'contadorXP';
  private readonly CONTADOR_STAR_STORAGE_KEY = 'contadorEstrellas';

  constructor() {
    // Recupera el valor del contador de localStorage
    const storedValue = localStorage.getItem(this.CONTADOR_STORAGE_KEY);
    const initialValue = storedValue ? parseInt(storedValue, 10) : 0;
    this.contadorXPSubject = new BehaviorSubject<number>(initialValue);

    // Recupera el contador de estrellas de localStorage
    const starStoredValue = localStorage.getItem(this.CONTADOR_STAR_STORAGE_KEY);
    const starInitialValue = starStoredValue ? parseFloat(starStoredValue) : 0;
    this.contadorEstrellas = new BehaviorSubject<number>(starInitialValue);
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

  get contadorEstrellas$() {
    return this.contadorEstrellas.asObservable();
  }

  agregarValorEstrellas(valor: number) {
    const contadorActual = this.contadorEstrellas.value;
    const nuevoValor = contadorActual + valor;
    this.actualizarContadorEstrellas(nuevoValor);
  }

  restarValorEstrellas(valor: number): void {
    const contadorActual = this.contadorEstrellas.value;
    const nuevoValor = contadorActual - valor;
    this.actualizarContadorEstrellas(nuevoValor);
  }

  private actualizarContadorEstrellas(nuevoValor: number): void {
    // Actualiza el valor del contador y lo guarda en localStorage
    this.contadorEstrellas.next(nuevoValor);
    localStorage.setItem(this.CONTADOR_STAR_STORAGE_KEY, nuevoValor.toString());
  }

}