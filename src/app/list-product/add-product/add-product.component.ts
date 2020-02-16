import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

import { ProductService } from 'src/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddProductComponent>,
    private _productService: ProductService) { 
    
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: [null],
      price: [null],
      image: [null],
    })
  }

  onSubmit(){
    console.log(this.addForm.value);
    this._productService.addProduct(this.addForm);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
