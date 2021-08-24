import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OsobyService } from '../osoby.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dwa',
  templateUrl: './dwa.component.html',
  styleUrls: ['./dwa.component.css']
})
export class DwaComponent implements OnInit {
  kasa = 2;

  nowyObservable$ = new Observable(observer => {
    setInterval(() => observer.next(new Date()), 1000)
  });


  constructor(
    private oS: OsobyService,
    private route: ActivatedRoute,

  ) { }



  ngOnInit() {
    this.oS.naszObservable$.subscribe(
      dane => {
        this.kasa = 10;
      }
    );
  }

}
