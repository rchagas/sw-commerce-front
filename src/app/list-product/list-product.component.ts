import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from 'src/service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productService: ProductService;
  dataSource: Product[];

  constructor(private products: ProductService, public dialog: MatDialog ) {
    this.productService = products;
   }

  ngOnInit() {
    this.listProduct();
  }

  openAddProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listProduct();
    });
  }

  openEditProduct(product: Product): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '80%',
      data: {product}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.listProduct();
    });
  }

  listProduct(){
    this.productService.getProducts()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
  }
}
