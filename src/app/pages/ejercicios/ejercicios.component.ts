import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, map} from 'rxjs';
import { SextoComponent } from '../sexto/sexto.component';
import { PreguntasCursosService } from '../../domains/shared/services/preguntas-cursos.service';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../domains/shared/nav/nav.component";
import { ContadorService } from '../../domains/shared/services/contador.service';
import { LocalStorageService } from '../../domains/shared/services/local-storage.service';
import { ModalAyudaComponent } from '../../domains/shared/modal-ayuda/modal-ayuda.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-ejercicios',
    standalone: true,
    templateUrl: './ejercicios.component.html',
    styleUrl: './ejercicios.component.scss',
    imports: [NavComponent,SextoComponent, CommonModule, HeaderComponent, FooterComponent, NavComponent,MatButtonModule, MatDialogModule]
})
export class EjerciciosComponent implements OnInit {
  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }

  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }
  private preguntasCurso = inject(PreguntasCursosService) 
  preguntas = this.preguntasCurso.preguntasSexto 
  nombreRuta: string | null = '';
  arrayFiltrado: any[] = [...this.preguntas];
  esCorrecta:boolean = false;
  isClickedButton:string | null = null;
  confirmacionEnvioRespuesta: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private _matDialog: MatDialog,
    private router: Router,
    private contadorService: ContadorService
  ) { }


  filtrarPregunta(): void {
    this.arrayFiltrado = this.preguntas.filter(pregunta => pregunta.codigo === this.nombreRuta);
  }
  ngOnInit(): void {
    this.nombreRuta = this.route.snapshot.paramMap.get('codigo');
    console.log(this.nombreRuta);
    this.filtrarPregunta()
  }
 
 
  cambiarColor(opcion:string):void{
    this.isClickedButton = opcion
    console.log(this.isClickedButton)
  }
  
  /*cambiarEstado(opcion:boolean):void{
    //confirma que se haya dado click en el boton de verificar
    this.confirmacionEnvioRespuesta = opcion
    console.log(this.confirmacionEnvioRespuesta)
    //Verifica que la opcion elegida por el usuario corresponda a la opcion correcta de la pregunta
     this.esCorrecta= this.isClickedButton === this.arrayFiltrado[0].respuesta_correcta 
    // La pregunta fue respondida y es correcta, se almacena
    if (this.nombreRuta != null && this.esCorrecta){
      localStorage.setItem(this.nombreRuta, "completo");
      this.arrayFiltrado[0].completed=this.esCorrecta
    }
  }*/

 
  /* cambiarEstado(opcion: boolean) {
    // Confirmar que se haya dado clic en el botón de verificar
    this.confirmacionEnvioRespuesta = opcion;
    console.log(this.confirmacionEnvioRespuesta);

    // Verificar que la opción elegida por el usuario corresponda a la opción correcta de la pregunta
    this.esCorrecta = this.isClickedButton === this.arrayFiltrado[0].respuesta_correcta;

    // Lógica para cambiar el estado según la respuesta y manejar el contador
    if (this.nombreRuta != null && this.esCorrecta) {
      localStorage.setItem(this.nombreRuta, "completo");
      this.arrayFiltrado[0].completed = this.esCorrecta;
      this.contadorService.agregarValor(100); // Agregar 100 puntos al contador si la respuesta es correcta
    } else {
      this.contadorService.restarValor(30); // Restar 30 puntos al contador si la respuesta es incorrecta
    }
  }*/

  cambiarEstado(opcion: boolean) {
    // Confirmar que se haya dado clic en el botón de verificar
    this.confirmacionEnvioRespuesta = opcion;
    console.log(this.confirmacionEnvioRespuesta);

    // Verificar que la opción elegida por el usuario corresponda a la opción correcta de la pregunta
    this.esCorrecta = this.isClickedButton === this.arrayFiltrado[0].respuesta_correcta;

    // Lógica para cambiar el estado según la respuesta y manejar el contador
    if (this.nombreRuta != null && this.esCorrecta) {
      localStorage.setItem(this.nombreRuta, "completo");
      this.arrayFiltrado[0].completed = this.esCorrecta;
      this.agregarValor(100); // Llamar a la función para agregar puntos al contador si la respuesta es correcta
    } else {
      this.restarValor(30); // Llamar a la función para restar puntos al contador si la respuesta es incorrecta
    }
  }


 

  agregarValor(valor:number):void {
    // Suma 100 puntos de experiencia en el contador XP
    this.contadorService.agregarValor(valor);
  }
  
  restarValor(valor:number):void{
    // Resta 30 puntos de experiencia en el contador XP
    this.contadorService.restarValor(valor);
  }
  
  restarAyuda():void{
    // Resta 15 puntos de experiencia en el contador XP por el uso de ayudas
    this.contadorService.restarValor(15);
    //inicializa un modal donde se muestra la ayuda solicitada para la pregunta en cuestion
    this._matDialog.open(ModalAyudaComponent,{
      data: {ayuda: this.arrayFiltrado}      
    })
  }

  siguientePregunta(): string {
    // si el array existe y es mayor que cero y las preguntas tienen la propiedad codigo entonces
    if (this.arrayFiltrado.length > 0 && this.arrayFiltrado[0].codigo) {
      //calcula el numero que acompaña el codigo
        const numeroActual = parseInt(this.arrayFiltrado[0].codigo.split('-')[1], 10);
      //genera el nuevo codigo aumentando en 1 la parte numerica 
        const nuevoCodigo = this.arrayFiltrado[0].codigo.split('-')[0] + '-' + (numeroActual + 1);
        console.log (nuevoCodigo)
      //devuelve el nuevo codigo actualizado, que correspondería al codigo de la siguiente pregunta
        return nuevoCodigo;
        
    } else {
      // si no, no devuelve nada, un espacio vacío...
      return '';
    }}

  irASiguiente(){
    const codigoSiguiente = this.siguientePregunta();
    this.router.navigate ([`/ejercicios/${codigoSiguiente}`]);
  } 


  }
