import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, map} from 'rxjs';
import { SextoComponent } from '../sexto/sexto.component';
import { PreguntasCursosService } from '../../domains/shared/services/preguntas-cursos.service';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../domains/shared/nav/nav.component";
import { ContadorService } from '../../domains/shared/services/contador.service';
import { LocalStorageService } from '../../domains/shared/services/local-storage.service';

@Component({
    selector: 'app-ejercicios',
    standalone: true,
    templateUrl: './ejercicios.component.html',
    styleUrl: './ejercicios.component.scss',
    imports: [NavComponent,SextoComponent, CommonModule, HeaderComponent, FooterComponent, NavComponent]
})
export class EjerciciosComponent implements OnInit {
  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }

  private preguntasCurso = inject(PreguntasCursosService) 
  preguntas = this.preguntasCurso.preguntasSexto 

  nombreRuta: string | null = '';
  arrayFiltrado: any[] = [...this.preguntas]


  constructor(private route: ActivatedRoute) { }

  filtrarPregunta(): void {
    this.arrayFiltrado = this.preguntas.filter(pregunta => pregunta.codigo === this.nombreRuta);
  }

  ngOnInit(): void {
    this.nombreRuta = this.route.snapshot.paramMap.get('codigo');
    console.log(this.nombreRuta);
    this.filtrarPregunta()
  }

 
  isClickedButton:string | null = null;

  cambiarColor(opcion:string):void{
    this.isClickedButton = opcion
    console.log(this.isClickedButton)
  }
  
  confirmacionEnvioRespuesta: boolean = false;

  cambiarEstado(opcion:boolean):void{
    this.confirmacionEnvioRespuesta = opcion
    console.log(this.confirmacionEnvioRespuesta)

    // La pregunta fue respondida, se almacena
    if (this.nombreRuta != null){
      localStorage.setItem(this.nombreRuta, "completo");
    }
  }

  private contadorService = inject(ContadorService);

  agregarValor():void {
    this.contadorService.agregarValor(100);
  }
  restarValor():void{
    this.contadorService.restarValor(30);
   }
   restarAyuda():void{
    this.contadorService.contador_XP -= 30;
   }
}
