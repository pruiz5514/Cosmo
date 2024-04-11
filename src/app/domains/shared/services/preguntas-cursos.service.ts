import { Injectable, signal } from '@angular/core';
import { Preguntas } from '../../../models/preguntas.models';

@Injectable({
  providedIn: 'root'
})
export class PreguntasCursosService {
  preguntas = signal <Preguntas[]>([
    {
      grado: 'sexto',
      codigo: 'sexto-1',
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
      grado: 'sexto',
      codigo: 'sexto-2',
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
])
  constructor() { }
}
