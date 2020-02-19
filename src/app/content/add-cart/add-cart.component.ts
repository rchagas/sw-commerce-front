import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { sample } from 'rxjs/operators';

interface Sale{
  amount: number;
  productId: number;
}

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
    private _cookieService: CookieService,
    @Inject(MAT_DIALOG_DATA) public data){
      this.amount = 1;
    }

  ngOnInit() {
  }

  cart(){
    let sale: Sale = {
      amount: this.amount,
      productId: this.data.product.id
    };
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
