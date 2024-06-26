import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SextoComponent } from '../sexto/sexto.component';
import { PreguntasCursosService } from '../../domains/shared/services/preguntas-cursos.service';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ContadorService } from '../../domains/shared/services/contador.service';
import { ModalAyudaComponent } from '../../domains/shared/modal-ayuda/modal-ayuda.component';
import { ServicioPreguntasService } from '../../domains/shared/services/servicio-preguntas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.scss',
  imports: [ SextoComponent, CommonModule, HeaderComponent, FooterComponent, MatButtonModule, MatDialogModule]
})
export class EjerciciosComponent implements OnInit {
  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }
  private preguntasCurso = inject(PreguntasCursosService)
  preguntas = this.preguntasCurso.preguntasSexto
  nombreRuta: string | null = '';
  arrayFiltrado: any[] = [...this.preguntas];
  esCorrecta: boolean = false;
  isClickedButton: string | null = null;
  confirmacionEnvioRespuesta: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _matDialog: MatDialog,
    private router: Router,
    private contadorService: ContadorService
  , private servicioPreguntasService: ServicioPreguntasService) {}

// Se obtiene un array de tamaño uno que contiene informacion de la pregunta selccionada
  filtrarPregunta(): void {
    this.arrayFiltrado = this.preguntas.filter(pregunta => pregunta.codigo === this.nombreRuta);
  }

  // Se obtiene la ruta
  ngOnInit(): void {
    const codigo$: Observable<string> = this.route.params.pipe(map((p) => p['codigo']));
    codigo$.subscribe((codigo) => {
      this.nombreRuta = codigo;
      console.log(this.nombreRuta);
      this.filtrarPregunta()
      this.esCorrecta = false;
      this.isClickedButton = null;
      this.confirmacionEnvioRespuesta = false;
    })
  }

  // Asignacion de la respuesta elegida por el usuario, cambia la clase para poner un color difetente
  cambiarColor(opcion: string): void {
    this.isClickedButton = opcion
    console.log(this.isClickedButton)
  }

  cambiarEstado(opcion: boolean) {
    this.confirmacionEnvioRespuesta = opcion;
    console.log(this.confirmacionEnvioRespuesta);

    // Si la respuesta es correcta se almacena en el local storage
    this.esCorrecta = this.isClickedButton === this.arrayFiltrado[0].respuesta_correcta;
    if (this.nombreRuta != null && this.esCorrecta) {
      localStorage.setItem(this.nombreRuta, "completo");
      this.arrayFiltrado[0].completed = this.esCorrecta;
      this.agregarValor(100);
    } else {
      this.restarValor(30);
    }
  }

  // suma experiencia en el contador XP, el contador de estrellas e incrementa el contador de preguntas respondidas en la progress bar
  agregarValor(valor: number): void {
    this.contadorService.agregarValor(valor);
    this.contadorService.agregarValorEstrellas(this.arrayFiltrado[0].stars);
    this.servicioPreguntasService.incrementAnsweredQuestions();
  }

  // Resta puntos de experiencia en el contador XP
  restarValor(valor: number): void {
    this.contadorService.restarValor(valor);
  }

  // Resta  puntos de experiencia en el contador XP por el uso de ayudas
  restarAyuda(): void {
    this.contadorService.restarValor(15);
    this._matDialog.open(ModalAyudaComponent, {
      data: { ayuda: this.arrayFiltrado }
    })
  }

  // calcula el codigo de la siguiente pregunta
  siguientePregunta(): string {
    const numeroActual = parseInt(this.arrayFiltrado[0].codigo.split('-')[1], 10);
    if (this.arrayFiltrado[0] && this.arrayFiltrado[0].codigo && this.preguntas.length > numeroActual) {
      const nuevoCodigo = this.arrayFiltrado[0].codigo.split('-')[0] + '-' + (numeroActual + 1);
      console.log(nuevoCodigo)
      return nuevoCodigo;
    } else {
      return '';
    }
  }

  // Redirige a la siguiente pregunta
  irASiguiente() {
    const codigoSiguiente = this.siguientePregunta();
    if (codigoSiguiente ===''){
      this.router.navigate([`/sexto`]);
    } else {
    this.router.navigate([`/ejercicios/${codigoSiguiente}`]);
  }
}

}