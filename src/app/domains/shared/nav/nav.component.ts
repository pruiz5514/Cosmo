import { Component, OnInit } from '@angular/core';
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

export class NavComponent implements OnInit{

   //IMPORTANTE!!
  //Modificar esta parte según el número de preguntas que se suban!!

  preguntasTotales: number = 8;
  preguntasRespondidas: number = 0;

  constructor(public contadorService: ContadorService, private servicioPreguntasService: ServicioPreguntasService) {
    this.preguntasTotales = 10; // asumiendo 10 preguntas totales
    this.preguntasRespondidas = this.countAnsweredQuestions();
  }

  getPorcentaje(): number {
    return Math.round((this.preguntasRespondidas / this.preguntasTotales) * 100);
  }
  
  private countAnsweredQuestions(): number {
    let answeredCount = 0;
    for (let i = 1; i <= this.preguntasTotales; i++) {
      if (localStorage.getItem(`sexto-${i}`) === 'completo') {
        answeredCount++;
      }
    }
    return answeredCount;
  }

  ngOnInit() {
    this.servicioPreguntasService.answeredQuestions$.subscribe(value => {
      this.preguntasRespondidas = value;
    });
  }
}