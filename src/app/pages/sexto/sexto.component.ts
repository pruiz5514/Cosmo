import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { Preguntas } from './../../models/preguntas.models'
import { NavComponent } from '../../domains/shared/nav/nav.component';
import { PreguntasCursosService } from './../../domains/shared/services/preguntas-cursos.service'
import { LocalStorageService } from '../../domains/shared/services/local-storage.service';
import { StarRatingComponent } from '../../domains/shared/star-rating/star-rating.component';

@Component({
  selector: 'app-sexto',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLinkWithHref, CommonModule, StarRatingComponent],
  templateUrl: './sexto.component.html',
  styleUrl: './sexto.component.scss'
})

export class SextoComponent implements OnInit {

  private preguntasCurso = inject(PreguntasCursosService)
  preguntas = this.preguntasCurso.preguntasSexto

  ngOnInit(): void {
    // Se recorren las preguntas vs cuáles han sido respondidas para marcarlas como realizadas
    for (let pregunta of this.preguntas) {
      pregunta.completed = this.retrieveFromLocalStorage(pregunta.codigo);
    }
  }

  // Valida si la pregunta fue respondida previamente
  retrieveFromLocalStorage(numeroPregunta: string): boolean {
    const value = localStorage.getItem(numeroPregunta);
    if (value != null) {
      return true;
    }
    return false;
  }
  
  getColor(isCompleted: boolean) {
    if (isCompleted) {
      return 'grey';
    }
    return 'azure-blue';
  }
}



