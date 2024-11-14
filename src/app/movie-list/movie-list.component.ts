import { Component } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(value => {
      console.log(value);
      
    })
    
  }
}
