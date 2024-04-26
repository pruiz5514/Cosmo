import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ContadorService } from '../services/contador.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(public contadorService: ContadorService) {}
}
