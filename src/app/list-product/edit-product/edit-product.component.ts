import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/model/product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  product: Product;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient, 
    public dialogRef: MatDialogRef<EditProductComponent>,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
      this.product = data.product;
      console.log(this.product);
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.data.product.id],
      name: [this.data.product.name],
      price: [this.data.product.price],
      image: [this.data.product.image],
    });

  }

  onSubmit(){
    this._productService.updateProduct(this.editForm);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
