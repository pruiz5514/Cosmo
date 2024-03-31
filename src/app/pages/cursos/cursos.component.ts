import { Component } from '@angular/core';
import { HeaderComponent } from './../../domains/shared/header/header.component'
import { FooterComponent } from './../../domains/shared/footer/footer.component'
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLinkWithHref ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
