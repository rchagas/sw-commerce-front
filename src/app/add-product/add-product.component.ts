import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: [null],
      price: [null],
      image: [null]
    })
  }

  onSubmit(){
    console.log(this.addForm.value);
    this.http.post('https://localhost:5001/api/Product',
      this.addForm.value)
      .subscribe(dados => console.log(dados));
  }

}
