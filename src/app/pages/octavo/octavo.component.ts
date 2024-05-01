import { Component } from '@angular/core';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from "../../domains/shared/footer/footer.component";

@Component({
    selector: 'app-octavo',
    standalone: true,
    templateUrl: './octavo.component.html',
    styleUrl: './octavo.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class OctavoComponent {

}
