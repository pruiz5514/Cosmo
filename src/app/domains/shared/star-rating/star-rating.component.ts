import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }

  // Se valida cuál estrella mostrar dependiendo del valor
  getStartImage(current: number): string {
    const previousHalf = current - 0.5;
    const imageName = this.stars >= current ? 'star-full' : this.stars >= previousHalf ? 'star-half' : 'star-empty';
    return `/assets/img/stars/${imageName}.svg`
  }

}
