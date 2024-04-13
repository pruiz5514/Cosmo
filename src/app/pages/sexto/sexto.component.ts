import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { Preguntas } from './../../models/preguntas.models'
import { NavComponent } from '../../domains/shared/nav/nav.component';
import {PreguntasCursosService } from './../../domains/shared/services/preguntas-cursos.service'

@Component({
  selector: 'app-sexto',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './sexto.component.html',
  styleUrl: './sexto.component.scss'
})
export class SextoComponent {

  private preguntasCurso = inject(PreguntasCursosService) 
  preguntas = this.preguntasCurso.preguntasSexto 
}
