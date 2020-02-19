import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Sale } from '../model/sale';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  data: Object = [];

  constructor(
    private _cartService: CartService) { }

  ngOnInit() {
    this.list();
  }

  remFromCart(productId: number){
    console.log(productId);
    this._cartService.remCart(productId);
    this.list();
  }

  list(){
    this._cartService.getCart().subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => {
      console.log(err);
    });
  }

}
