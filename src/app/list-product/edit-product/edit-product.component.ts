import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from 'src/app/service/product.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  editForm: FormGroup;
  offerId;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditProductComponent>,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.offerId = this.data.product.offerId.toString();
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.data.product.id],
      name: [this.data.product.name],
      price: [this.data.product.price],
      image: [this.data.product.image],
      offerId: [this.data.product.offerId]
    });
  }

  onSubmit(){
    this.editForm.value.offerId = parseInt(this.offerId);
    this._productService.updateProduct(this.editForm.value);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
