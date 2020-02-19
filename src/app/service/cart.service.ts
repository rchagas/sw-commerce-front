import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Offer } from '../model/offer';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const apiUrl = 'https://localhost:5001/api/Cart';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
              private _cookieService: CookieService) { }

    getCart(): Observable<Object>{
      const option = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          body: this._cookieService.get('cart')
      }
      return this.http.post<Object>(apiUrl,this._cookieService.get('cart'),httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getCart', []))
      );
    }
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
        return of(result as T);
      };
    }
}

