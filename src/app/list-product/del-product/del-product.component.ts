import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-del-product',
  templateUrl: './del-product.component.html',
  styleUrls: ['./del-product.component.css']
})
export class DelProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelProductComponent>,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data) { 
      console.log(data.product);
    
  }

  ngOnInit() {
  }

  delProduct(): void{
    let options ={
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body : this.data.product
    };
    this._productService.delProduct(options);
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