/*
ANTES DE PASAR LOS CONDICIONALES PARA ACÁ

import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, map} from 'rxjs';
import { SextoComponent } from '../sexto/sexto.component';
import { PreguntasCursosService } from '../../domains/shared/services/preguntas-cursos.service';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../domains/shared/nav/nav.component";
import { ContadorService } from '../../domains/shared/services/contador.service';
import { LocalStorageService } from '../../domains/shared/services/local-storage.service';
import { ModalAyudaComponent } from '../../domains/shared/modal-ayuda/modal-ayuda.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-ejercicios',
    standalone: true,
    templateUrl: './ejercicios.component.html',
    styleUrl: './ejercicios.component.scss',
    imports: [NavComponent,SextoComponent, CommonModule, HeaderComponent, FooterComponent, NavComponent,MatButtonModule, MatDialogModule]
})
export class EjerciciosComponent implements OnInit {
  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }

  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }
  private preguntasCurso = inject(PreguntasCursosService) 
  preguntas = this.preguntasCurso.preguntasSexto 
  nombreRuta: string | null = '';
  arrayFiltrado: any[] = [...this.preguntas];
  esCorrecta:boolean = false;
  isClickedButton:string | null = null;
  confirmacionEnvioRespuesta: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private _matDialog: MatDialog,
    private router: Router,
    private contadorService: ContadorService
  ) { }


  filtrarPregunta(): void {
    this.arrayFiltrado = this.preguntas.filter(pregunta => pregunta.codigo === this.nombreRuta);
  }
  ngOnInit(): void {
    this.nombreRuta = this.route.snapshot.paramMap.get('codigo');
    console.log(this.nombreRuta);
    this.filtrarPregunta()
  }
 
 
  cambiarColor(opcion:string):void{
    this.isClickedButton = opcion
    console.log(this.isClickedButton)
  }
  
  cambiarEstado(opcion:boolean):void{
    //confirma que se haya dado click en el boton de verificar
    this.confirmacionEnvioRespuesta = opcion
    console.log(this.confirmacionEnvioRespuesta)
    //Verifica que la opcion elegida por el usuario corresponda a la opcion correcta de la pregunta
     this.esCorrecta= this.isClickedButton === this.arrayFiltrado[0].respuesta_correcta 
    // La pregunta fue respondida y es correcta, se almacena
    if (this.nombreRuta != null && this.esCorrecta){
      localStorage.setItem(this.nombreRuta, "completo");
      this.arrayFiltrado[0].completed=this.esCorrecta
    }
  }
 
  agregarValor():void {
    // Suma 100 puntos de experiencia en el contador XP
    this.contadorService.agregarValor(100);
  }
  
  restarValor():void{
    // Resta 30 puntos de experiencia en el contador XP
    this.contadorService.restarValor(30);
  }
  
  restarAyuda():void{
    // Resta 15 puntos de experiencia en el contador XP por el uso de ayudas
    this.contadorService.restarValor(15);
    //inicializa un modal donde se muestra la ayuda solicitada para la pregunta en cuestion
    this._matDialog.open(ModalAyudaComponent,{
      data: {ayuda: this.arrayFiltrado}      
    })
  }

  siguientePregunta(): string {
    // si el array existe y es mayor que cero y las preguntas tienen la propiedad codigo entonces
    if (this.arrayFiltrado.length > 0 && this.arrayFiltrado[0].codigo) {
      //calcula el numero que acompaña el codigo
        const numeroActual = parseInt(this.arrayFiltrado[0].codigo.split('-')[1], 10);
      //genera el nuevo codigo aumentando en 1 la parte numerica 
        const nuevoCodigo = this.arrayFiltrado[0].codigo.split('-')[0] + '-' + (numeroActual + 1);
        console.log (nuevoCodigo)
      //devuelve el nuevo codigo actualizado, que correspondería al codigo de la siguiente pregunta
        return nuevoCodigo;
        
    } else {
      // si no, no devuelve nada, un espacio vacío...
      return '';
    }}

  irASiguiente(){
    const codigoSiguiente = this.siguientePregunta();
    this.router.navigate([`/ejercicios/${codigoSiguiente}`], { replaceUrl: true });
  } 


  }











*/