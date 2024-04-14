import { Injectable, signal } from '@angular/core';
import { Preguntas } from '../../../models/preguntas.models';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PreguntasCursosService {
  preguntasSexto: Preguntas[] =([
    {
      grado: 'sexto',
      codigo: 'sexto-1',
      id: 1,
      competencia: 'Resolución de problemas',
      enunciado: 'Emilia tiene un juego que consta de 48 fichas y debe repartirlas por igual entre todos los jugadores. La tabla muestra la cantidad de fichas que Emilia debe entregar a cada jugador de acuerdo con la cantidad de jugadores.',
      imgEnunciado: "./../../../../assets/img/sextoImg/pregunta1.webp",
      pregunta: 'Si hay 8 jugadores, ¿cuántas fichas debe repartir Emilia a cada jugador?',
      a: 10,
      imgA: null,
      b: 8,
      imgB: null,
      c: 6,
      imgC: null,
      d: 4,
      imgD: null,
      completed: false
    },
    {
      grado: 'sexto',
      codigo: 'sexto-2',
      id: 2,
      competencia: 'Resolución de problemas',
      enunciado: 'Un aerogenerador es un molino gigante que transforma la energía del viento en energía eléctrica. En una ciudad se instaló un tipo de aerogenerador que produce 400 kW de energía por día.',
      imgEnunciado: null,
      pregunta: '¿Cuánta electricidad, medida en kW, producirán 15 aerogeneradores de ese tipo durante 30 días de funcionamiento?',
      a: '180.000 kW',
      imgA: null,
      b: '120.000 kW',
      imgB: null,
      c: '72.000 kW',
      imgC: null,
      d: '6.000 kW',
      imgD: null,
      completed: false
    },
    {
      grado: 'sexto',
      codigo: 'sexto-3',
      id: 3,
      competencia: 'Resolución de problemas',
      enunciado: 'Mario conduce el camión de una empresa de lácteos. Para transportar las cajas de leche él las empaca en canastillas como se muestra en la imagen.',
      imgEnunciado: './../../../../assets/img/sextoImg/pregunta3.webp',
      pregunta: '¿Cuántas cajas de leche se necesitan para llenar completamente la canastilla?',
      a: '7',
      imgA: null,
      b: '10',
      imgB: null,
      c: '13',
      imgC: null,
      d: '20',
      imgD: null,
      completed: false
    },
    {
      grado: 'sexto',
      codigo: 'sexto-4',
      id: 4,
      competencia: 'Resolución de problemas',
      enunciado: 'Para una tarea, Camila miró 5 películas y en cada una midió el tiempo en el que aparece en pantalla la protagonista. De ahí concluyó que, en promedio, la protagonista apareció 40 minutos.',
      imgEnunciado: null,
      pregunta: '¿Cuál de las siguientes tablas podría mostrar el tiempo que apareció en pantalla la protagonista en cada película?',
      a: null,
      imgA: './../../../../assets/img/sextoImg/pregunta4/sexto4A.webp',
      b: null,
      imgB: './../../../../assets/img/sextoImg/pregunta4/sexto4B.webp',
      c: null,
      imgC: './../../../../assets/img/sextoImg/pregunta4/sexto4C.webp',
      d: null,
      imgD: './../../../../assets/img/sextoImg/pregunta4/sexto4D.webp',
      completed: false
    },
    {
      grado: 'sexto',
      codigo: 'sexto-5',
      id: 5,
      competencia: 'Razonamiento.',
      enunciado: 'La figura muestra el diseño que hizo Jimena de una construcción de varios edificios escalonados para un proyecto de vivienda.',
      imgEnunciado: './../../../../assets/img/sextoImg/pregunta5.webp',
      pregunta: 'Si se quiere construir un sexto edificio, más alto, siguiendo el diseño de Jimena, ¿qué se debe hacer para determinar la altura de este edificio?',
      a: 'Multiplicar 8 m por 6.',
      imgA: null,
      b: 'Multiplicar 5,5 m por 6.',
      imgB: null,
      c: 'Sumar 2,5 m a la altura del edificio 5.',
      imgC: null,
      d: 'Sumar 10 m a la altura del edificio 5.',
      imgD: null,
      completed: false
    },
    {
      grado: 'sexto',
      codigo: 'sexto-6',
      id: 6,
      competencia: 'Razonamiento',
      enunciado: 'Un ciclista hizo el siguiente recorrido entre las calles de su barrio:',
      imgEnunciado: './../../../../assets/img/sextoImg/pregunta6/pregunta6.webp',
      pregunta: '¿Cuál de las siguientes tablas podría mostrar el tiempo que apareció en pantalla la protagonista en cada película?',
      a: null,
      imgA: './../../../../assets/img/sextoImg/pregunta6/sexto6A.webp',
      b: null,
      imgB: './../../../../assets/img/sextoImg/pregunta6/sexto6B.webp',
      c: null,
      imgC: './../../../../assets/img/sextoImg/pregunta6/sexto6C.webp',
      d: null,
      imgD: './../../../../assets/img/sextoImg/pregunta6/sexto6D.webp',
      completed: false
    },
])
  constructor() { }
}
