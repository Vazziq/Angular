import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  naszObservable$ = new Observable( observer => {
    observer.next();
  });

  wszystkieOsosby() {
  }
}
