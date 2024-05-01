import { Component } from '@angular/core';
import { FooterComponent } from './../../domains/shared/footer/footer.component'
import { RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from '../../domains/shared/header/header.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLinkWithHref],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
