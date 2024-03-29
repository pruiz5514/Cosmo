import { Component } from '@angular/core';
import { HeaderComponent } from './../../domains/shared/header/header.component'

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
