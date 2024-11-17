import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  selectedMovie: any;
  genres: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ){}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      const movieIdNumber = +movieId;
      this.movieService.fetchMovieDetails(movieIdNumber).subscribe(
        () => {
          const movie = this.movieService.movieDetails();
          if (movie) {
            this.selectedMovie = movie;
          } else {
            this.router.navigate(['']);
          }
        },
        (error) => {
          console.error('Failed to fetch movie details', error);
          this.router.navigate(['']);
        }
      );
    } else {
      this.router.navigate(['']);
    }
  }
}
