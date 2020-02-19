import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Sale } from '../model/sale';

const apiUrl = 'https://localhost:5001/api/Cart';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  sales: Sale[] = [];

  constructor(private http: HttpClient,
              private _cookieService: CookieService) { }

    addCart(sale: Sale){
      if(this._cookieService.get('cart') == null){
        this.sales.push(sale);
      }
      else{
        this.sales = JSON.parse(this._cookieService.get('cart'));
        if(this.sales.find(element => element.productId == sale.productId))
        {
          let pos = this.sales.findIndex(element => element.productId == sale.productId);
          this.sales.splice(pos,1);
        }
        this.sales.push(sale);
      }
      this._cookieService.putObject('cart', this.sales);
      console.log(this.sales)
    }

    remCart(productId: number){
      if(this.sales.find(element => element.productId == productId) != null)
      {
        let pos = this.sales.findIndex(element => element.productId == productId);
        this.sales.splice(pos,1);
        console.log(this.sales);
        this._cookieService.putObject('cart', this.sales);
      }
    }
    
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

