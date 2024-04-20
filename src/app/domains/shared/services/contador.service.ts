import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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