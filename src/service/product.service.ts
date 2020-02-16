import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Product } from 'src/model/product';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:5001/api/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('OK')),
        catchError(this.handleError('getProdutos', []))
      );
  }
 
  addProduct(form) {
    this.http.post(apiUrl,
    form.value)
    .subscribe(dados => console.log(dados),err => console.log(err));
  }

  updateProduct(form){
    this.http.put(apiUrl,
      form.value)
      .subscribe(dados => console.log(dados),err => console.log(err));
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}