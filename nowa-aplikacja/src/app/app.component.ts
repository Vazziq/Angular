import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  imie = 'Krystian';
  wyswietl = true;
  osoby = [
    { imie: 'Krystian', wiek: 25 },
    { imie: 'Damian', wiek: 45 },
    { imie: 'Marcin', wiek: 33 },
    { imie: 'Karol', wiek: 41 },
    { imie: 'Grzegorz', wiek: 56 },
    { imie: 'Kacper', wiek: 21 },
  ];


  wyslij = () => {
    this.wyswietl = !this.wyswietl
  };
};