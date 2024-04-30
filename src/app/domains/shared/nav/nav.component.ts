import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ContadorService } from '../services/contador.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ServicioPreguntasService } from '../services/servicio-preguntas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkWithHref, MatProgressBarModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent {

  constructor(public contadorService: ContadorService, private servicioPreguntasService: ServicioPreguntasService) {
    this.servicioPreguntasService.answeredQuestions$.subscribe(value => this.preguntasRespondidas = value);
  }

  //IMPORTANTE!!
  //Modificar esta parte según el número de preguntas que se suban!!

  preguntasTotales: number = 8;
  preguntasRespondidas: number = 0;

  getPorcentaje(): number {
    return Math.round((this.preguntasRespondidas / this.preguntasTotales) * 100);
  }

  alResponderPreguntas(): void {
    this.preguntasRespondidas++;
  }

}