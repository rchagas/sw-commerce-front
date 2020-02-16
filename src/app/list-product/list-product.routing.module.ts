import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const listProductRoutes =[
    {path:'ListProduct', component: ListProductComponent, chidren: [
        {path:'AddProduct', component: AddProductComponent},
        {path:':id/EditProduct', component: EditProductComponent}        
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(listProductRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class ListProductRoutingModule {}