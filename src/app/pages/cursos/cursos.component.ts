import { Component } from '@angular/core';
import { FooterComponent } from './../../domains/shared/footer/footer.component'
import { RouterLinkWithHref } from '@angular/router';
import { NavComponent } from '../../domains/shared/nav/nav.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLinkWithHref ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
