import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MovieDetailsPage implements OnInit {
  movie: any;
  cast: any[] = [];
  crew: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.movie = navigation?.extras?.state?.['movie'];
  }

  ngOnInit() {
    if (this.movie) {
      this.movieService.getCredits(this.movie.id).subscribe((data: any) => {
        this.cast = data.cast;
        this.crew = data.crew;
      });
    }
  }

}
