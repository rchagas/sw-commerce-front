import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddProductComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ]
})
export class AddProductModule { }
