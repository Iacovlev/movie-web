import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/550?api_key=dbf6908a0fc03d060eca24dc645e6c6d')
  }
}
