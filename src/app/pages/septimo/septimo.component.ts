import { Component } from '@angular/core';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from "../../domains/shared/footer/footer.component";

@Component({
    selector: 'app-septimo',
    standalone: true,
    templateUrl: './septimo.component.html',
    styleUrl: './septimo.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class SeptimoComponent {

}
