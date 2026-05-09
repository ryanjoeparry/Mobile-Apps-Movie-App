import { Component, OnInit, } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonSearchbar, IonIcon } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonSearchbar, IonIcon, CommonModule,],
})
export class HomePage {
  movies: any[] = [];
  constructor(private movieService: MovieService) {}
  
  ngOnInit(){
    this.movieService.getTrending().subscribe((data: any) => {
      this.movies = data.results;
    });
  
  }
}
