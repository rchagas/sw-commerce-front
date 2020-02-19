import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Offer } from '../model/offer';
import { tap, catchError } from 'rxjs/operators';

const apiUrl = 'https://localhost:5001/api/Offer';


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  getOffers (): Observable<Offer[]> {
    return this.http.get<Offer[]>(apiUrl)
      .pipe(
        tap(offers => console.log('OK')),
        catchError(this.handleError('getOffers', []))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
