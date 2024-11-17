import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

  @Input() movie: any;


  convertNumber(number: number) {
    if(number) {
      return number.toFixed(1)
    }
    return 0
  }

  calculatePercentage(value: number) {
    const percentage = (value / 10) * 100;
    return percentage.toFixed(1);
  }

}
