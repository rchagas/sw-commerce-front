import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { sample } from 'rxjs/operators';

import { Sale } from '../../model/sale'
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})

export class AddCartComponent implements OnInit {

  amount: number;
  sales: Sale[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddCartComponent>,
    private _cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data){
      this.amount = 1;
    }

  ngOnInit() {
  }

  addToCart(){
    let sale: Sale = {
      amount: this.amount,
      productId: this.data.product.id
    };
    this._cartService.addCart(sale);
  }

  addAmount(){
    this.amount++
  }

  remAmount(){
    if(this.amount>1)
      this.amount--
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
