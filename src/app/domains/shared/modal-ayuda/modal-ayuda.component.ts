import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PreguntasCursosService } from '../services/preguntas-cursos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal-ayuda',
  standalone: true,
  imports: [],
  templateUrl: './modal-ayuda.component.html',
  styleUrl: './modal-ayuda.component.scss'
})
export class ModalAyudaComponent {
  constructor(private _matDialogRef: MatDialogRef<ModalAyudaComponent>,private route: ActivatedRoute){}

  private preguntasCurso = inject(PreguntasCursosService)
  preguntas = this.preguntasCurso.preguntasSexto 

  nombreRuta: string | null = '';
  arrayFiltrado: any[] = [...this.preguntas]


  filtrarPregunta(): void {
    this.arrayFiltrado = this.preguntas.filter(pregunta => pregunta.codigo === this.nombreRuta);
  }

  ngOnInit(): void {
    this.nombreRuta = this.route.snapshot.paramMap.get('codigo');
    console.log(this.nombreRuta);
    this.filtrarPregunta()
  }
}
