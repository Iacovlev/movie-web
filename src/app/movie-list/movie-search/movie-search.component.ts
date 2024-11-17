import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../service/movie.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  searchValue: string = '';

  searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe(query => {
        this.movieService.searchMovies(query);
      });
  }

}
