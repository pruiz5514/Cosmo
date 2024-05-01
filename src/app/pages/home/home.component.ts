import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { FooterComponent } from "../../domains/shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLinkWithHref, FooterComponent]
})
export class HomeComponent {

}
