import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'b383fbe32ca6aaf4fe274cb53051949c';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }
  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`);
  }

  getCredits(movieId: number) {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }

  getPersonDetails(personId: number) {
    return this.http.get(`${this.baseUrl}/person/${personId}?api_key=${this.apiKey}`);
  }
  
  getPersonMovies(personId: number) {
    return this.http.get(`${this.baseUrl}/person/${personId}/movie_credits?api_key=${this.apiKey}`);
  }
}