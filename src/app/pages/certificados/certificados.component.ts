import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {
  nombre = "Juan Perez"
  fecha = new Date()

  
  generar(): void {
    alert("accion por implementar");
  }
}
