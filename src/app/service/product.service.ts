import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Product } from 'src/app/model/product';

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
        tap(),
        catchError(this.handleError('getProdutos', []))
      );
  }
 
  addProduct(product) {
    this.http.post(apiUrl,product)
    .subscribe(dados => console.log(dados),err => console.log(err));
  }

  updateProduct(product){
    console.log(product);
    this.http.put(apiUrl,product)
      .subscribe(dados => console.log(dados),err => console.log(err));
  }

  delProduct(product){
    console.log(product);
    this.http.delete(apiUrl,product)
    .subscribe(dados => console.log(dados),err => console.log(err));
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}