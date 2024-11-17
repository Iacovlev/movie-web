import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'dbf6908a0fc03d060eca24dc645e6c6d';
  private baseUrl = 'https://api.themoviedb.org/3';

  popularMovies = signal<any[]>([]);
  movieDetails = signal<any>(null);
  searchResults = signal<any>('');

  constructor(
    private http: HttpClient
  ) { }

  fetchPopularMovies() {
    this.http
    .get<any>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`)
    .subscribe(data => this.popularMovies.set(data.results));
  }

  searchMovies(query: string): void {
    this.http
      .get<any>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`)
      .subscribe(data => this.searchResults.set(data.results));
  }

  fetchMovieDetails(movieId: number): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`)
      .pipe(
        tap(data => this.movieDetails.set(data)) // сохраняем данные
      );
  }

}
