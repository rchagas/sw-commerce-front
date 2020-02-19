import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;
  offerId = '1';

  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddProductComponent>,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data) {

  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: [null],
      price: [null],
      image: [null],
      offerId: [1],
    })
  }

  onSubmit(){
    this.addForm.value.offerId = parseInt(this.offerId);
    this._productService.addProduct(this.addForm.value);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
