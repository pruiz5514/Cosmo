import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { SextoComponent } from '../sexto/sexto.component';
import { PreguntasCursosService } from '../../domains/shared/services/preguntas-cursos.service';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [SextoComponent,CommonModule],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.scss'
})
export class EjerciciosComponent {
  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }

  private preguntasCurso = inject(PreguntasCursosService) 
  preguntas = this.preguntasCurso.preguntas 

}
