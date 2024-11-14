import { Component, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../service/movie.service';
import { MovieSearchComponent } from "./movie-search/movie-search.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieSearchComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'] 
})
export class MovieListComponent implements OnInit {
  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchPopularMovies();
  }

  filteredMovie = computed(() => {
    const searchText = this.movieService.searchResults().toLowerCase();
    if (!searchText) {
      return this.movieService.popularMovies();
    }
  
    return this.movieService.popularMovies().filter((item) => {
      return item.title.toLowerCase().includes(searchText);
    });
  });
}
