import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref,NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
