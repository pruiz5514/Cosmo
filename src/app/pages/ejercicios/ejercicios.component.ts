import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.scss'
})
export class EjerciciosComponent {
  constructor(route:ActivatedRoute){
    const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
    grado.subscribe((grado) => {console.log(grado)})
  }
}
