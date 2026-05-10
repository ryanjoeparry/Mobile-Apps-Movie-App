import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons, IonButton, IonIcon, } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon,]
})
export class MovieDetailsPage implements OnInit {
  movie: any;
  cast: any[] = [];
  crew: any[] = [];

  isFavourite: boolean = false;

  goToFavourites() {
    this.router.navigate(['/favourites']);
  }

  constructor(private movieService: MovieService, private router: Router, private storage: Storage) {
    this.storage.create();
    const navigation = this.router.getCurrentNavigation();
    this.movie = navigation?.extras?.state?.['movie'];
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  async checkFavourite() {
    const favourites = await this.storage.get('favourites') || [];
    this.isFavourite = favourites.some((f: any) => f.id === this.movie.id);
  }
  
  async toggleFavourite() {
    const favourites = await this.storage.get('favourites') || [];
    if (this.isFavourite) {
      const updated = favourites.filter((f: any) => f.id !== this.movie.id);
      await this.storage.set('favourites', updated);
    } else {
      favourites.push(this.movie);
      await this.storage.set('favourites', favourites);
    }
    this.isFavourite = !this.isFavourite;
  }
  
  goToPersonDetails(person: any) {
    this.router.navigate(['/details', person.id], { state: { person } });
  }

  ngOnInit() {
    this.checkFavourite();
    if (this.movie) {
      this.movieService.getCredits(this.movie.id).subscribe((data: any) => {
        this.cast = data.cast;
        this.crew = data.crew;
      });
    }

 
  }

}
