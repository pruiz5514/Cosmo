import { Component, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { Preguntas } from './../../models/preguntas.models'

@Component({
  selector: 'app-sexto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './sexto.component.html',
  styleUrl: './sexto.component.scss'
})
export class SextoComponent {
  preguntas = signal <Preguntas[]>([
    {
      grado: 'sexto-1',
      id: 1,
      competencia: 'Resolución de problemas',
      enunciado: 'Emilia tiene un juego que consta de 48 fichas y debe repartirlas por igual entre todos los jugadores. La tabla muestra la cantidad de fichas que Emilia debe entregar a cada jugador de acuerdo con la cantidad de jugadores.',
      pregunta: 'Si hay 8 jugadores, ¿cuántas fichas debe repartir Emilia a cada jugador?',
      a: 10,
      b: 8,
      c: 6,
      d: 4,
      completed: false
    },
    {
      grado: 'sexto-2',
      id: 2,
      competencia: 'Resolución de problemas',
      enunciado: 'Un aerogenerador es un molino gigante que transforma la energía del viento en energía eléctrica. En una ciudad se instaló un tipo de aerogenerador que produce 400 kW de energía por día.',
      pregunta: '¿Cuánta electricidad, medida en kW, producirán 15 aerogeneradores de ese tipo durante 30 días de funcionamiento?',
      a: '180.000 kW',
      b: '120.000 kW',
      c: '72.000 kW',
      d: '6.000 kW',
      completed: false
    }
])}
