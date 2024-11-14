import { Component } from '@angular/core';
import { MovieService } from '../../../service/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  constructor(private movieService: MovieService) {}
  searchValue: string = '';
  searchResults: any;

  onSearch(): void {
      this.movieService.searchMovies(this.searchValue);
  }
}
