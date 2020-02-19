import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DelProductComponent } from './del-product/del-product.component';
import { OfferService } from '../service/offer.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  
  products: Product[];
  offers;

  constructor(
    private productService: ProductService,
    private offerService: OfferService,
    public dialog: MatDialog ) {
   }

  ngOnInit() {
    this.list();
  }

  openAddProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '80%',
      data: { offers: this.offers }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.list();
    });
  }

  openEditProduct(product: Product): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '80%',
      data: { product, offers: this.offers}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.list();
    });
  }

  openDelProduct(product: Product): void {
    const dialogRef = this.dialog.open(DelProductComponent, {
      width: '80%',
      data: {product}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
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
    this.offerService.getOffers()
    .subscribe(res => {
      this.offers = res;
    }, err => {
      console.log(err);
    });
  }
}
