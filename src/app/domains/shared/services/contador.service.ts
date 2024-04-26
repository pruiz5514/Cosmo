import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContadorService {

  private contadorXPSubject: BehaviorSubject<number> = new BehaviorSubject(localStorage.getItem('contadorXP') ? );

  private readonly CONTADOR_STORAGE_KEY = 'contadorXP';

 /* constructor() {
    // Intenta recuperar el valor del contador de localStorage
    const storedValue = localStorage.getItem(this.CONTADOR_STORAGE_KEY);
    const initialValue = storedValue ? parseInt(storedValue, 10) : 0;
    this.contadorXPSubject = new BehaviorSubject<number>(initialValue);
  }*/

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

/*

export class ContadorService {

  contador_XP: number=0;

  getContador_XP() {
    return this.contador_XP;
  }

  agregarValor(valor:number) :void{ 
    this.contador_XP += valor;
}
 
  restarValor(valor:number):void{
  this.contador_XP -= valor;
 }

}

El servicio ContadorService gestiona el estado del contador utilizando un BehaviorSubject.
El componente ejerciciosComponent se suscribe al observable del contador en su método ngOnInit() y también restablece el contador cuando se carga el componente.
Cuando navegues hacia adelante o hacia atrás en la aplicación, el componente se volverá a cargar y el contador se restablecerá automáticamente gracias a la llamada a this.contadorService.restablecerContador() en ngOnInit().


-----ultima vez que me funcionó sin cambios adicionales---


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private contadorXPSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  get contadorXP$() {
    return this.contadorXPSubject.asObservable();
  }

  agregarValor(valor: number) {
    const contadorActual = this.contadorXPSubject.value;
    this.contadorXPSubject.next(contadorActual + valor);
  }

  restarValor(valor:number):void{
    const contadorActual = this.contadorXPSubject.value;
    this.contadorXPSubject.next(contadorActual - valor);
   }


}

----------------------------------------------ULTIMA QUE GUARDA EL PROGRESO

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



*/