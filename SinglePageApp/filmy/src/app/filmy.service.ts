import { Injectable } from '@angular/core';
import { Film } from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    { id: 0, tytul: 'Forest Gump', opis: 'Chłop co sobie biega', rok: 1234 },
    { id: 1, tytul: 'Skazany na Shawshank', opis: 'No był sobie skazany', rok: 2345 },
    { id: 2, tytul: 'Zielona Mila', opis: 'A takie niedobre więzienie', rok: 3456 },
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;

  }
}
