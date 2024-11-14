import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'dbf6908a0fc03d060eca24dc645e6c6d';
  private baseUrl = 'https://api.themoviedb.org/3';

  // Сигналы для отслеживания состояния данных
  popularMovies = signal<any[]>([]);
  movieDetails = signal<any>(null);
  searchResults = signal<any>('');

  constructor(
    private http: HttpClient
  ) { }

  fetchPopularMovies() {
    this.http.get<any>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`)
      .subscribe(data => this.popularMovies.set(data.results));
  }

  searchMovies(query: string){
    this.searchResults.set(query);
  }

  fetchMovieDetails(movieId: number) {
    this.http.get<any>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`)
      .subscribe(data => this.movieDetails.set(data));
  }
}
