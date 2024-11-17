import { Component, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../service/movie.service';
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { Router } from '@angular/router';
import { MovieComponent } from "./movie/movie.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieSearchComponent, MovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'] 
})
export class MovieListComponent implements OnInit {
  constructor(
    public movieService: MovieService, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.movieService.fetchPopularMovies();
  }
    

  filteredMovie = computed(() => {
    const searchResults = this.movieService.searchResults();
    const popularMovies = this.movieService.popularMovies();
  
    if (!searchResults || searchResults.length === 0) {
      return popularMovies;
    }
  
    return searchResults; 
  });

  openDetails(selectedMovieId: any) {
    this.router.navigate(['/details', selectedMovieId]);
  }
}
