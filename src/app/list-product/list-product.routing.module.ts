import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product.component';

const listProductRoutes =[
    {path:'ListProduct', component: ListProductComponent},
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