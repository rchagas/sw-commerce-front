import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { AddCartComponent } from './add-cart/add-cart.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog) {
   }

  ngOnInit() {
    this.list();
  }

  addCart(product: Product){
    const dialogRef = this.dialog.open(AddCartComponent, {
      panelClass: 'panel',
      width: '80%',
      data: {product}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.list();
    });
  }

  list(){
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
    }, err => {
      console.log(err);
    });
  }

}
