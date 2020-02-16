import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductRoutingModule } from './list-product.routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        ListProductRoutingModule,
        AppMaterialModule,
        ReactiveFormsModule,
    ],
    exports:[
        ListProductComponent,
    ],
    declarations:[
        ListProductComponent,
        AddProductComponent,
        EditProductComponent,
    ],
    providers:[]
})

export class ListProductModule{}