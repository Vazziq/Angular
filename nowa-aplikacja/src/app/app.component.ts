import { Component, OnDestroy, OnInit } from '@angular/core';
import { OsobyService } from './osoby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
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
  dzisiaj = new Date();
  kasa = 2.23;



  constructor(private osobyService: OsobyService) { }

  ngOnInit() {
    console.log('komponment init');

  }

  ngOnDestroy() {
    console.log('komponent zniszczony');
  }

  wyslij = () => {
    this.wyswietl = !this.wyswietl
  };
};