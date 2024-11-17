import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component"; 
import { MovieSearchComponent } from './movie-list/movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie-list/movie-details/movie-details.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterModule,  MovieListComponent, MovieSearchComponent, MovieDetailsComponent], 
})
export class AppComponent {
  title = 'movie-web';
}
