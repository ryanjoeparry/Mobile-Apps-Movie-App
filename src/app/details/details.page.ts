import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  person: any;
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.person = navigation?.extras?.state?.['person'];
  }

  ngOnInit() {
    if (this.person) {
      const personId = this.person.id;
      this.movieService.getPersonDetails(personId).subscribe((data: any) => {
        this.person = data;
      });
      this.movieService.getPersonMovies(personId).subscribe((data: any) => {
        this.movies = data.cast;
      });
    }
  }

}
