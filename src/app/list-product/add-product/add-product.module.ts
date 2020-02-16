import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
  ]
})
export class AddProductModule { }
