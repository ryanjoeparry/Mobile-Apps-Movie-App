import { Component, OnInit, } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonSearchbar, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonSearchbar, IonIcon, CommonModule, IonButtons, IonButton],
})
export class HomePage {
  movies: any[] = [];

  constructor(private movieService: MovieService) {
    this.movieService.getTrending().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  search(event: any) {
    const query = event.target.value;
    if (query && query.length > 2) {
      this.movieService.searchMovies(query).subscribe((data: any) => {
        this.movies = data.results;
      });
    } else if (!query) {
      this.movieService.getTrending().subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
}