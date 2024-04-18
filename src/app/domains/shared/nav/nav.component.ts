import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(public contadorService: ContadorService) {}
}
