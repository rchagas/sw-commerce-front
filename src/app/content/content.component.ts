import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  productService: ProductService;
  dataSource: Product[];

  constructor(private products: ProductService ) {
    this.productService = products;
   }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
  }

}
